const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setTitle('Selam! Ben Emoji.')
.setDescription(`[Botu sunucuya ekle.](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074121728)

[Destek Sunucusu](https://discord.gg/4sqJ7AKJ22)`)
.setFooter('Leaser Tarafından Yapıldı', client.user.avatarURL()))

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'davet',
  namee: 'invite'
};