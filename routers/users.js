const express = require("express");
const usersControllers = require("../controller/usersControllers.js");

const router = express.Router();


router.get("/", usersControllers.index);

router.get("/create", usersControllers.create);
router.get("/register", usersControllers.register);

router.get("/detail/:idUser", usersControllers.detail);


module.exports = router;