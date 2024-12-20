const express = require ("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rute untuk register pengguna baru
router.post("/register", authController.register);

// Rute untuk login pengguna
router.post("/login", authController.login);

module.exports = router; // Mengekspor router