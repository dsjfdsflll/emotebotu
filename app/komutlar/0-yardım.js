const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.channel.send(new Discord.MessageEmbed()
.setColor('eb5c0e')
.setTitle('Selam! Ben Emoji.')
.setDescription(`[Beni sunucuna ekle!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074121728)
Komutlarım ile sunucunuza yeni emojiler bulabilir, var olanları düzenleyebilir, tepki olarak ekleyebilirsiniz.

[Yardım mı lazım?](https://discord.gg/4sqJ7AKJ22)`)
.addField('Bütün Komutlar — '+client.commands.filter(x => x.help.namee || x.help.nameee).size, '🆕 **'+client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).join('**, **')+`**\n\n>>> Sunucunun şuanki ön-eki: \`-\`
Örnek komut kullanımı: \`-${client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).length)]}\``)
.setFooter('Leaser Tarafından Yapıldı.', client.user.avatarURL()))


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım',
  namee: 'help'
};