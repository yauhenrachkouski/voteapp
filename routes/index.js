const express = require("express");
const router = express.Router();
const candidates = require("./candidates.routes");
const votes = require("./votes.routes");

router.use("/candidates", candidates);
router.use("/vote", votes);

module.exports = router;
