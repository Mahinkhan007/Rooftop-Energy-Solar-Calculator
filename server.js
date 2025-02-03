//initiating firebase sdk and starting the service via node.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const serviceAccount = require("./firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

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

// const firebaseConfig = {
//     apiKey: "AIzaSyCIYG6Sz11srpFNZdzO06QKeBcB0dXc7a8",
//     authDomain: "solar-calculator-7110c.firebaseapp.com",
//     projectId: "solar-calculator-7110c",
//     storageBucket: "solar-calculator-7110c.firebasestorage.app",
//     messagingSenderId: "16000100010",
//     appId: "1:16000100010:web:92462ce883b24869d252d3"
//   };
