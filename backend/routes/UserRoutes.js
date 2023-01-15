const router = require("express").Router();

const UserController = require("../controllers/UserController");

//middlewares
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/checkUser", UserController.checkUser);
router.patch(
    "/edit/:id",
    verifyToken,
    imageUpload.single("image"),
    UserController.editUser
);
router.get("/:id", UserController.getUserById);

module.exports = router;
