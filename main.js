const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => { 

            client.user.setPresence({ game: { name: "e!help | Beta V 0.1", type: 0 } })
            client.user.setStatus("dnd")

});

let prefix = "e!";

client.on("message", message => {

    if(message.author.bot) return;
    if(message.content === prefix + "gaming") {

        const embed = new RichEmbed()
        .setColor(16738816)
        .setDescription("/")

        message.channel.send({embed})
  }
  if(message.content === prefix + "team") {

        const embed = new RichEmbed()
        .setColor(16738816)
        .setDescription("Die Team-Info von das TheCrew-Team kommt bald!")

        message.channel.send({embed})
  }
  if(message.content === prefix + "test") {

        const embed = new RichEmbed()
        .setColor(16738816)
        .setDescription("/")

        message.channel.send({embed})
  }
  if(message.content === prefix + "help") {

        const embed = new RichEmbed()
        .setColor(16738816)
        .setThumbnail(message.guild.iconURL)
        .setDescription("\n \n *e!help* **Zeige das hier an!** \n \n *e!beta-mode* **Zeige Infos zum Beta-Modus!** \n \n *e!gaming* **Zeige Infos über den Bot an!** \n \n *e!team* **Zeige die Team-Info vom THECREW TEAM an!** \n \n *e!test* **Test-Command!** \n \n *e!kick {User}* **Kicke einen User!**[Wartung!] \n \n *e!ban {User}* **Banne einen User**[Wartung!]")

        message.channel.send({embed})
  }
  if(message.content === prefix + "beta-mode") {

        const embed = new RichEmbed()
        .setColor(16738816)
        .setDescription("**Der Beta-Modus!\n \n In diesen Modus gibt es nur Standard Text Commands!\n \n Status Beta-Mode : Online**")

        message.channel.send({embed})
  }
  const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NTU5NzM4OTMzNTQ2ODQ0MTYw.XRN7Qw.d9UiUQe6nGfl2xbSwBBtpHexZdc');

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '.join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
})

client.login(process.env.BOT_TOKEN);
