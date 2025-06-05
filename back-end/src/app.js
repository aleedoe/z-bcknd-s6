require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Tambahkan ini
const app = express();
const adminRouter = require("./routes/admin.route");
const customerRouter = require("./routes/customer.route");

// Middleware
app.use(express.json());

// CORS Configuration - Tambahkan ini
app.use(cors({
    origin: 'http://localhost:3000', // Izinkan hanya dari frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests - Tambahkan ini
app.options('*', cors());

// Routes
app.use("/admin", adminRouter);
app.use("", customerRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "error",
        description: "Internal server error",
        data: null,
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;