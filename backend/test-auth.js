// Native fetch in Node 18+

async function testRegister() {
    console.log("Testing Registration...");

    // Random email to allow multiple runs
    const randomNum = Math.floor(Math.random() * 1000);
    const userData = {
        name: "Test User",
        email: `test${randomNum}@example.com`,
        password: "password123"
    };

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            console.log("✅ SUCCESS: User Registered!");
            console.log("User ID:", data._id);
            console.log("Token:", data.token ? "Received (Hidden)" : "Missing");
            console.log("Database should now be visible in Atlas.");
        } else {
            console.log("❌ FAILED:", data.message);
        }
    } catch (error) {
        console.log("❌ ERROR:", error.message);
        console.log("Make sure the server is running on port 5000!");
    }
}

testRegister();
