const chalk = require('chalk');
const db = require('quick.db')
const moment = require('moment');
const Discord = require('discord.js');
module.exports = client => {
  var prefix = client.conf.prefix;
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus(`online`);
   var oyun = [
        `${prefix}yardım | emojibotu.tk`,
        `${prefix}davet | Beni Ekle`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet! | emojibotu.tk`,
        `${client.guilds.cache.size} Sunucuya Hizmet! | emojibotu.tk`,
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random]);
        }, 2 * 2500);
        let girisembed = new Discord.MessageEmbed()
        .setAuthor(client.conf.botadı, client.avatarURL)
        .setColor(client.conf.renk)
        .setDescription(`${client.guilds.size} sunucuya hizmet vermek için tekrar başladım.`)
       // client.channels.get(`746704575389761556`).send(girisembed)
}