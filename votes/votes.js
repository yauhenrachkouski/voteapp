const { prisma } = require("../prisma/client");

exports.addVote = async ({ candidateId, passportNumber } = {}) => {
	try {
		return await prisma.votes.create({
			data: {
				candidate: {
					connect: {
						id: parseInt(candidateId),
					},
				},
				passportNumber,
			},
		});
	} catch (e) {
		console.error(e);
		throw Error("Can't add your vote.");
	}
};
