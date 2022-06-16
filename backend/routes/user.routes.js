const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// auth
router.post("/register", authController.signUp);

// user db

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);

module.exports = router;
