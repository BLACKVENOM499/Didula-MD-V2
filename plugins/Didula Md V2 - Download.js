const {
  cmd,
  commands
} = require("../command");
const scraper = require("../lib/scraperd");
const axios = require("axios");
const {
  fetchJson,
  getBuffer
} = require("../lib/functions");
const yts = require("yt-search");
const cheerio = require("cheerio");
cmd({
  'pattern': "ig",
  'desc': "To download instagram videos.",
  'category': "download",
  'react': '📩',
  'filename': __filename
}, async (_0x4bc0f3, _0x6ed766, _0x158f12, {
  from: _0x5ee89e,
  quoted: _0x20adb9,
  body: _0x4d0ebe,
  isCmd: _0x1ccf36,
  command: _0x56d64e,
  args: _0x210e80,
  q: _0x384ca0,
  isGroup: _0x2c28b2,
  sender: _0x180d59,
  senderNumber: _0x71647e,
  botNumber2: _0x3dcecf,
  botNumber: _0x3ebb01,
  pushname: _0x4cf87c,
  isMe: _0x52b257,
  isOwner: _0x5d9a72,
  groupMetadata: _0x360173,
  groupName: _0x367f87,
  participants: _0x5e220c,
  groupAdmins: _0x38c8df,
  isBotAdmins: _0x4cde5c,
  isAdmins: _0x169c7a,
  reply: _0x47de32
}) => {
  try {
    if (!_0x210e80[0]) {
      return _0x47de32("*`Please give me a valid instagram link.`*");
    }
    await _0x158f12.react('📥');
    let _0x209027;
    try {
      _0x209027 = await igdl(_0x210e80[0]);
    } catch (_0x2d77f1) {
      return _0x47de32("*`Error Obtaning Data.`*");
    }
    let _0x421035 = _0x209027.data;
    if (!_0x421035 || _0x421035.length === 0) {
      return _0x47de32("*`No results found.`*");
    }
    let _0x45f548;
    try {
      _0x45f548 = _0x421035.find(_0x2cc756 => _0x2cc756.resolution === "720p (HD)") || _0x421035.find(_0x214a70 => _0x214a70.resolution === "360p (SD)");
    } catch (_0x4f4921) {
      return _0x47de32("*`error data loss.`*");
    }
    if (!_0x45f548) {
      return _0x47de32("*`ησ ∂αтα ƒσυη∂.`*");
    }
    await _0x158f12.react('⚡');
    let _0x58b85b = _0x45f548.url;
    try {
      await _0x4bc0f3.sendMessage(_0x158f12.chat, {
        'video': {
          'url': _0x58b85b
        },
        'caption': "*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*",
        'fileName': "ig.mp4",
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x158f12
      });
    } catch (_0x68b1d8) {
      return _0x47de32("*`Error Download Video`*");
      await _0x158f12.react('❌');
    }
  } catch (_0xa73036) {
    console.log(_0xa73036);
    _0x47de32('' + _0xa73036);
  }
});
cmd({
  'pattern': 'dl',
  'react': '📥',
  'alias': ["dlurl"],
  'desc': "Direct link uploader",
  'category': "download",
  'use': ".dl <link>",
  'filename': __filename
}, async (_0x9c708c, _0x2e17d8, _0x3f9a90, {
  from: _0x31b54d,
  quoted: _0x30fda0,
  body: _0x217454,
  args: _0x110947,
  q: _0x5d0439,
  reply: _0x18e471
}) => {
  try {
    if (!_0x5d0439) {
      return _0x18e471("❗ Please provide a link!");
    }
    const _0x48ec74 = _0x1278f8 => {
      try {
        new URL(_0x1278f8);
        return true;
      } catch {
        return false;
      }
    };
    if (!_0x48ec74(_0x5d0439)) {
      return _0x18e471("❌ Invalid URL format! Please check the link.");
    }
    const _0x3da31c = require("axios");
    const _0x205eaa = require("mime-types");
    const _0xa49e9b = await _0x3da31c.get(_0x5d0439, {
      'responseType': "arraybuffer",
      'timeout': 0x3a98
    });
    const _0x5e2ab2 = _0xa49e9b.headers["content-type"] || "application/octet-stream";
    const _0x58e893 = _0x205eaa.extension(_0x5e2ab2) || "unknown";
    const _0x2ffa2c = _0xa49e9b.headers["content-length"] || 0;
    if (_0x2ffa2c > 8589934592) {
      return _0x18e471("❗ File is too large to upload (limit: 10MB).");
    }
    const _0x43c860 = "𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 💚." + _0x58e893;
    await _0x9c708c.sendMessage(_0x31b54d, {
      'document': {
        'url': _0x5d0439
      },
      'caption': "> 𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 💚",
      'mimetype': _0x5e2ab2,
      'fileName': _0x43c860
    }, {
      'quoted': _0x2e17d8
    });
  } catch (_0x48ae9f) {
    console.error(_0x48ae9f);
    _0x18e471("❌ Error: " + _0x48ae9f.message);
  }
});
cmd({
  'pattern': "apk",
  'desc': "Downloads Apk",
  'use': ".apk <app_name>",
  'react': '📥',
  'category': "download",
  'filename': __filename
}, async (_0x3772b0, _0x490fa4, _0x340978, {
  from: _0x39e078,
  q: _0x5789a1,
  reply: _0x310a5d
}) => {
  const _0x5674e5 = _0x5789a1.trim();
  if (!_0x5674e5) {
    return _0x310a5d("Please provide an app name");
  }
  _0x310a5d("_Downloading " + _0x5674e5 + '_');
  try {
    const _0x44ae04 = await scraper.aptoideDl(_0x5674e5);
    const _0x3ee184 = await getBuffer(_0x44ae04.link);
    if (!_0x3ee184 || !_0x44ae04.appname) {
      return await _0x3772b0.sendMessage(_0x39e078, {
        'react': {
          'text': '❌',
          'key': _0x490fa4.key
        }
      });
    }
    await _0x3772b0.sendMessage(_0x39e078, {
      'document': _0x3ee184,
      'caption': "*𝐐𝐔𝐄𝐄𝐍 𝐇𝐄𝐒𝐇𝐈 𝐌𝐃 𝐕2 💚*",
      'mimetype': "application/vnd.android.package-archive",
      'filename': _0x44ae04.appname + ".apk"
    }, {
      'quoted': _0x490fa4
    });
    await _0x3772b0.sendMessage(_0x39e078, {
      'react': {
        'text': '✅',
        'key': _0x490fa4.key
      }
    });
    _0x310a5d("*_Download Success_*");
  } catch (_0x1c09ab) {
    console.error(_0x1c09ab);
    await _0x3772b0.sendMessage(_0x39e078, {
      'react': {
        'text': '❌',
        'key': _0x490fa4.key
      }
    });
    _0x310a5d("Error: " + _0x1c09ab.message);
  }
});
cmd({
  'pattern': "song",
  'react': '🎶',
  'desc': "Download audio from YouTube by searching for keywords (using API 2).",
  'category': "music",
  'use': ".play1 <song name or keywords>",
  'filename': __filename
}, async (_0x134790, _0x50cebc, _0x462035, {
  from: _0xefd9ae,
  args: _0x5dbcb1,
  reply: _0x3d1262
}) => {
  try {
    const _0x12f338 = _0x5dbcb1.join(" ");
    if (!_0x12f338) {
      return _0x3d1262("*Please provide a song name or keywords to search for.*");
    }
    _0x3d1262("*🎧 Searching for the song...*");
    const _0x3011b4 = await yts(_0x12f338);
    if (!_0x3011b4.videos || _0x3011b4.videos.length === 0) {
      return _0x3d1262("❌ No results found for \"" + _0x12f338 + "\".");
    }
    const _0x145580 = _0x3011b4.videos[0];
    const _0x510fbc = _0x145580.url;
    const _0x219751 = "https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x510fbc;
    const _0x328285 = await axios.get(_0x219751);
    if (!_0x328285.data.success) {
      return _0x3d1262("❌ Failed to fetch audio for \"" + _0x12f338 + "\".");
    }
    const {
      title: _0x459abd,
      download_url: _0xd194fd
    } = _0x328285.data.result;
    await _0x134790.sendMessage(_0xefd9ae, {
      'audio': {
        'url': _0xd194fd
      },
      'mimetype': "audio/mp4",
      'ptt': false
    }, {
      'quoted': _0x50cebc
    });
    _0x3d1262("✅ *" + _0x459abd + "* has been downloaded successfully!");
  } catch (_0x55797b) {
    console.error(_0x55797b);
    _0x3d1262("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "video",
  'react': '🎥',
  'desc': "Download video from YouTube by searching for keywords (using API 2).",
  'category': "video",
  'use': ".play2 <video name or keywords>",
  'filename': __filename
}, async (_0x1db833, _0x4ec029, _0x260f2f, {
  from: _0x145ff3,
  args: _0x464427,
  reply: _0x969146
}) => {
  try {
    const _0x47ee65 = _0x464427.join(" ");
    if (!_0x47ee65) {
      return _0x969146("*Please provide a video name or keywords to search for.*");
    }
    _0x969146("*🎬 Searching for the video...*");
    const _0x41f9ac = await yts(_0x47ee65);
    if (!_0x41f9ac.videos || _0x41f9ac.videos.length === 0) {
      return _0x969146("❌ No results found for \"" + _0x47ee65 + "\".");
    }
    const _0x796118 = _0x41f9ac.videos[0];
    const _0x8cfb4e = _0x796118.url;
    const _0x26c5ca = "https://api.davidcyriltech.my.id/download/ytmp4?url=" + _0x8cfb4e;
    const _0x1c51d3 = await axios.get(_0x26c5ca);
    if (!_0x1c51d3.data.success) {
      return _0x969146("❌ Failed to fetch video for \"" + _0x47ee65 + "\".");
    }
    const {
      title: _0x46b3e4,
      download_url: _0x392bff
    } = _0x1c51d3.data.result;
    await _0x1db833.sendMessage(_0x145ff3, {
      'video': {
        'url': _0x392bff
      },
      'mimetype': "video/mp4",
      'caption': "✅ *" + _0x46b3e4 + "* has been downloaded successfully!"
    }, {
      'quoted': _0x4ec029
    });
  } catch (_0x9059d0) {
    console.error(_0x9059d0);
    _0x969146("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "wallpaper",
  'alias': ["wallpaperdownload"],
  'react': "🖼️",
  'desc': "Download a random wallpaper",
  'category': "download",
  'use': ".wallpaper",
  'filename': __filename
}, async (_0x41cacd, _0x52b1d4, _0xe1e6eb, {
  from: _0x290641,
  reply: _0x12a1ae
}) => {
  try {
    const {
      data: _0x527c7e
    } = await axios.get("https://unsplash.com/s/photos/wallpaper");
    const _0xd2c7c8 = cheerio.load(_0x527c7e);
    const _0x143828 = [];
    _0xd2c7c8("figure img").each((_0x104f92, _0x3d7eae) => {
      const _0x331a1d = _0xd2c7c8(_0x3d7eae).attr("src");
      _0x143828.push(_0x331a1d);
    });
    if (_0x143828.length === 0) {
      return await _0x12a1ae("No wallpapers found!");
    }
    const _0xa96cd3 = _0x143828[Math.floor(Math.random() * _0x143828.length)];
    await _0x41cacd.sendMessage(_0x290641, {
      'image': {
        'url': _0xa96cd3
      },
      'caption': "Here is your wallpaper!"
    }, {
      'quoted': _0x52b1d4
    });
  } catch (_0x37f0cf) {
    console.error(_0x37f0cf);
    _0x12a1ae("An error occurred while downloading the wallpaper. Please try again later.");
  }
});
