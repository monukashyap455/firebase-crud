
const admin = require("firebase-admin");

const serviceAccount = require("../../firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
// const user = db.collection('users');


// module.exports = user;
module.exports = db;

