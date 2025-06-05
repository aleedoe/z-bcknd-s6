const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.get("/shoes", customerController.getAllShoes);
router.get("/shoes/:id", customerController.getShoeById);

module.exports = router;