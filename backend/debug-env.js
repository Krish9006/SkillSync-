require('dotenv').config();

console.log("---- DEBUG INFO ----");
console.log("Current Directory:", process.cwd());
console.log("MONGO_URI value:", process.env.MONGO_URI);
console.log("--------------------");

if (!process.env.MONGO_URI) {
    console.log("ERROR: MONGO_URI is undefined.");
} else if (process.env.MONGO_URI.includes("cluster0.mongodb.net") && !process.env.MONGO_URI.includes("hz7j1ja")) {
    console.log("WARNING: You seem to be using the default/example placeholder URL.");
} else {
    console.log("URL looks likely correct.");
}

if (!process.env.JWT_SECRET) {
    console.log("ERROR: JWT_SECRET is undefined.");
} else {
    console.log("JWT_SECRET is LOADED: " + process.env.JWT_SECRET);
}
