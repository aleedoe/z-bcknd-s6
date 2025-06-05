const shoeService = require("../services/shoe.service");

const customerController = {
    getAllShoes: async (req, res) => {
        await shoeService.getAllShoes(res);
    },

    getShoeById: async (req, res) => {
        await shoeService.getShoeById(res, req.params.id);
    },
};

module.exports = customerController;