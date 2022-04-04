const express = require("express");
const router = express.Router();
const { getCandidates } = require("../candidates");

//
router.get("/", async (req, res) => {
	try {
		const candidates = await getCandidates();
		res.status(200).send(candidates);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

module.exports = router;
