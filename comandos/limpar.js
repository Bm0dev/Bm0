exports.run = async (client, message, args) => {
        
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Você não tem permissão suficiente para poder apagar mensagens!")
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)

        return message.reply(" você tem que me fornecer um número entre 2 e 100 equivalente ao número de mensagens a serem excluídas!")
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`ERROR <:error:513734399762628609> **${error}**`))
  
}

exports.help = {
  name: "limpar"
}