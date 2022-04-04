const express = require("express");
const router = express.Router();
const { addVote } = require("../votes");
const { checkAccess } = require("../utils");

router.post("/", async (req, res) => {
	try {
		const { candidateId, passportNumber } = req.body;
		if (!(candidateId && passportNumber))
			res.status(422).send("Your request is incorrect");

		// Getting ip of the request
		const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

		const accessGranted = checkAccess(ip);
		if (accessGranted) {
			const vote = await addVote({ candidateId, passportNumber });
			if (vote) {
				res.status(200).send("Your vote was successfully added");
			}
		} else {
			res.status(403).send("Access to this URL from your country is denied.");
		}
	} catch (e) {
		res.status(500).send(`Something went wrong. ${e.message}`);
	}
});

module.exports = router;
