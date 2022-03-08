const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({intents: 32767});

//handler
client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content
     .trim().slice(config.prefix.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {
 console.error('Erro:' + err);
}
});

//log
const black = "\x1b[30m",
red = "\x1b[31m",
green = "\x1b[32m",
yellow = "\x1b[33m",
blue = "\x1b[34m",
purple = "\x1b[35m",
cyan = "\x1b[36m",
white = "\x1b[37m"

colorful = (color, string, reset = '\x1b[0m') => color + string + reset;

client.once("ready", () => {
    client.user.setActivity("KIṈGDOM OҒ ᕈROGRΔMMIṈG", {
      type: "STREAMING",
      url: "https://www.twitch.tv/ikxrmht"
    });
    console.log(colorful(blue, `[LOGS] ${client.user.tag} Está online!\n[LOGS] Estou em ${client.guilds.cache.size} servidores.\n[LOGS] Cuidando de ${client.users.cache.size} membros.`))
  
  });

//ativação pro bot ficar online
client.login(config.token);
