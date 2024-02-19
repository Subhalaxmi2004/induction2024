// index.js (server-side)

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3000;
const app = express();

const MONGODB_URL = "mongodb+srv://subhalaxmi09102004:K5QGSJOngcZMXHFh@cluster0.bddmuyv.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URL);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log("MongoDB connection error:", err);
});
db.once('open', () => {
    console.log("MongoDB connected");
});

// Define User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    Registration: Number,
    branch: String,
    domain1: String,
    domain2: String
});
const User = mongoose.model('User', userSchema);

// Handle POST request to /register
app.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
