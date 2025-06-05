const jwt = require("jsonwebtoken");
const apiResponse = require("../utils/apiResponse");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const authenticateAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return apiResponse.error(res, "No token provided", 401);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await prisma.admin.findUnique({
            where: { id: decoded.id },
        });

        if (!admin) {
            return apiResponse.error(res, "Admin not found", 401);
        }

        req.admin = admin;
        next();
    } catch (error) {
        return apiResponse.error(res, "Invalid token", 401);
    }
};

module.exports = { authenticateAdmin };