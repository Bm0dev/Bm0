const Discord = require("discord.js");

exports.run = async (bot, message, args) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O comandos de status foi ativado!")

    for (i=0; i<10;){
        await sleep(90000)
        bot.user.setActivity(`Para ${bot.users.size} Usuários`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'}) //define é mostra quantos usuários que o bot tem
        await sleep(60000)
        bot.user.setActivity(`Bm0`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'})
        await sleep(60000)
        bot.user.setActivity(`Bm0`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'})
        await sleep(60000)
        bot.user.setActivity(`Sendo desenvolvido!`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'})
        await sleep(80000)
        bot.user.setActivity(`Meu criador: Bm0#0001`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'})
        await sleep(80000)
        bot.user.setActivity(`Para ${bot.guilds.size} Servidores!`, {type: 'STREAMING', url: 'https://twitch.tv/Bm0'}) //define é mostra quantidade de servidores em que o bot está

        }
}    
module.exports.help = {
name: "status"
}