const geoip = require("geoip-lite");

exports.checkAccess = (ip = "") => {
	if (!ip || ip === "127.0.0.1")
		throw new Error("Your localhost IP adress can't be checked.");
	if (ip === "127.0.0.1") return true;
	let { country } = geoip.lookup(ip);
	console.log(country);
	switch (country) {
		case "BY":
		case "PL":
			return true;
		// case "PL" - we can provide more options
		// ... if needed
		default:
			return false;
	}
};
