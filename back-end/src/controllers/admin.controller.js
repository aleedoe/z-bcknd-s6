const shoeService = require("../services/shoe.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const apiResponse = require("../utils/apiResponse");

const adminController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            const admin = await prisma.admin.findUnique({
                where: { username },
            });

            if (!admin || !(await bcrypt.compare(password, admin.password))) {
                return apiResponse.error(res, "Invalid credentials", 401);
            }

            const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });

            return apiResponse.success(res, { token }, "Login successful");
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },

    getAllShoes: async (req, res) => {
        await shoeService.getAllShoes(res);
    },

    getShoeById: async (req, res) => {
        await shoeService.getShoeById(res, req.params.id);
    },

    createShoe: async (req, res) => {
        const shoeData = req.body;
        await shoeService.createShoe(res, shoeData);
    },

    updateShoe: async (req, res) => {
        const shoeData = req.body;
        await shoeService.updateShoe(res, req.params.id, shoeData);
    },

    deleteShoe: async (req, res) => {
        await shoeService.deleteShoe(res, req.params.id);
    },
};

module.exports = adminController;