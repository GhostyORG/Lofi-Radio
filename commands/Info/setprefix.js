const db = require('quick.db');
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { prefix, developerID, support, bot } = require("../../config.json")
const {b, bnn, c, d, i, inv, m, p, pr, r, s, v, vo, lofi, su, dot, dev, lang} = require("../../emojis.json")
module.exports = {

        name: "setprefix",
        aliases: ['sp', 'prefix'],
        category: "moderation",
        description: "Sets Custom Prefix",
        usage: "[prefix]",
        accessableby: 'Administrators',
        premium: false,
    run: async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Do Not Permission to change my prefix!")
        
let color = db.get(`color_${message.author.id}`);
  if(color === null) color = "#FF002B";

        if (!args[0]) {
          let b = await db.fetch(`prefix_${message.guild.id}`);
          if (b) {
              let helpEmbed = new MessageEmbed()
    .setAuthor(`${client.user.username} Prefix`, "https://images-ext-1.discordapp.net/external/iOx-n5mMXkafvugdapWim_sS4asEN1st2F8yDsY0_lU/%3Fsize%3D4096/https/cdn.discordapp.com/icons/891974847775772672/61b88fa4e0ee886a56dcbe38af2264ac.png?width=603&height=603")
      .setDescription(`${dot} Prefix in this server is ${b} \n ${bnn}${vo} Do \`${b}help\` to get started`)
      .setColor(color)

      return message.channel.send(helpEmbed)
      
      } else return message.channel.send("Please specify prefix");
    } 
      
        try {

            let a = args.join(' ');
            let b = await db.fetch(`prefix_${message.guild.id}`)

            if (a === b) {
                return message.channel.send('Please give me another prefix.')
            } else {
                db.set(`prefix_${message.guild.id}`, a.toLowerCase())

                return message.channel.send(`Now my prefix in this server is \`${a}\``)
            }
        } catch (e) {
            console.log(e)
        }
    }
}