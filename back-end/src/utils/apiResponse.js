const apiResponse = {
    success: (res, data, description = "Operation successful") => {
        res.status(200).json({
            status: "success",
            description,
            data,
        });
    },

    error: (res, description = "Operation failed", statusCode = 400) => {
        res.status(statusCode).json({
            status: "error",
            description,
            data: null,
        });
    },
};

module.exports = apiResponse;