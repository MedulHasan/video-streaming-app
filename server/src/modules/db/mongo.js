const { MongoClient } = require("mongodb");
const url = `mongodb://localhost:27017`;

let _db = null;
const connectDB = async () => {
    console.log(`Connecting to mongodb...`);
    const client = new MongoClient(url);
    await client.connect();
    _db = client.db("videoDB");
    console.log(`Connected to mongodb`);
    return _db;
};

const getDB = () => {
    return _db;
};

module.exports = {
    connectDB,
    getDB,
};
