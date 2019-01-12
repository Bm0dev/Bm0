const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("dá uma segura aí que você não tem autorização!");
  if (args[0] == "ajuda") {
      message.reply("Use: !!mute <usuário>");
      return;
  }
  let member = message.mentions.members.first();
  if (!member) return message.reply("Por favor mencione um usuário!");
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "Para ele dar uma esfriada!";

  let muterole = message.guild.roles.find(r => r.name === "Muted" || r.name === "muted");
 

  let muteembed = new Discord.RichEmbed()
  .setTitle("**:boom::hammer: Usário mutado do servidor**")
  .setColor("RANDOM")
  .setTimestamp()
  .addField(":cop: Responsável: " , message.author.tag, true)
  .addField(":bust_in_silhouette: Usuário: " , member.user, true)
  .addField(":card_index: ID: " , member.user.id, true)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(":page_with_curl: Motivo: " , reason, true);

  message.channel.send(muteembed);
  member.addRole(muterole);
    
}

exports.help = {
  name: "mute"
}
