module.exports.config = {
	name: "اعاده التشغيل",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "عمر",
	description: "اعاده تشغيل البوت",
	commandCategory: "المطور",
	cooldowns: 5000,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = [`61550232547706`,`61550232547706`];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ليس لديك الصلاحية", event.threadID, event.messageID);
    return api.sendMessage("جاري اعادة تشغيل البوت 📩🔍📥🌐", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
