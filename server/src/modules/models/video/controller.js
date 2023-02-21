const app = require("../../../app");
const BASE_URL = `/api/v1`;

const { uploadProcess } = require("./multer");

const setupRoute = () => {
    app.get(`${BASE_URL}/test`, (req, res) => {
        res.json({
            status: "Success",
            message: "Ok",
        });
    });

    app.post(`${BASE_URL}/upload`, uploadProcess, async (req, res) => {
        try {
            const { title } = req.body;
            res.send(req.file);
        } catch (error) {
            res.send(error);
        }
    });

    app.use(() => (err, req, res, next) => {
        console.log("error handler", err);
        if (err instanceof multer.MulterError) {
            return res.status(418).send(err.code);
        }
        next();
    });
};

module.exports = { setupRoute };
