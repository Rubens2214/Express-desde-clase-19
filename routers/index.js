const express = require("express");
const router = express.Router();
const path = require("path");
const indexControllers = require("../controller/indexControllers")

router.get("/index", indexControllers.index);

module.exports = router;