const Shoe = require("../models/shoe.model");
const apiResponse = require("../utils/apiResponse");

const shoeService = {
    getAllShoes: async (res) => {
        try {
            const shoes = await Shoe.findAll();
            return apiResponse.success(res, shoes, "Shoes retrieved successfully");
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },

    getShoeById: async (res, id) => {
        try {
            const shoe = await Shoe.findById(id);
            if (!shoe) {
                return apiResponse.error(res, "Shoe not found", 404);
            }
            return apiResponse.success(res, shoe, "Shoe retrieved successfully");
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },

    createShoe: async (res, shoeData) => {
        try {
            const newShoe = await Shoe.create(shoeData);
            return apiResponse.success(res, newShoe, "Shoe created successfully", 201);
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },

    updateShoe: async (res, id, shoeData) => {
        try {
            const updatedShoe = await Shoe.update(id, shoeData);
            return apiResponse.success(res, updatedShoe, "Shoe updated successfully");
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },

    deleteShoe: async (res, id) => {
        try {
            await Shoe.delete(id);
            return apiResponse.success(res, null, "Shoe deleted successfully");
        } catch (error) {
            return apiResponse.error(res, error.message);
        }
    },
};

module.exports = shoeService;