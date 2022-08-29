const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { prefix, developerID, support, bot } = require("../../config.json")
const {b, bnn, c, d, i, inv, m, p, pr, r, s, v, vo, lofi, su, dot, dev, lang} = require("../../emojis.json")

module.exports = {
  name: "invite",
  aliases: ["support"],
  description: "Information",
  premium: false,

  run: async (client, message, args) => {
     
    const db =require("quick.db");
let color = db.get(`color_${message.author.id}`);
  if(color === null) color = "#FF002B";
    let helpEmbed = new MessageEmbed()
    .setAuthor(`${client.user.username} Links`, "https://images-ext-1.discordapp.net/external/iOx-n5mMXkafvugdapWim_sS4asEN1st2F8yDsY0_lU/%3Fsize%3D4096/https/cdn.discordapp.com/icons/891974847775772672/61b88fa4e0ee886a56dcbe38af2264ac.png?width=603&height=603")
      .setDescription(`*${dot} Here is invite and support server link* \n${b}${dev} **Developer:** [Draxler#6145](https://discord.gg/6ePN9bxXRx)`)
      .setColor(color)

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite') 
      .setEmoji(`954003216541044756`)
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
       .setEmoji(`954008516853628928`)
      .setURL(`${support}`);


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  }
};