const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { authenticateAdmin } = require("../middlewares/auth.middleware");

// Auth routes
router.post("/login", adminController.login);

// Shoe routes (protected)
router.use(authenticateAdmin);
router.get("/shoes", adminController.getAllShoes);
router.get("/shoes/:id", adminController.getShoeById);
router.post("/shoes", adminController.createShoe);
router.put("/shoes/:id", adminController.updateShoe);
router.delete("/shoes/:id", adminController.deleteShoe);

module.exports = router;