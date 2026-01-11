// Native fetch in Node 18+
const API_URL = 'http://localhost:5000/api';

async function runTestFlow() {
    console.log("🚀 Starting End-to-End Backend Test...\n");

    // 1. REGISTER NEW USER
    const randomNum = Math.floor(Math.random() * 10000);
    const userData = {
        name: `Flow Tester ${randomNum}`,
        email: `flow${randomNum}@test.com`,
        password: "password123"
    };

    let token = "";

    try {
        console.log(`1️⃣  Registering User (${userData.email})...`);
        const regRes = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const regData = await regRes.json();

        if (!regRes.ok) throw new Error(regData.message);

        // Note: Our API sends token in HTTP-only cookie, 
        // BUT for this test script to work without browser cookie handling, 
        // we might need to rely on the token being returned in JSON or login again.
        // Let's check our auth controller.
        // Controller sends: res.json({ _id, name, email ... }) -> It does NOT send token in body by default in the code I wrote earlier?
        // Wait, I should check auth.controller.js.
        // If it doesn't return token in body, this script can't get it easily without parsing set-cookie header.

        // Let's assume for a moment I need to login to be sure, or check if I updated the controller.
        // Looking at previous context, generateToken was calling res.cookie.
        // AND res.json({...}) usually contains tokens in MERN tutorials, but let's see.

        // Actually, for the frontend integration I wrote earlier (AuthContext), checking `test-auth.js` output: "Token: Received (Hidden)".
        // Wait, `test-auth.js` printed "Token: Received (Hidden)" if `data.token` existed.
        // Let's Assume the controller returns it. If not, I might fail here.

        // If the controller only sets cookie, I need to parse 'set-cookie' header.
        // Let's try to proceed.

        // Use login to be sure we get the same response structure
        console.log(`2️⃣  Logging In...`);
        const loginRes = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userData.email, password: userData.password })
        });
        const loginData = await loginRes.json();

        // In the AuthContext I wrote: localStorage.setItem("user", JSON.stringify(data));
        // And in CreateProfile I used: const token = storedUser?.token;
        // So I assumed the backend returns the token in the JSON body.

        if (loginData.token) {
            token = loginData.token;
            console.log("✅ Login Success! Token Received.");
        } else {
            // Need to extract from cookie if not in body
            const cookie = loginRes.headers.get('set-cookie');
            if (cookie) {
                console.log("⚠️ Token in Cookie only. (This is good for security).");
                // For this script, we need the token string to send in Authorization header for other routes
                // But wait, my middleware checks req.cookies.token OR req.headers.authorization.
                // So I can just manually grab it if I could parse it, but standard fetch doesn't make it easy to extract HttpOnly cookies value.

                // CRITICAL: If I didn't put token in res.json(), my Frontend AuthContext won't verify it either 
                // unless it relies purely on the browser sending cookies back.
                // My CreateProfilePage uses `Authorization: Bearer ${token}`, so it EXPECTS token in JSON.
                // if it's missing, frontend will fail.
                throw new Error("Token not found in login response body. Frontend will fail.");
            } else {
                throw new Error("Login failed or no token returned.");
            }
        }

        // 3. UPDATE PROFILE
        console.log(`\n3️⃣  Updating Profile...`);
        const profileData = {
            role: "Full Stack Engineer",
            college: "Test University",
            skills: ["Node.js", "React", "Testing"]
        };

        const profileRes = await fetch(`${API_URL}/users/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(profileData)
        });
        const profileJson = await profileRes.json();

        if (profileRes.ok) {
            console.log("✅ Profile Updated:", profileJson.role);
        } else {
            throw new Error(`Profile Update Failed: ${profileJson.message}`);
        }

        // 4. CREATE PROJECT
        console.log(`\n4️⃣  Creating Project...`);
        const projectData = {
            title: "Automated Test Project",
            pitch: "Testing the API flow",
            description: "This is a project created by the automated test script.",
            category: "Project",
            tags: ["Automation", "Node"]
        };

        const projRes = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(projectData)
        });
        const projJson = await projRes.json();

        if (projRes.ok) {
            console.log("✅ Project Created:", projJson.title);
        } else {
            throw new Error(`Project Creation Failed: ${projJson.message}`);
        }

        // 5. GET PROJECTS
        console.log(`\n5️⃣  Fetching All Projects...`);
        const getProjRes = await fetch(`${API_URL}/projects`);
        const allProjects = await getProjRes.json();

        if (getProjRes.ok) {
            console.log(`✅ Fetched ${allProjects.length} Projects.`);
            const found = allProjects.find(p => p.title === projectData.title);
            if (found) console.log("✅ Verified: Created project is in the list!");
            else console.log("❌ Created project NOT found in list.");
        } else {
            throw new Error("Failed to fetch projects.");
        }

        console.log("\n🎉 END-TO-END TEST PASSED! The Backend is fully functional.");

    } catch (error) {
        console.error("\n❌ TEST FAILED:", error.message);
    }
}

runTestFlow();
