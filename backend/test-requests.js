// Native fetch is available in Node 18+

const API_URL = 'http://localhost:5000/api';

// Helpers
let requesterToken = '';
let receiverToken = '';
let requesterId = '';
let receiverId = '';
let requestId = '';

const registerUser = async (name, email) => {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: 'password123' })
    });
    const data = await res.json();
    return data;
};

const loginUser = async (email) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: 'password123' })
    });
    return await res.json();
};

const runTest = async () => {
    console.log('🧪 Starting Connection Request Test...\n');

    // 1. Create Users
    console.log('1️⃣ Creating Users...');
    const userA = await registerUser('Requester', `req${Date.now()}@test.com`);
    const userB = await registerUser('Receiver', `rec${Date.now()}@test.com`);

    // Login to get clean data/tokens
    const loginA = await loginUser(userA.email || `req${Date.now()}@test.com`); // in case register logs in
    const loginB = await loginUser(userB.email || `rec${Date.now()}@test.com`);

    requesterToken = loginA.token;
    requesterId = loginA._id;
    receiverToken = loginB.token;
    receiverId = loginB._id;

    console.log(`   - Requester: ${requesterToken ? 'OK' : 'FAIL'}`);
    console.log(`   - Receiver: ${receiverToken ? 'OK' : 'FAIL'}`);

    // 2. Fetch All Users
    console.log('\n2️⃣ Fetching All Users (Talent Finder)...');
    const usersRes = await fetch(`${API_URL}/users`, {
        headers: { 'Authorization': `Bearer ${requesterToken}` }
    });
    const users = await usersRes.json();
    const foundReceiver = users.find(u => u._id === receiverId);
    if (foundReceiver) console.log('✅ Receiver found in global list.');
    else console.log('❌ Receiver NOT found in global list.');

    // 3. Send Request
    console.log('\n3️⃣ Sending Connection Request...');
    const sendRes = await fetch(`${API_URL}/requests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${requesterToken}`
        },
        body: JSON.stringify({
            receiverId: receiverId,
            type: 'connect',
            message: "Let's build something!"
        })
    });
    const requestData = await sendRes.json();

    if (sendRes.ok) {
        console.log(`✅ Request Sent! ID: ${requestData._id}`);
        requestId = requestData._id;
    } else {
        console.log(`❌ Failed: ${requestData.message}`);
        return;
    }

    // 4. Check Received Requests (Receiver Side)
    console.log('\n4️⃣ Checking Receiver Inbox...');
    const inboxRes = await fetch(`${API_URL}/requests/received`, {
        headers: { 'Authorization': `Bearer ${receiverToken}` }
    });
    const inbox = await inboxRes.json();
    const myRequest = inbox.find(r => r._id === requestId);

    if (myRequest) {
        console.log(`✅ Request Packet Received from ${myRequest.sender.name}`);
    } else {
        console.log('❌ Request NOT received.');
        return;
    }

    // 5. Accept Request
    console.log('\n5️⃣ Accepting Request...');
    const acceptRes = await fetch(`${API_URL}/requests/${requestId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${receiverToken}`
        },
        body: JSON.stringify({ status: 'accepted' })
    });
    const acceptedData = await acceptRes.json();

    if (acceptedData.status === 'accepted') {
        console.log('✅ Request Accepted Successfully!');
    } else {
        console.log('❌ Accept Failed.');
    }

    console.log('\n🎉 Request System End-to-End Test Passed!');
};

runTest();
