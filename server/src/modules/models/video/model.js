const { getDB } = require("../../db/mongo");

const collectionName = "videos";
const getCollection = () => {
    const db = getDB();
    const collection = db.collection(collectionName);
    return collection;
};

module.exports = {
    Video: getCollection(),
    name: collectionName,
};
