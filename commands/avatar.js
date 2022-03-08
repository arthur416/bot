const Discord = require("discord.js"); 

module.exports = {
    name: 'avatar',
    category: 'Information',
    
  run: async(client, message, args) => {
    let rc = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let msg = new Discord.MessageEmbed() 
        .setColor(`BLACK`) 
        .setTitle(`📷 **Avatar de:** ${rc.tag}`) 
        .setImage(rc.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
        .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    const button = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()

         .setStyle('LINK')
         .setEmoji('📎')
         .setLabel('Abrir imagem no navegador')
         .setURL(rc.displayAvatarURL({dynamic: true, size: 1024}))
)

    message.channel.send({ embeds: [msg], components: [button] });
  }

}