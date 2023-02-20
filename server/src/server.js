const app = require("./app");
const { connectDB } = require("./modules/db/mongo");
const PORT = 4000;

const setup = () => {
    const { updateSchema } = require("./modules/models/video/schema");
    updateSchema();
    const { setupRoute } = require("./modules/models/video/controller");
    setupRoute();
};

app.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`);
    await connectDB();
    setup();
    app.use("*", (req, res) => {
        res.json(`Page Not Found`);
    });
    console.log(`Application setup Completed`);
});
