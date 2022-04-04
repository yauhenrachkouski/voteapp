const { prisma } = require("../prisma/client");

exports.getCandidates = async () => {
	try {
		return await prisma.Candidates.findMany({
			include: {
				_count: {
					select: { votes: true },
				},
			},
		});
	} catch (e) {
		throw Error(e);
	}
};
