const express = require("express");
const router = express.Router();
const cruxController = require("../controllers/cruxController");

router.post("/", cruxController.getCruxData);

module.exports = router;
