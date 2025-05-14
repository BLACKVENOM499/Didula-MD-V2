const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

FOOTER: process.env.FOOTER || "*AKINDU MD*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xSDk79gJ/SulaMd.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2*",
ANTI_CALL: process.env.ANTI_CALL || "false",

//   Add your session id




SESSION_ID: process.env.SESSION_ID || "t2dDTBxT#75mzA5Vp3fEtqxY1EnpHSwWSJjsrzDgg9tYA0gPXjII",



//   Add your session id









ALIVE_REACT: process.env.ALIVE_REACT || "⚠️",
};


