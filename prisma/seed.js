const { PrismaClient } = require("@prisma/client");
const { candidates } = require("./seeds/candidates");

const run = async () => {
	const prisma = new PrismaClient();
	try {
		if (await prisma.candidates.count() === 0) {
			await prisma.candidates.createMany({ data: candidates });
		} else {
			console.log("Default candidates and votes have already created");
		}
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

run();
