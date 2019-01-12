const Discord = require("discord.js");
        

exports.run = (client, message, args) => {
    
    var razao = args.slice(1).join(" ");
    var membro = message.mentions.members.first() || client.users.get(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("dá uma segura aí que você não tem autorização!");

    if (!membro) return message.reply("Mencione o membro que deseja dar warn!");
    if (!membro.bannable) return message.reply("É impossível dar warn em um ser superior, se quiser dar warn, dê sozinho!");

    message.delete();

    if (razao.length < 1) return message.reply("Adicione um motivo válido!");

    const warnembed = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setThumbnail(membro.user.avatarURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`O usuário foi punido(a) por desrespeitar as regras do servidor!`)
        .addField("🚫 | Punição", `Warn`)
        .addField("👮🏻 | responsável", `${message.author.username}`)
        .addField("🔧 | ID do responsável", `${message.author.id}`)
        .addField("👤 | Usuário", `${membro}`)
        .addField("⚙️ | ID do usuário:", `${membro.id}`)
        .addField("📑 | Motivo", razao)
        .setTimestamp();
message.channel.send(warnembed);






}

exports.help = {
    name: 'warn'
}