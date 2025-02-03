//initiating firebase sdk and starting the service via node.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const admin = require("firebase-admin");

// Convert environment variables into a JSON object
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Convert newline characters back
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
};

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
const db = admin.firestore();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/submit-callback", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await db.collection("callback_requests").add({
      name,
      email,
      phone,
      created_at: admin.firestore.Timestamp.now(),
    });

    res.status(200).json({ message: "Request submitted successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
