const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Shoe = {
    findAll: async () => {
        return await prisma.shoe.findMany();
    },

    findById: async (id) => {
        return await prisma.shoe.findUnique({
            where: { id: parseInt(id) },
        });
    },

    create: async (data) => {
        return await prisma.shoe.create({
            data,
        });
    },

    update: async (id, data) => {
        return await prisma.shoe.update({
            where: { id: parseInt(id) },
            data,
        });
    },

    delete: async (id) => {
        return await prisma.shoe.delete({
            where: { id: parseInt(id) },
        });
    },
};

module.exports = Shoe;