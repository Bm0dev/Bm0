const Discord = require("discord.js"); 
const bot = new Discord.Client(); 
const config = require("./config.json"); 
const fs = require("fs");
const Welcome = require("discord-welcome");
bot.commands = new Discord.Collection();





 
Welcome(bot, {
    privatemsg : "Bem vindo",
    publicmsg : "Bem vindo Leias as <#518852033915125900>",
    publicchannel : "512010585840418821"
})

bot.on('guildMemberAdd', member => {
  if (member.guild.id !== "531558402321678346") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
      .setColor('#ba15ff')
      .setThumbnail(avatar)
      .setTitle("**Teste**")
      .addField('Bem vindo(a)!', ` Ao servidor ${member}`)
      .addField('Membro de numero:', member.guild.memberCount)
      .setTimestamp()
  bot.channels.get('531558402321678346').send(embed)
});


fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() =="js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);
    });
});
bot.on('ready', () => {
    console.log(`O bot ${bot.user.username} ficou online com sucesso`);
});

bot.on('message', message => {
    
    if(message.channel.type === "dm") return;
    
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);

    });

bot.on("message", async message => {
  if(message.content.startsWith('<@531550850800287745>')) {
      let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`:question: | Quer saber meus comandos?`)
  .addField(':robot: Eh facil', `Utilize !help.`)
  .addField(':dragon_face: | Quer adquirir um BOT para seu discord?', `\n Mande uma mensagem para meu criador.`)
  .addField(':crown: Criador:', `@Bm0#0001`)
  .addField(':robot: Função:', `Funções Gerais.`)
  .setThumbnail(bot.user.avatarURL)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
  } 

  if (message.content.includes("https://discord.gg/")) {
          if (!message.member.hasPermission("ADMINISTRATOR")) {
              message.delete();
              message.reply("? **Você não pode divulgar aqui!**");
          }
  
      }

});

bot.login(config.token);