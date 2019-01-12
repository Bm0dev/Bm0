const Discord = require('discord.js');
exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("dá uma segura aí que você não tem autorização!");
    let muteRole = message.guild.roles.find(r => r.name === "Muted" || r.name === "muted");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Quem você quer desmutar?`);

    
    await (member.removeRole(muteRole.id));
     
    let muteembed = new Discord.RichEmbed()
    .setTitle("**💥🔨 Usário Desmutado do servidor**")
    .setColor("RANDOM")
    .setTimestamp()
    .addField("👮 Responsável: " , message.author.tag, true)
    .addField("👤 Usuário: " , member.user, true)
    .addField("📇 ID: " , member.user.id, true)
    .setThumbnail(message.author.displayAvatarURL)
    .addField("📃 Motivo: " , "Indiferente");
  
    message.channel.send(muteembed);

}

exports.help = {
name: 'unmute'
}