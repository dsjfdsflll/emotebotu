const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.channel.send(new Discord.MessageEmbed()
.setColor('eb5c0e')
.setTitle("Hi there! I'm Emoji.")
.setDescription(`[Add me to your server!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074121728)
You can find new emojis, edit existing ones, send & react with emojis easily.

[Need some help there?](https://discord.gg/4sqJ7AKJ22)`)
.addField('All Commands — '+client.commands.filter(x => x.help.namee).size, '🆕 **'+client.commands.filter(x => x.help.namee).map(x => x.help.namee).join('**, **')+`**\n\n>>> Server's current prefix is: \`-\`
Example command usage: \`-${client.commands.filter(x => x.help.namee).map(x => x.help.namee)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee).map(x => x.help.namee).length)]}\``)
.setFooter('Created By Leaser', client.user.avatarURL()))


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'help'
};