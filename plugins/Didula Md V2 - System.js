const fs = require('fs');
const {
  exec
} = require("child_process");
const {
  cmd
} = require("../command");
const updateConfig = (_0x264ed5, _0x19179e) => {
  try {
    let _0x1cb974 = fs.readFileSync("./config.js", "utf8");
    const _0x394acb = "    " + _0x264ed5 + ": \"" + _0x19179e + "\",";
    if (_0x1cb974.includes(_0x264ed5 + ':')) {
      const _0x4dcdb0 = new RegExp(_0x264ed5 + ":.*,", 'g');
      _0x1cb974 = _0x1cb974.replace(_0x4dcdb0, _0x394acb);
    } else {
      _0x1cb974 = _0x1cb974.replace(/};\s*$/, "    " + _0x394acb + "\n};");
    }
    fs.writeFileSync("./config.js", _0x1cb974);
    delete require.cache[require.resolve("../config")];
    return true;
  } catch (_0x3e7064) {
    console.error("Error updating config:", _0x3e7064);
    return false;
  }
};
cmd({
  'pattern': "settings",
  'desc': "Update bot settings",
  'category': "config",
  'filename': __filename
}, async (_0x22ced3, _0x2f030e, _0x36c388, {
  reply: _0x118220,
  q: _0x51a913
}) => {
  const _0x1be09c = require("../config");
  if (!_0x51a913) {
    const _0x12d521 = "*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2〉─◆*\n👤 *Owner:* Akindu Dimansha \n\n⚙️ *Bot Settings Menu*\n\n1. Footer Text\n   Current: " + (_0x1be09c.FOOTER || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃") + "\n\n2. Auto Read Status\n   Current: " + (_0x1be09c.AUTO_READ_STATUS === "true" ? "✅ ON" : "❌ OFF") + "\n\n3. Bot Mode\n   Current: " + (_0x1be09c.MODE?.["toUpperCase"]() || "PUBLIC") + "\n\n4. Always Online\n   Current: " + (_0x1be09c.ALWAYS_ONLINE === "true" ? "✅ ON" : "❌ OFF") + "\n\n5. Auto Typing\n   Current: " + (_0x1be09c.AUTO_TYPING === "true" ? "✅ ON" : "❌ OFF") + "\n\n6. Auto Recording\n   Current: " + (_0x1be09c.AUTO_RECORDING === "true" ? "✅ ON" : "❌ OFF") + "\n\n7. Auto Status Reply\n   Current: " + (_0x1be09c.AUTO_STATUS_REPLY === "true" ? "✅ ON" : "❌ OFF") + "\n\n8. Status Reply Message\n   Current: " + (_0x1be09c.AUTO_STATUS__MSG || "*SEEN YOUR STATUS BY 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈*") + "\n\n9. Anti Call\n   Current: " + (_0x1be09c.ANTI_CALL === "true" ? "✅ ON" : "❌ OFF") + "\n\n📝 Reply with number to change setting.\nExample: .settings 1";
    return _0x118220(_0x12d521);
  }
  const _0x53e6a7 = parseInt(_0x51a913.split(" ")[0]);
  const _0x5a7df9 = _0x51a913.split(" ").slice(1).join(" ");
  switch (_0x53e6a7) {
    case 1:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Footer Settings*\n\nCurrent Footer: " + (_0x1be09c.FOOTER || "🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌") + "\n\nTo change, type:\n.settings 1 your_footer_text");
      }
      if (updateConfig("FOOTER", _0x5a7df9)) {
        _0x118220("✅ Footer updated successfully!\nNew Footer: " + _0x5a7df9 + "\nRestart bot to apply changes.");
      }
      break;
    case 2:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Auto Read Status Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("AUTO_READ_STATUS", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Auto read status turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    case 3:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Bot Mode Settings*\n\n1. Public Mode 🌐\n2. Private Mode 🔒\n\nCurrent: " + (_0x1be09c.MODE?.["toUpperCase"]() || "PUBLIC") + "\n\nReply: .settings 3 1 (for Public)\n       .settings 3 2 (for Private)");
      }
      if (updateConfig("MODE", _0x5a7df9 === '1' ? "public" : "private")) {
        _0x118220("✅ Bot mode set to " + (_0x5a7df9 === '1' ? "PUBLIC" : "PRIVATE") + "!\nRestart bot to apply changes.");
      }
      break;
    case 4:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Always Online Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("ALWAYS_ONLINE", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Always online turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    case 5:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Auto Typing Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("AUTO_TYPING", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Auto typing turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    case 6:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Auto Recording Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("AUTO_RECORDING", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Auto recording turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    case 7:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Auto Status Reply Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("AUTO_STATUS_REPLY", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Auto status reply turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    case 8:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Status Reply Message Settings*\n\nCurrent Message: " + (_0x1be09c.AUTO_STATUS__MSG || "*SEEN YOUR STATUS BY Didula MD V2*") + "\n\nTo change, type:\n.settings 8 your_message");
      }
      if (updateConfig("AUTO_STATUS__MSG", _0x5a7df9)) {
        _0x118220("✅ Status reply message updated!\nNew Message: " + _0x5a7df9 + "\nRestart bot to apply changes.");
      }
      break;
    case 9:
      if (!_0x5a7df9) {
        return _0x118220("*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*\n*Anti Call Settings*\n\n1. Turn On ✅\n2. Turn Off ❌\n\nCurrent: " + (_0x1be09c[_0x5c8a46] === "true" ? "✅ ON" : "❌ OFF") + "\n\nReply: .settings " + _0x53e6a7 + " 1 (for On)\n       .settings " + _0x53e6a7 + " 2 (for Off)");
      }
      if (updateConfig("ANTI_CALL", _0x5a7df9 === '1' ? "true" : "false")) {
        _0x118220("✅ Anti call turned " + (_0x5a7df9 === '1' ? 'ON' : "OFF") + "!\nRestart bot to apply changes.");
      }
      break;
    default:
      _0x118220("❌ Invalid option! Use .settings to see the menu.");
  }
});
cmd({
  'pattern': "update",
  'react': '🔄',
  'desc': "Update folder from GitHub",
  'category': "system",
  'use': ".update",
  'filename': __filename
}, async (_0xf7197, _0x272705, _0x15c452, {
  from: _0x278edb,
  reply: _0xf2b04a
}) => {
  try {
    if (!fs.existsSync("plugins")) {
      fs.mkdirSync("plugins");
    }
    const _0xc8f7be = fs.existsSync("plugins/.git") ? "git -C plugins pull" : "git clone  plugins";
    await new Promise((_0x2278c3, _0x65d544) => {
      exec(_0xc8f7be, (_0x4f8bde, _0x3047a1, _0x326525) => {
        if (_0x4f8bde) {
          _0x65d544("Git command failed: " + _0x326525);
        } else {
          _0x2278c3(_0x3047a1);
        }
      });
    });
    await _0xf7197.sendMessage(_0x278edb, {
      'text': "*✅ Update completed successfully!*"
    }, {
      'quoted': _0x272705
    });
  } catch (_0x102032) {
    console.error(_0x102032);
    _0xf2b04a("*Error during update:* " + _0x102032.message);
  }
});
module.exports = {
  'updateConfig': updateConfig
};
