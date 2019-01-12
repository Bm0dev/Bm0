const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("dá uma segura aí que você não tem autorização!");
    let reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    let user = args[0];
    if(!reason) {
        reason = "Não informado";
    }
    if (!user) return message.reply('Informe o ID do usuário corretamente.').catch(console.error);
    message.guild.unban(user);
  
        

   var embed = new Discord.RichEmbed()
   .setTitle("**💥 🔧: Usário desbanido do servidor**")
   .setColor("#FF0000")
   .setTimestamp()
   .addField("👮 Responsável: " , message.author.tag, true)
   .setDescription(`**👤 Usuário:** 
                    <@${user}>`)
   .addField("📇 ID:", user, true )
   .setThumbnail(message.author.displayAvatarURL)
   .addField("📃 Motivo: " , reason, true);

   message.channel.send(embed);
        
}

exports.help = {
    name: 'unban'
}