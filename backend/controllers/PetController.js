const { json } = require("express");
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const Pet = require("../models/Pets");

module.exports = class PetController {
    //criar pet
    static async create(req, res) {
        const { name, age, weight, color } = req.body;

        const available = true;

        //images upload

        //validation
        if (!name) {
            res.status(422).json({
                message: "O nome é obrigatorio",
            });
            return;
        }

        if (!age) {
            res.status(422).json({
                message: "A idade é obrigatoria",
            });
            return;
        }

        if (!weight) {
            res.status(422).json({
                message: "O peso é obrigatorio",
            });
            return;
        }

        if (!color) {
            res.status(422).json({
                message: "A cor é obrigatoria",
            });
            return;
        }

        //get pet owner
        const token = getToken(req);
        const user = await getUserByToken(token);
        //create pet
        const pet = new Pet({
            name,
            age,
            weight,
            color,
            available,
            images: [],
            user: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone,
            },
        });

        try {
            const newPet = await pet.save();

            res.status(201).json({
                message: "Pet cadastrado com sucesso",
                newPet,
            });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
};
