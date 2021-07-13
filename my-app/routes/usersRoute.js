const express = require("express");

const { usersControllers } = require("../controllers/usersControllers");

router = express.Router();

usersRoute = require("../controllers/usersControllers");

router.get("/", usersRoute.usersControllers);

module.exports = router;