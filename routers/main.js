const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controller/mainController")

router.get("/", mainController.index);
router.get("/about", mainController.about);

module.exports = router;