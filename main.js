const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => { 

            client.user.setPresence({ game: { name: "Coding Mode 4.6", type: 0 } })
            client.user.setStatus("dnd")

});

let prefix = ".";

client.on("message", message => {

    if(message.author.bot) return;
    if(message.content === prefix + "cloudbot") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setDescription("Ich bin der CloudBot ! Ich bin ein Beta Projekt von vClient, Modz | Leon#6913 ich werde viele Sachen können aber wir sind uns noch nicht Sicher was ich alles können soll darum bin ich ein Beta Projekt es wird ein bisschen dauern bis ich sachen kann weil vClient, Modz | Leon#6913 muss noch Coden lernen aber er hat es geschafft mich zum Leben zu erwecken LG CLoudbot")

        message.channel.send({embed})
  }
  if(message.content === prefix + "team") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setDescription("Die Team-Info von das CloudBot-Team kommt bald!")
        .setAuthor("Test")

        message.channel.send({embed})
  }
  if(message.content === prefix + "test") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setDescription("/")

        message.channel.send({embed})
  }
  if(message.content === prefix + "help") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setThumbnail(message.guild.iconURL)
        .setDescription("*.team* **Die Team-Info von das CloudBot-Team!** \n \n *.cloudbot* **Die Info über Cloudbot!**  \n \n *.test* **Test-Command!**  \n \n *.help* **Zeige das hier an!**  \n \n *.support-server* **Der Support Server!** \n \n *.invite* **Hole dir den Bot auf deinen Server!** \n \n *.kick* **Kicke einen User von deinen Server! [Nicht Verfügbar!]** \n \n *.ban* **Banne einen User von deinen Server! [Nicht Verfügbar!]**")

        message.channel.send({embed})
  }

 if(message.content === prefix + "support-server") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setDescription("**Du brauchst Support ?** \n *Dann komme auf den Support Server!* \n Invite : ?")

        message.channel.send({embed})
  }

 if(message.content === prefix + "invite") {

        const embed = new RichEmbed()
        .setColor(16776960)
        .setDescription("**Du willst den Bot auf deinen Server haben?** \n *Dann hole dir den Bot auf deinen Server!* \n Invite : https://discordapp.com/oauth2/authorize?client_id=551087921038622730&scope=bot&permissions=8")

        message.channel.send({embed})
  }
 client.on("message", (message) => {
    if (message.content.startsWith(".ban")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " wurde erfolgreich gebannt! https://gfycat.com/playfulfittingcaribou :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith(".kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " wurde erfolgreich getreten! :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.eynv.TOKEN)
  
  
  
client.on ( 'message', message => {
    warprefix = "."
    
    if(message.content.startsWith('${preifx}ping')) {
messsage.channel.send('ponk')
    }
    if(message.content.startsWith('${prefix}dm')) {
    
      message.member.send('hello wordl!\nthis is a new line!')
    }

    if(message.content.startsWith('${prefix}say')) {
      let args = message.content.slice(prefix.length).trim().split(/ +/g);
      let text = args.join(" ");
      if(!text) return message.replay('hey, say something *im giving up on u*')
    message.channel.send(text)
    }

    })
})

client.login(process.env.BOT_TOKEN);
