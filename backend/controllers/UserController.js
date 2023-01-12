const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = class UserController {
    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body;

        //validations
        if (!name) {
            res.status(422).json({
                message: "O nome é obrigatório",
            });
            return;
        }

        if (!email) {
            res.status(422).json({
                message: "O email é obrigatório",
            });
            return;
        }

        if (!phone) {
            res.status(422).json({
                message: "O telefone é obrigatório",
            });
            return;
        }

        if (!password) {
            res.status(422).json({
                message: "A senha é obrigatória",
            });
            return;
        }

        if (!confirmpassword) {
            res.status(422).json({
                message: "A confirmação de senha é obrigatória",
            });
            return;
        }

        if (password !== confirmpassword) {
            res.status(422).json({
                message: "As senhas não conferem",
            });
            return;
        }

        //checar se usuario existe
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            res.status(422).json({
                message: "Email já cadastrado!",
            });
            return;
        }

        //criar senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        //criar user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash,
        });

        try {
            const newUser = await user.save();
            res.status(201).json({
                message: "Usuario criado com sucesso!",
                newUser,
            });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
};
