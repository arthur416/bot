const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ["purge", "limpar"],
    UserPerms: ['MANAGE_MESSAGES'],

    run: async (client, message, args, Discord) => {
        try {
          let embed = new MessageEmbed()
          .setDescription('>>clear `[1-99]`')
          .setColor("RANDOM")
            let delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({embeds: [embed]})

          let embed2 = new MessageEmbed()
          .setDescription('>>clear `[1-99]`')
          .setColor("RANDOM")
            if (parseInt(delamount) > 99) return message.reply({embeds: [embed2]})
            await message.channel.bulkDelete(parseInt(delamount) + 1, true);
 
           let embed3 = new MessageEmbed()

           .setDescription(`${message.author} apagou \`${args[0]}\` mensagens!`)
           .setThumbnail(`https://static.wixstatic.com/media/3ee9fd_d618341218b1408a8133991bd0a04940.gif`)
           .setFooter(`Limpeza realizada`, "https://static.wixstatic.com/media/3ee9fd_d618341218b1408a8133991bd0a04940.gif")
           .setColor("RANDOM")
            await message.channel.send({embeds: [embed3]}).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000) 
            })
        } catch (e) {
            console.log(e)
        } 
    }
}