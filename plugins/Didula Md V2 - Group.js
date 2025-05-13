const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson,
  getBuffer,
  getGroupAdmins
} = require("../lib/functions");
cmd({
  'pattern': "del",
  'react': '❌',
  'alias': ["del"],
  'desc': "delete message",
  'category': "group",
  'use': ".del",
  'filename': __filename
}, async (_0x53fbf5, _0x241f85, _0x494e8b, {
  from: _0x1df162,
  l: _0x275307,
  quoted: _0x29f100,
  body: _0x3d2897,
  isCmd: _0x52970f,
  command: _0x4c036e,
  args: _0xf08e24,
  q: _0x59221c,
  isGroup: _0x4f84bd,
  sender: _0x4a2d86,
  senderNumber: _0xa4019a,
  botNumber2: _0x5d37c1,
  botNumber: _0x4512a5,
  pushname: _0x515565,
  isMe: _0x45e4ab,
  isOwner: _0x4d4ae8,
  groupMetadata: _0xf712c6,
  groupName: _0x2e4e69,
  participants: _0x7ed27b,
  isItzcp: _0x4c96df,
  groupAdmins: _0x3f4680,
  isBotAdmins: _0x4099e6,
  isAdmins: _0x9ca388,
  reply: _0x529382
}) => {
  if (!_0x4d4ae8 || !_0x9ca388) {
    return;
  }
  try {
    if (!_0x494e8b.quoted) {
      return _0x529382(mg.notextfordel);
    }
    const _0x209552 = {
      'remoteJid': _0x494e8b.chat,
      'fromMe': false,
      'id': _0x494e8b.quoted.id,
      'participant': _0x494e8b.quoted.sender
    };
    await _0x53fbf5.sendMessage(_0x494e8b.chat, {
      'delete': _0x209552
    });
  } catch (_0x10d965) {
    console.log(_0x10d965);
    _0x529382("successful..👨‍💻✅");
  }
});
cmd({
  'pattern': "join",
  'fromMe': true,
  'desc': "Make the bot join a group using an invite link.",
  'category': "group",
  'react': '🌀',
  'filename': __filename
}, async (_0x58f457, _0x492767, _0x30c4d6, {
  from: _0x1237fe,
  quoted: _0x358c12,
  body: _0x17bdc3,
  args: _0x2487a7,
  q: _0x591cf4,
  reply: _0x204f1e
}) => {
  try {
    if (!_0x591cf4 || !_0x591cf4.includes("chat.whatsapp.com")) {
      return await _0x204f1e("Please provide a valid WhatsApp group invite link.");
    }
    const _0x1bbad6 = _0x591cf4.split("chat.whatsapp.com/")[1];
    const _0x2e01e0 = await _0x58f457.groupAcceptInvite(_0x1bbad6);
    if (_0x2e01e0) {
      await _0x204f1e("✅ Successfully joined the group!");
    } else {
      await _0x204f1e("❌ Failed to join the group. Please check the invite link.");
    }
  } catch (_0x570682) {
    console.error("Error while joining group:", _0x570682);
    await _0x204f1e("❗ An error occurred while trying to join the group.");
  }
});
cmd({
  'pattern': "left",
  'fromMe': true,
  'desc': "Make the bot leave the group.",
  'category': "group",
  'react': '👋',
  'filename': __filename
}, async (_0x825390, _0x260a6c, _0x1327e5, {
  from: _0x5cb71b,
  isGroup: _0x4e2923,
  reply: _0x114eb5
}) => {
  try {
    if (!_0x4e2923) {
      return await _0x114eb5("❌ This command can only be used in a group.");
    }
    await _0x825390.groupLeave(_0x5cb71b);
    console.log("Bot left the group: " + _0x5cb71b);
  } catch (_0x265d6d) {
    console.error("Error while leaving group:", _0x265d6d);
    await _0x114eb5("❗ An error occurred while trying to leave the group.");
  }
});
cmd({
  'pattern': "hidetag",
  'fromMe': true,
  'desc': "Send a message with hidden tags to all group members.",
  'category': "group",
  'react': '🔍',
  'filename': __filename
}, async (_0x2ed2b0, _0xb349d4, _0x4d73b5, {
  from: _0x59e007,
  isGroup: _0x38ab99,
  args: _0x275c33,
  q: _0x485a0a,
  participants: _0x344ecb,
  reply: _0x9f9a40
}) => {
  try {
    if (!_0x38ab99) {
      return await _0x9f9a40("❌ This command can only be used in a group.");
    }
    if (!_0x485a0a) {
      return await _0x9f9a40("❗ Please provide a message to send.");
    }
    const _0x2e8d60 = _0x344ecb.map(_0x42368e => _0x42368e.id);
    await _0x2ed2b0.sendMessage(_0x59e007, {
      'text': _0x485a0a,
      'mentions': _0x2e8d60
    });
    console.log("Hidetag message sent to all group members.");
  } catch (_0x117cf3) {
    console.error("Error while sending hidetag message:", _0x117cf3);
    await _0x9f9a40("❗ An error occurred while trying to send the hidetag message.");
  }
});
cmd({
  'pattern': "mute",
  'react': '🔇',
  'desc': "close a group",
  'category': "group",
  'use': ".mute",
  'filename': __filename
}, async (_0x11bf6d, _0xeae5e6, _0x46f99d, {
  from: _0x320c37,
  prefix: _0x385697,
  l: _0x6449cf,
  quoted: _0x4cde95,
  body: _0x5002c9,
  isCmd: _0x3db1d9,
  command: _0x32433c,
  args: _0x59cfab,
  q: _0x1176d2,
  isGroup: _0x43d4fd,
  sender: _0x653efd,
  senderNumber: _0x8c945d,
  botNumber2: _0x16b8a1,
  botNumber: _0xe73d90,
  pushname: _0x27fead,
  isMe: _0x497314,
  isOwner: _0x86e8e7,
  groupMetadata: _0x16e59e,
  groupName: _0x1387cf,
  participants: _0x443126,
  groupAdmins: _0x20a46b,
  isBotAdmins: _0x442714,
  isAdmins: _0x264d06,
  reply: _0x236cd5
}) => {
  try {
    if (!_0x43d4fd) {
      return _0x236cd5(ONLGROUP);
    }
    if (!_0x442714) {
      return _0x236cd5(botAdmin);
    }
    if (!_0x264d06) {
      return _0x236cd5(ADMIN);
    }
    await _0x11bf6d.groupSettingUpdate(_0xeae5e6.chat, "announcement");
    await _0x11bf6d.sendMessage(_0x320c37, {
      'react': {
        'text': '✅',
        'key': _0xeae5e6.key
      }
    });
  } catch (_0x14fac6) {
    _0x236cd5("🛑 GROUP IS CLOSED MY BOT OWNER");
    _0x6449cf(_0x14fac6);
  }
});
cmd({
  'pattern': "unmute",
  'react': '🔊',
  'desc': "open a group",
  'category': "group",
  'use': ".unmute",
  'filename': __filename
}, async (_0x637f2d, _0x12b04e, _0x314111, {
  from: _0x1b0261,
  prefix: _0x2bf547,
  l: _0x116704,
  quoted: _0x44aadd,
  body: _0x560f77,
  isCmd: _0x4069cc,
  command: _0x3ecaf7,
  args: _0x2c8d01,
  q: _0x15f7f0,
  isGroup: _0x165066,
  sender: _0x331986,
  senderNumber: _0x4fd234,
  botNumber2: _0xcf4df4,
  botNumber: _0x1e11c3,
  pushname: _0x5c7f12,
  isMe: _0x40b966,
  isOwner: _0x56c83d,
  groupMetadata: _0x2a4e71,
  groupName: _0x108fdb,
  participants: _0x52484a,
  groupAdmins: _0x6c9190,
  isBotAdmins: _0x2e9baf,
  isAdmins: _0x3daccf,
  reply: _0x4acaaa
}) => {
  try {
    if (!_0x165066) {
      return _0x4acaaa(ONLGROUP);
    }
    if (!_0x2e9baf) {
      return _0x4acaaa(botAdmin);
    }
    if (!_0x3daccf) {
      return _0x4acaaa(ADMIN);
    }
    await _0x637f2d.groupSettingUpdate(_0x12b04e.chat, "not_announcement");
    await _0x637f2d.sendMessage(_0x1b0261, {
      'react': {
        'text': '✅',
        'key': _0x12b04e.key
      }
    });
  } catch (_0x5f015e) {
    _0x4acaaa("🛑 GROUP IS OPEN MY BOT OWNER");
    _0x116704(_0x5f015e);
  }
});
cmd({
  'pattern': "promote",
  'react': '📍',
  'desc': "promote admin to a member",
  'category': "group",
  'use': ".promote",
  'filename': __filename
}, async (_0x4d0076, _0x51784e, _0x4d8215, {
  from: _0x2cd55b,
  prefix: _0x573472,
  l: _0x57f0ca,
  quoted: _0x37af5e,
  body: _0x2ceab9,
  isCmd: _0x569947,
  command: _0x2f84cb,
  args: _0x6bec29,
  q: _0x484ef9,
  isGroup: _0x2a7c82,
  sender: _0x488145,
  senderNumber: _0x533aab,
  botNumber2: _0x4dde74,
  botNumber: _0x1e7479,
  pushname: _0x14126a,
  isMe: _0x43caca,
  isOwner: _0x1f44b5,
  groupMetadata: _0x471a71,
  groupName: _0x1f6855,
  participants: _0x4b2b0c,
  groupAdmins: _0xd94ccf,
  isBotAdmins: _0x165ab7,
  isAdmins: _0x40ff4a,
  reply: _0x5ad387
}) => {
  try {
    if (!_0x2a7c82) {
      return _0x5ad387(ONLGROUP);
    }
    if (!_0x165ab7) {
      return _0x5ad387(botAdmin);
    }
    if (!_0x40ff4a) {
      return _0x5ad387(ADMIN);
    }
    let _0x4baa85 = _0x51784e.mentionedJid ? _0x51784e.mentionedJid : _0x51784e.quoted ? _0x51784e.quoted.sender : _0x484ef9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x4d0076.groupParticipantsUpdate(_0x51784e.chat, [_0x4baa85], "promote").then(_0x39d2e2 => _0x5ad387(jsonformat(_0x39d2e2)))["catch"](_0x5c4d73 => _0x5ad387(jsonformat(_0x5c4d73)));
    _0x5ad387("🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER");
    await _0x4d0076.sendMessage(_0x2cd55b, {
      'react': {
        'text': '✅',
        'key': _0x51784e.key
      }
    });
  } catch (_0x46b368) {
    _0x5ad387("*Done ✓✓*");
    _0x57f0ca(_0x46b368);
  }
});
cmd({
  'pattern': "demote",
  'react': '📍',
  'desc': "demote admin to a member",
  'category': "group",
  'use': ".demote",
  'filename': __filename
}, async (_0x144513, _0x577496, _0xee2757, {
  from: _0x4b9794,
  prefix: _0x30faf6,
  l: _0x5b8af8,
  quoted: _0x27f230,
  body: _0x1bd576,
  isCmd: _0x51a5c2,
  command: _0x1cc239,
  args: _0x5b2934,
  q: _0x450a19,
  isGroup: _0x195be1,
  sender: _0x20c1d1,
  senderNumber: _0x535fab,
  botNumber2: _0x48b376,
  botNumber: _0x35ccef,
  pushname: _0x3725e7,
  isMe: _0x29044f,
  isOwner: _0x292a7b,
  groupMetadata: _0xc23bbb,
  groupName: _0x1a5dae,
  participants: _0x11c235,
  groupAdmins: _0x5f1e7c,
  isBotAdmins: _0x43021f,
  isAdmins: _0xabb14f,
  reply: _0xed7265
}) => {
  try {
    if (!_0x195be1) {
      return _0xed7265(ONLGROUP);
    }
    if (!_0x43021f) {
      return _0xed7265(botAdmin);
    }
    if (!_0xabb14f) {
      return _0xed7265(ADMIN);
    }
    let _0x287570 = _0x577496.mentionedJid ? _0x577496.mentionedJid : _0x577496.quoted ? _0x577496.quoted.sender : _0x450a19.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x144513.groupParticipantsUpdate(_0x577496.chat, [_0x287570], "demote").then(_0xa6b14e => _0xed7265(jsonformat(_0xa6b14e)))["catch"](_0x546fd8 => _0xed7265(jsonformat(_0x546fd8)));
    _0xed7265("🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER");
    await _0x144513.sendMessage(_0x4b9794, {
      'react': {
        'text': '✅',
        'key': _0x577496.key
      }
    });
  } catch (_0x334171) {
    _0xed7265("*Done ✓✓*");
    _0x5b8af8(_0x334171);
  }
});
cmd({
  'pattern': "remove",
  'desc': "Remove a member from the group.",
  'category': "group",
  'react': '🚫',
  'filename': __filename
}, async (_0x1602ec, _0x3ad0fe, _0x4de408, {
  from: _0x15df1,
  quoted: _0x1cd199,
  body: _0x52de73,
  isCmd: _0x2df281,
  command: _0x582723,
  args: _0x1aa0a0,
  q: _0x292fc0,
  isGroup: _0x71f3b,
  sender: _0x352d45,
  senderNumber: _0x40d7b4,
  botNumber2: _0x1afc31,
  botNumber: _0x5e5e32,
  pushname: _0x44cc48,
  isMe: _0x3d55b3,
  isOwner: _0x579a67,
  groupMetadata: _0x5dc81d,
  groupName: _0xd30c09,
  participants: _0x1d1474,
  groupAdmins: _0x9d274c,
  isBotAdmins: _0x5ba8b7,
  isAdmins: _0x431336,
  reply: _0x5bda02
}) => {
  try {
    if (!_0x71f3b) {
      return _0x5bda02("This command can only be used in a group.");
    }
    if (!_0x5ba8b7) {
      return _0x5bda02("Bot must be an admin to use this command.");
    }
    if (!_0x431336) {
      return _0x5bda02("You must be an admin to use this command.");
    }
    const _0x5da4d5 = _0x4de408.mentioned[0] || _0x4de408.quoted?.["sender"];
    if (!_0x5da4d5) {
      return _0x5bda02("Please tag or reply to a user to remove.");
    }
    await _0x1602ec.groupParticipantsUpdate(_0x15df1, [_0x5da4d5], "remove");
    await _0x5bda02('@' + _0x5da4d5.split('@')[0] + " has been removed from the group.", {
      'mentions': [_0x5da4d5]
    });
  } catch (_0x4045c1) {
    console.log(_0x4045c1);
    _0x5bda02('' + _0x4045c1);
  }
});
cmd({
  'pattern': "add",
  'desc': "Add a member to the group.",
  'category': "group",
  'react': '✅',
  'filename': __filename
}, async (_0x3b26d7, _0x12f683, _0xea9da8, {
  from: _0x51eb9e,
  quoted: _0x3df0c5,
  body: _0x24d145,
  isCmd: _0x19165f,
  command: _0x3a0346,
  args: _0x3d5c9c,
  q: _0x35ff3c,
  isGroup: _0x928047,
  sender: _0x17f186,
  senderNumber: _0x213a1a,
  botNumber2: _0x40d95e,
  botNumber: _0x37a60d,
  pushname: _0x59cd36,
  isMe: _0x3352c0,
  isOwner: _0x46d3a8,
  groupMetadata: _0x5a733f,
  groupName: _0x2bafdc,
  participants: _0x32102a,
  groupAdmins: _0x54cc27,
  isBotAdmins: _0x2bc190,
  isAdmins: _0x14e70c,
  reply: _0x1712cd
}) => {
  try {
    if (!_0x928047) {
      return _0x1712cd("This command can only be used in a group.");
    }
    if (!_0x2bc190) {
      return _0x1712cd("Bot must be an admin to use this command.");
    }
    if (!_0x14e70c) {
      return _0x1712cd("You must be an admin to use this command.");
    }
    const _0x494af8 = _0x35ff3c.split(" ")[0];
    if (!_0x494af8) {
      return _0x1712cd("Please provide a phone number to add.");
    }
    await _0x3b26d7.groupParticipantsUpdate(_0x51eb9e, [_0x494af8 + "@s.whatsapp.net"], "add");
    await _0x1712cd('@' + _0x494af8 + " has been added to the group.", {
      'mentions': [_0x494af8 + "@s.whatsapp.net"]
    });
  } catch (_0x45e685) {
    console.log(_0x45e685);
    _0x1712cd('' + _0x45e685);
  }
});
cmd({
  'pattern': "groupinfo",
  'desc': "Get information about the group.",
  'category': "group",
  'filename': __filename,
  'react': 'ℹ️'
}, async (_0x524505, _0x3af89a, _0x59e6f1, {
  from: _0x31366e,
  isGroup: _0x2fce54,
  groupMetadata: _0x39f0b0,
  groupName: _0x5598e3,
  participants: _0x23933b,
  groupAdmins: _0x398bf3,
  reply: _0x2bf2a2
}) => {
  try {
    if (!_0x2fce54) {
      return _0x2bf2a2("This command can only be used in groups.");
    }
    const _0x5b797b = "*{(photo)} AKINDU  MD V2 💚*\n\n\n📋 *Group Information*\n👥 *Name:* " + _0x5598e3 + "\n📝 *Description:* " + (_0x39f0b0.desc || "No description") + "\n🆔 *ID:* " + _0x31366e + "\n👑 *Owner:* " + (_0x39f0b0.owner || "Not available") + "\n👤 *Members:* " + _0x23933b.length + "\n👮 *Admins:* " + _0x398bf3.length + "\n📅 *Created:* " + new Date(_0x39f0b0.creation * 1000).toLocaleString() + "\n\n*Didula MD V2 💚*\n        ";
    _0x2bf2a2(_0x5b797b);
  } catch (_0x5c6edc) {
    console.error(_0x5c6edc);
    _0x2bf2a2("❌ Error: " + _0x5c6edc);
  }
});
cmd({
  'pattern': "tagadmin",
  'alais': ["tagadmins"],
  'react': '🙀',
  'desc': "Tags all the admins in the group.",
  'category': "group",
  'filename': __filename
}, async (_0x25d4d6, _0x7eeced, _0x648fdf, {
  from: _0x261ef1,
  prefix: _0x5dcf0c,
  l: _0x138429,
  quoted: _0x1f53de,
  body: _0x51c120,
  isCmd: _0x1affb7,
  command: _0x55003a,
  args: _0xdb43dd,
  q: _0x28d116,
  isGroup: _0x20b296,
  sender: _0x390794,
  senderNumber: _0x264205,
  botNumber2: _0xa6e81,
  botNumber: _0x553be3,
  pushname: _0x57f4bf,
  isMe: _0x331b7b,
  isOwner: _0x2467bd,
  groupMetadata: _0x17fffb,
  groupName: _0x3dc0c0,
  participants: _0x565ffd,
  groupAdmins: _0xe9eeb8,
  isBotAdmins: _0x453691,
  isAdmins: _0x41a3b9,
  reply: _0x93307e
}) => {
  try {
    if (!_0x20b296) {
      return _0x93307e("This command is only for groups.");
    }
    if (!_0x41a3b9) {
      return _0x93307e("This command is only for group admin.");
    }
    if (_0xe9eeb8.length === 0) {
      return _0x93307e("There are no admins in this group.");
    }
    let _0x2cc036 = "*TAGGING ALL ADMINS IN THE GROUP 🔳:*\n\n";
    for (let _0x5cc789 of _0xe9eeb8) {
      _0x2cc036 += '@' + _0x5cc789.split('@')[0] + "\n";
    }
    await _0x25d4d6.sendMessage(_0x261ef1, {
      'text': _0x2cc036,
      'mentions': _0xe9eeb8
    }, {
      'quoted': _0x7eeced
    });
  } catch (_0x1962f3) {
    console.error("Error tagging admins:", _0x1962f3);
    _0x93307e("you are not an admin.");
  }
});
cmd({
  'pattern': "opentime",
  'react': '🔖',
  'desc': "To open group to a time",
  'category': "group",
  'use': ".opentime",
  'filename': __filename
}, async (_0x343162, _0x562051, _0x40619f, {
  from: _0x43e0b4,
  prefix: _0x4d4e36,
  l: _0x42c4f3,
  quoted: _0x8ec49f,
  body: _0x2eb29b,
  isCmd: _0x5c7a57,
  command: _0x309fa2,
  args: _0x403ef6,
  q: _0xc6d7fe,
  isGroup: _0x329b10,
  sender: _0x2ec0df,
  senderNumber: _0x4772c2,
  botNumber2: _0x7a2f57,
  botNumber: _0x585eac,
  pushname: _0x53f148,
  isMe: _0x2002e8,
  isOwner: _0x33ff91,
  groupMetadata: _0x2f9042,
  groupName: _0x25cca7,
  participants: _0x377d08,
  groupAdmins: _0x243646,
  isBotAdmins: _0x2dc222,
  isAdmins: _0x4436ef,
  reply: _0x389f7b
}) => {
  try {
    if (!_0x329b10) {
      return _0x389f7b(ONLGROUP);
    }
    if (!_0x4436ef) {
      return _0x389f7b(ADMIN);
    }
    if (_0x403ef6[1] == "second") {
      var _0x1b5a9a = _0x403ef6[0] * "1000";
    } else {
      if (_0x403ef6[1] == "minute") {
        var _0x1b5a9a = _0x403ef6[0] * "60000";
      } else {
        if (_0x403ef6[1] == "hour") {
          var _0x1b5a9a = _0x403ef6[0] * "3600000";
        } else {
          if (_0x403ef6[1] == "day") {
            var _0x1b5a9a = _0x403ef6[0] * "86400000";
          } else {
            return _0x389f7b("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x389f7b("Open time " + _0xc6d7fe + " starting from now");
    setTimeout(() => {
      _0x343162.groupSettingUpdate(_0x43e0b4, "not_announcement");
      _0x389f7b("*OPEN TIME* THE GROUP WAS OPENED BY AWAIS MD TO APPROVED ADMIN\n NOW MEMBERS CAN SEND MESSAGES 🔓");
    }, _0x1b5a9a);
    await _0x343162.sendMessage(_0x43e0b4, {
      'react': {
        'text': '✅',
        'key': _0x562051.key
      }
    });
  } catch (_0x4937b4) {
    _0x389f7b("*Error !!*");
    _0x42c4f3(_0x4937b4);
  }
});
cmd({
  'pattern': "closetime",
  'react': '🔖',
  'desc': "To close group to a time",
  'category': "group",
  'use': ".closstime",
  'filename': __filename
}, async (_0x771d36, _0x50a69d, _0x5de2fd, {
  from: _0x3addc1,
  prefix: _0x5be8dd,
  l: _0x5bcda3,
  quoted: _0xdad4bb,
  body: _0x39f304,
  isCmd: _0x3c6e34,
  command: _0x450bae,
  args: _0x31cacc,
  q: _0x1d3907,
  isGroup: _0x306818,
  sender: _0x5edf00,
  senderNumber: _0x5ee008,
  botNumber2: _0x383eeb,
  botNumber: _0x40f061,
  pushname: _0x162188,
  isMe: _0x4bcd34,
  isOwner: _0x5dc034,
  groupMetadata: _0x2eb9c6,
  groupName: _0x34a084,
  participants: _0x13257f,
  groupAdmins: _0x2aa601,
  isBotAdmins: _0x2148e1,
  isAdmins: _0x5aa27f,
  reply: _0x5bedff
}) => {
  try {
    if (!_0x306818) {
      return _0x5bedff(ONLGROUP);
    }
    if (!_0x5aa27f) {
      return _0x5bedff(ADMIN);
    }
    if (_0x31cacc[1] == "second") {
      var _0x2f1caa = _0x31cacc[0] * "1000";
    } else {
      if (_0x31cacc[1] == "minute") {
        var _0x2f1caa = _0x31cacc[0] * "60000";
      } else {
        if (_0x31cacc[1] == "hour") {
          var _0x2f1caa = _0x31cacc[0] * "3600000";
        } else {
          if (_0x31cacc[1] == "day") {
            var _0x2f1caa = _0x31cacc[0] * "86400000";
          } else {
            return _0x5bedff("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0x5bedff("Close time " + _0x1d3907 + " starting from now");
    setTimeout(() => {
      _0x771d36.groupSettingUpdate(_0x3addc1, "announcement");
      _0x5bedff("*CLOSE TIME* GROUP CLOSED BY AWAIS MD AT APPROVED ADMIN\nNOW ONLY ADMIN CAN SEND MESSAGES 🔐");
    }, _0x2f1caa);
    await _0x771d36.sendMessage(_0x3addc1, {
      'react': {
        'text': '✅',
        'key': _0x50a69d.key
      }
    });
  } catch (_0x11115c) {
    _0x5bedff("*Error !!*");
    _0x5bcda3(_0x11115c);
  }
});
cmd({
  'pattern': "kickall",
  'desc': "Kicks all non-admin members from the group.",
  'react': '👏',
  'category': "group",
  'filename': __filename
}, async (_0xf8b940, _0xe22f2e, _0x24b87e, {
  from: _0x5a4d5d,
  quoted: _0x6fab70,
  body: _0x54eff6,
  isCmd: _0xa7f156,
  command: _0x22f9fb,
  args: _0xa04379,
  q: _0x2c1a34,
  isGroup: _0x484db3,
  sender: _0x2514eb,
  senderNumber: _0x4e01ba,
  botNumber2: _0x33d75d,
  botNumber: _0x25c6c6,
  pushname: _0x1ef271,
  isMe: _0xe0bcef,
  isOwner: _0x34a7db,
  groupMetadata: _0x42aea2,
  groupName: _0x59cc54,
  participants: _0x1bee42,
  groupAdmins: _0x54ab95,
  isBotAdmins: _0x26e46f,
  isAdmins: _0x3fb2f8,
  reply: _0x520bc3
}) => {
  try {
    if (!_0x3fb2f8) {
      return _0x520bc3("ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ 💀");
    }
    if (!_0x34a7db) {
      return _0x520bc3("ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴏᴡɴᴇʀ ᴏꜰ ᴅɪᴅᴜʟᴀ ᴍᴅ");
    }
    if (!_0x484db3) {
      return _0x520bc3("This command is only for groups.");
    }
    if (!_0x26e46f) {
      return _0x520bc3("I need admin privileges to kick users.");
    }
    const _0x4fb488 = _0x42aea2.participants;
    const _0x336b7c = _0x4fb488.filter(_0x564440 => !_0x54ab95.includes(_0x564440.id));
    if (_0x336b7c.length === 0) {
      return _0x520bc3("There are no non-admin members to kick.");
    }
    for (let _0x4eb909 of _0x336b7c) {
      await _0xf8b940.groupParticipantsUpdate(_0x24b87e.chat, [_0x4eb909.id], "remove");
    }
    _0x520bc3("AKINDU MD V2 💚 Successfully kicked all non-admin members from the group.");
  } catch (_0x419660) {
    console.error("Error kicking users:", _0x419660);
    _0x520bc3("An error occurred while trying to kick all members. Please try again.");
  }
});
module.exports = {};
