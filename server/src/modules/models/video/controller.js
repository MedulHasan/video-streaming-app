const app = require("../../../app");
const BASE_URL = `/api/v1`;

const setupRoute = () => {
    app.get(`${BASE_URL}/`, (req, res) => {
        res.json({
            status: "Success",
            message: "Ok",
        });
    });
};

module.exports = { setupRoute };
