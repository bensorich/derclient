const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => { 

            client.user.setPresence({ game: { name: "Coding Mode 2.5", type: 0 } })
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
client.on("message", message => { 

  if(!message.guild) return;
  if(message.author.bot) return;

  if(message.content.startsWith(".kick")) {

     let user = message.mentions.users.first();
     if(!user) return message.channel.send("Du musst erst einen Member angeben!"); 
    
     let member = message.guild.member(user); 
     if(!member) return message.channel.send("Den Member den du angegeben hast gibt es nicht!"); 
        
     member.kick().then(() => message.reply(`Der Member ${member} wurde erfolgreich gekickt!`));

  } 
});
})

client.login(process.env.BOT_TOKEN);
