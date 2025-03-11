const fbDownloaderCommand = {
  pattern: 'fb',
  react: "🥲",
  alias: ["fbdl", "facebook"],
  desc: desc1,
  category: "download",
  use: ".fb <Fb video link>",
  filename: __filename
};

cmd(fbDownloaderCommand, async (bot, message, options, { from,prefix,l,quoted,body,isCmd,command,args,q,isGroup,sender,senderNumber,botNumber2,botNumber,pushname,isMe,isOwner,groupMetadata,groupName,participants,groupAdmins,isBotAdmins,isAdmins,
  reply
}) => {
  try {
    if (!fbreg(q)) {
      return await reply(urlneed2);
    }

    const fbData = await fetchJson(`https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=${q}`);
    let captionText = `VAJIRA MD FB DOWNLOADER\n\n*URL :* ${q}`;

    if (config.MODE === "nonbutton") {
      let menuSections = [
        {
          'title': "SD TYPE 🪫",
          'rows': [
            { 'title': "1.1", 'rowId': `${prefix}fbsd ${q}`, 'description': "🪫 `SD` QUALITY VIDEO" },
            { 'title': "1.2", 'rowId': `${prefix}fbsdd ${q}`, 'description': "📂 `SD` QUALITY DOCUMENT" }
          ]
        },
        {
          'title': "HD TYPE 🔋",
          'rows': [
            { 'title': "2.1", 'rowId': `${prefix}fbhd ${q}`, 'description': "🔋 `HD` QUALITY VIDEO" },
            { 'title': "2.2", 'rowId': `${prefix}fbhdd ${q}`, 'description': "📂 `HD` QUALITY DOCUMENT" }
          ]
        },
        {
          'title': "VOICE CUT TYPE 🎶",
          'rows': [
            { 'title': "3.1", 'rowId': `${prefix}fba ${q}`, 'description': "🎶 Audio file" },
            { 'title': "3.2", 'rowId': `${prefix}fbd ${q}`, 'description': "📂 Document file" }
          ]
        }
      ];

      const menuOptions = {
        image: { url: fbData.result.thumb },
        caption: captionText,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: menuSections
      };

      return await bot.replyList(from, menuOptions, { quoted: message });
    }

    if (config.MODE === "button") {
      let menuSections = [
        {
          title: "SD TYPE 🪫",
          rows: [
            { 'description': "🪫 `SD` QUALITY VIDEO", 'id': `${prefix}fbsd ${q}` },
            { 'description': "📂 `SD` QUALITY DOCUMENT", 'id': `${prefix}fbsdd ${q}` }
          ]
        },
        {
          title: "HD TYPE 🔋",
          rows: [
            { 'description': "🔋 `HD` QUALITY VIDEO", 'id': `${prefix}fbhd ${q}` },
            { 'description': "📂 `HD` QUALITY DOCUMENT", 'id': `${prefix}fbhdd ${q}` }
          ]
        },
        {
          title: "VOICE CUT TYPE 🎶",
          rows: [
            { 'description': "🎶 Audio file", 'id': `${prefix}fba ${q}` },
            { 'description': "📂 Document file", 'id': `${prefix}fbd ${q}` }
          ]
        }
      ];

      const buttonOptions = {
        title: "Click Here⎙",
        sections: menuSections
      };

      let buttons = [
        { buttonId: `${prefix}fbsd ${q}`, buttonText: { displayText: "🪫 `SD` QUALITY VIDEO" } },
        { buttonId: `${prefix}fbhd ${q}`, buttonText: { displayText: "🔋 `HD` QUALITY VIDEO" } },
        { buttonId: `${prefix}fba ${q}`, buttonText: { displayText: "🎶 Audio file" } },
        {
          buttonId: "action",
          buttonText: { displayText: "ini pesan interactiveMeta" },
          type: 4,
          nativeFlowInfo: { name: "single_select", paramsJson: JSON.stringify(buttonOptions) }
        }
      ];

      bot.sendMessage(from, {
        image: { url: config.LOGO },
        caption: captionText,
        footer: config.FOOTER,
        buttons,
        headerType: 1,
        viewOnce: true
      }, { quoted: options });
    }
  } catch (error) {
    reply("*ERROR !!*");
    l(error);
  }
});
