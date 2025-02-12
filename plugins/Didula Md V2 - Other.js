const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
const {
  fetchJson,
  getBuffer
} = require("../lib/functions");
cmd({
  'pattern': "dog",
  'desc': "Fetch a random dog image.",
  'category': "other",
  'react': '🐶',
  'filename': __filename
}, async (_0x443d81, _0x171093, _0x28137c, {
  from: _0x389756,
  quoted: _0x34d192,
  body: _0xa68195,
  isCmd: _0x4e9387,
  command: _0x5257d4,
  args: _0x4f6224,
  q: _0x2ca1a9,
  isGroup: _0x50f0ac,
  sender: _0x7bac5d,
  senderNumber: _0x6aba0a,
  botNumber2: _0x539aa3,
  botNumber: _0x2a41c2,
  pushname: _0x468802,
  isMe: _0x3568bd,
  isOwner: _0x1b725c,
  groupMetadata: _0x515859,
  groupName: _0x48b9e6,
  participants: _0x120776,
  groupAdmins: _0x232cfb,
  isBotAdmins: _0x3caafa,
  isAdmins: _0x680c11,
  reply: _0x550b30
}) => {
  try {
    const _0x510d61 = await axios.get("https://dog.ceo/api/breeds/image/random");
    const _0x96d520 = _0x510d61.data;
    await _0x443d81.sendMessage(_0x389756, {
      'image': {
        'url': _0x96d520.message
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x171093
    });
  } catch (_0x1e46f4) {
    console.log(_0x1e46f4);
    _0x550b30("Error fetching dog image: " + _0x1e46f4.message);
  }
});
cmd({
  'pattern': "animeboy",
  'desc': "Fetch a random anime boy image.",
  'category': "other",
  'react': '❤️',
  'filename': __filename
}, async (_0x70966a, _0x32264b, _0x15c85f, {
  from: _0xc16d44,
  quoted: _0x5e7329,
  body: _0x399f4a,
  isCmd: _0xedb8f9,
  command: _0x518a5b,
  args: _0x2f1d0b,
  q: _0x21bba4,
  isGroup: _0x52b1f6,
  sender: _0x2311cc,
  senderNumber: _0x53ec8f,
  botNumber2: _0x3098d8,
  botNumber: _0x504b43,
  pushname: _0x5a513d,
  isMe: _0x2d3bcc,
  isOwner: _0x46513c,
  groupMetadata: _0x54daa9,
  groupName: _0x19febc,
  participants: _0x4e1358,
  groupAdmins: _0x1ab17f,
  isBotAdmins: _0x22dcc9,
  isAdmins: _0x8cd87c,
  reply: _0x31d9a5
}) => {
  try {
    const _0x4080f1 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x578f5 = _0x4080f1.data;
    await _0x70966a.sendMessage(_0xc16d44, {
      'image': {
        'url': _0x578f5.url
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x32264b
    });
  } catch (_0x40c698) {
    console.log(_0x40c698);
    _0x31d9a5("*Error Fetching Anime Boy image*: " + _0x40c698.message);
  }
});
cmd({
  'pattern': "weather",
  'desc': "🌤 Get weather information for a location",
  'react': "🌥️",
  'category': "other",
  'filename': __filename
}, async (_0x2f86ec, _0x2ebd43, _0x37636e, {
  from: _0x46bf53,
  q: _0x555e35,
  reply: _0x1e046a
}) => {
  try {
    if (!_0x555e35) {
      return _0x1e046a("❗ Please provide a city name..Usage: .weather [city name]");
    }
    const _0x140002 = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x555e35 + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x39dbbb = await axios.get(_0x140002);
    const _0x50f970 = _0x39dbbb.data;
    const _0x15604b = "\n🌍 *Weather Information for " + _0x50f970.name + ", " + _0x50f970.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x50f970.main.temp + "°C\n\n🌡️ *Feels Like*: " + _0x50f970.main.feels_like + "°C\n\n🌡️ *Min Temp*: " + _0x50f970.main.temp_min + "°C\n\n🌡️ *Max Temp*: " + _0x50f970.main.temp_max + "°C\n\n💧 *Humidity*: " + _0x50f970.main.humidity + "%\n\n☁️ *Weather*: " + _0x50f970.weather[0].main + "\n\n🌫️ *Description*: " + _0x50f970.weather[0].description + "\n\n💨 *Wind Speed*: " + _0x50f970.wind.speed + " m/s\n\n📌 *Pressure*: " + _0x50f970.main.pressure + " hPa\n\n> *◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*\n";
    return _0x1e046a(_0x15604b);
  } catch (_0x4974a5) {
    console.log(_0x4974a5);
    if (_0x4974a5.response && _0x4974a5.response.status === 404) {
      return _0x1e046a("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x1e046a("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': "animegirl1",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x2582b8, _0x5146c7, _0x5b9b58, {
  from: _0x2dda8d,
  quoted: _0x4d7f79,
  body: _0x5e645c,
  isCmd: _0x5a67fe,
  command: _0x56889f,
  args: _0x5b5f16,
  q: _0x2372f9,
  isGroup: _0x3397f1,
  sender: _0x4cc5c0,
  senderNumber: _0x34c717,
  botNumber2: _0x12ba2c,
  botNumber: _0x5c3e68,
  pushname: _0x44197e,
  isMe: _0x3dd931,
  isOwner: _0x1b79b7,
  groupMetadata: _0x3d8260,
  groupName: _0x5418b5,
  participants: _0x5a8540,
  groupAdmins: _0x5c5c97,
  isBotAdmins: _0x14b412,
  isAdmins: _0xa40ddc,
  reply: _0x1f94b5
}) => {
  try {
    const _0x528117 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x3fb728 = _0x528117.data;
    await _0x2582b8.sendMessage(_0x2dda8d, {
      'image': {
        'url': _0x3fb728.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x5146c7
    });
  } catch (_0x85d58c) {
    console.log(_0x85d58c);
    _0x1f94b5("*Error Fetching Anime Girl image*: " + _0x85d58c.message);
  }
});
cmd({
  'pattern': "animegirl2",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x5c16e7, _0x22953c, _0x3491fc, {
  from: _0x4fe042,
  quoted: _0x31d07e,
  body: _0x50fb84,
  isCmd: _0x5d9ed6,
  command: _0x4ef709,
  args: _0x11cfd2,
  q: _0x5baae1,
  isGroup: _0x11e9d3,
  sender: _0x52789e,
  senderNumber: _0x3a5a51,
  botNumber2: _0x51c44b,
  botNumber: _0x564838,
  pushname: _0x1c419c,
  isMe: _0x2a0818,
  isOwner: _0x1c20a1,
  groupMetadata: _0x5d2fe8,
  groupName: _0x6452ec,
  participants: _0x295c32,
  groupAdmins: _0x1cd2d5,
  isBotAdmins: _0x1af321,
  isAdmins: _0x39292c,
  reply: _0xb66305
}) => {
  try {
    const _0x51563e = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x1615e8 = _0x51563e.data;
    await _0x5c16e7.sendMessage(_0x4fe042, {
      'image': {
        'url': _0x1615e8.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x22953c
    });
  } catch (_0x24e51c) {
    console.log(_0x24e51c);
    _0xb66305("*Error Fetching Anime Girl image*: " + _0x24e51c.message);
  }
});
cmd({
  'pattern': "animegirl3",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x30dfd7, _0x283ab6, _0xddcd30, {
  from: _0x4e6a1b,
  quoted: _0x563565,
  body: _0x387bde,
  isCmd: _0x50877d,
  command: _0x4e20ad,
  args: _0x20370a,
  q: _0x38eb03,
  isGroup: _0x3e8b26,
  sender: _0xd5033c,
  senderNumber: _0x456162,
  botNumber2: _0x10d066,
  botNumber: _0x25d7a5,
  pushname: _0x2fcc11,
  isMe: _0x59048f,
  isOwner: _0x4ecc3a,
  groupMetadata: _0x55aa6a,
  groupName: _0x547843,
  participants: _0x19e4a4,
  groupAdmins: _0x9db648,
  isBotAdmins: _0x1d673b,
  isAdmins: _0x499e9d,
  reply: _0x548344
}) => {
  try {
    const _0xaf39c5 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x5802a = _0xaf39c5.data;
    await _0x30dfd7.sendMessage(_0x4e6a1b, {
      'image': {
        'url': _0x5802a.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x283ab6
    });
  } catch (_0x10f840) {
    console.log(_0x10f840);
    _0x548344("*Error Fetching Anime Girl image*: " + _0x10f840.message);
  }
});
cmd({
  'pattern': "animegirl4",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x1574af, _0x184e7a, _0x4d4589, {
  from: _0x36aaf9,
  quoted: _0x1d3f4f,
  body: _0x40471a,
  isCmd: _0x3166ed,
  command: _0x4f2261,
  args: _0x8544ef,
  q: _0x4ed82a,
  isGroup: _0x202e19,
  sender: _0x2cc89c,
  senderNumber: _0x146943,
  botNumber2: _0x289b53,
  botNumber: _0x355a14,
  pushname: _0xf3f683,
  isMe: _0x558a75,
  isOwner: _0xd0022e,
  groupMetadata: _0x1f4ae6,
  groupName: _0xf5f684,
  participants: _0x2b92b4,
  groupAdmins: _0x5834a0,
  isBotAdmins: _0x138f47,
  isAdmins: _0x29f432,
  reply: _0x1429b6
}) => {
  try {
    const _0x552dda = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x266ed0 = _0x552dda.data;
    await _0x1574af.sendMessage(_0x36aaf9, {
      'image': {
        'url': _0x266ed0.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x184e7a
    });
  } catch (_0x22109d) {
    console.log(_0x22109d);
    _0x1429b6("*Error Fetching Anime Girl image*: " + _0x22109d.message);
  }
});
cmd({
  'pattern': "animegirl5",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x59d644, _0x4360ea, _0x49ed56, {
  from: _0x1a290c,
  quoted: _0x5363a3,
  body: _0x2923f3,
  isCmd: _0x489f29,
  command: _0xdf0b28,
  args: _0x530778,
  q: _0xf805a9,
  isGroup: _0x93cb97,
  sender: _0x4c0b1c,
  senderNumber: _0x2c0f01,
  botNumber2: _0x58bd92,
  botNumber: _0x1f8033,
  pushname: _0x250d0e,
  isMe: _0x59f9a5,
  isOwner: _0x70f8f8,
  groupMetadata: _0x2eecfb,
  groupName: _0x427f99,
  participants: _0x2898cc,
  groupAdmins: _0x44a56e,
  isBotAdmins: _0x5d4c68,
  isAdmins: _0x5cdb82,
  reply: _0x5d5c53
}) => {
  try {
    const _0x216c82 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x4028be = _0x216c82.data;
    await _0x59d644.sendMessage(_0x1a290c, {
      'image': {
        'url': _0x4028be.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x4360ea
    });
  } catch (_0x48c0df) {
    console.log(_0x48c0df);
    _0x5d5c53("*Error Fetching Anime Girl image*: " + _0x48c0df.message);
  }
});
cmd({
  'pattern': "hack",
  'desc': "Displays a dynamic and playful 'Hacking' message for fun.",
  'category': "other",
  'react': '💻',
  'filename': __filename
}, async (_0x555218, _0x11087d, _0x39ba50, {
  from: _0xc3f3af,
  quoted: _0x1b9361,
  body: _0x5dccb2,
  isCmd: _0x168a5f,
  command: _0x268f3a,
  args: _0x1c690b,
  q: _0x221053,
  isGroup: _0x35cb25,
  sender: _0xf512b8,
  senderNumber: _0x5384e5,
  botNumber2: _0x25ff53,
  botNumber: _0x44faba,
  pushname: _0x424dd3,
  isMe: _0xe2d807,
  isOwner: _0x1009c4,
  groupMetadata: _0x5846b8,
  groupName: _0x50389b,
  participants: _0xcafe97,
  groupAdmins: _0x201a2f,
  isBotAdmins: _0x2e0cde,
  isAdmins: _0x4f57f2,
  reply: _0x14043d
}) => {
  try {
    const _0xba61bc = ["💻 *HACK STARTING...* 💻", '', "*Initializing hacking tools...* 🛠️", "*Connecting to remote servers...* 🌐", '', "```[██████████] 10%``` ⏳", "```[███████████████████] 20%``` ⏳", "```[███████████████████████] 30%``` ⏳", "```[██████████████████████████] 40%``` ⏳", "```[███████████████████████████████] 50%``` ⏳", "```[█████████████████████████████████████] 60%``` ⏳", "```[██████████████████████████████████████████] 70%``` ⏳", "```[██████████████████████████████████████████████] 80%``` ⏳", "```[██████████████████████████████████████████████████] 90%``` ⏳", "```[████████████████████████████████████████████████████] 100%``` ✅", '', "🔒 *System Breach: Successful!* 🔓", "🚀 *Command Execution: Complete!* 🎯", '', "*📡 Transmitting data...* 📤", "_🕵️‍♂️ Ensuring stealth..._ 🤫", "*🔧 Finalizing operations...* 🏁", '', "⚠️ *Note:* All actions are for demonstration purposes only.", "⚠️ *Reminder:* Ethical hacking is the only way to ensure security.", '', "> *Didula MD V2 💚 HACKING-COMPLETE ☣*"];
    for (const _0x18de6b of _0xba61bc) {
      await _0x555218.sendMessage(_0xc3f3af, {
        'text': _0x18de6b
      }, {
        'quoted': _0x11087d
      });
      await new Promise(_0x18f25f => setTimeout(_0x18f25f, 1000));
    }
  } catch (_0x17241f) {
    console.log(_0x17241f);
    _0x14043d("❌ *Error:* " + _0x17241f.message);
  }
});
cmd({
  'pattern': "couplepp",
  'alias': ["couplepic"],
  'react': '💑',
  'desc': "Get a couple image",
  'category': "other",
  'use': ".couple",
  'filename': __filename
}, async (_0x538629, _0x1c6a7d, _0x23e681, {
  from: _0x45751,
  reply: _0x146c4a
}) => {
  try {
    const _0x407b9b = await fetchJson(apilink1);
    if (!_0x407b9b.status) {
      return await _0x146c4a("Failed to fetch couple image!");
    }
    const _0x3ff324 = "\n            *Didula MD V2 💚 Couple Image* 💑\n\n            • *Author* - Didula Rashmika\n            • *Boy* - " + _0x407b9b.result.boy + "\n            • *Girl* - " + _0x407b9b.result.girl + "\n\nDidula MD V2💚\n        ";
    await _0x538629.sendMessage(_0x45751, {
      'text': _0x3ff324,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    });
    await _0x538629.sendMessage(_0x45751, {
      'image': {
        'url': _0x407b9b.result.boy
      },
      'caption': "Didula MD V2 💚 - Boy"
    }, {
      'quoted': _0x1c6a7d
    });
    await _0x538629.sendMessage(_0x45751, {
      'image': {
        'url': _0x407b9b.result.girl
      },
      'caption': "Didula MD V2 💚 - Girl"
    }, {
      'quoted': _0x1c6a7d
    });
  } catch (_0x2dc72f) {
    console.error(_0x2dc72f);
    _0x146c4a("An error occurred while processing your request. Please try again later.");
  }
});
module.exports = {};
