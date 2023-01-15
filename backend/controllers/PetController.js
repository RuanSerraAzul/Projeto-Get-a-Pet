const Pet = require("../models/Pets");

module.exports = class PetController {
    //criar pet
    static async create(req, res) {
        res.json({ message: "Deu bom" });
    }
};
