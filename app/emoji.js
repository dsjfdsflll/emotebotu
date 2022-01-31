const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const logs = require('discord-logs');
logs(client);
const ms = require("ms")
const Settings = require('./conf.json');

const mongoose = require("mongoose");

client.conf = {
     "prefix": "-",
      "sahip": ["905421713590849566"],
      "durum": "online",// STATUS
      "renk": `4A4A4A`,// EMBED COLOR
      "botadı": "Created By Leaser",// BOT NAME
      "davetlinki": "https://discord.com/api/oauth2/authorize?client_id=930428729543495701&permissions=413390949376&scope=bot",//İNVİTE LİNK
      "desteklinki": "https://discord.gg/4sqJ7AKJ22",// SUPPORT SERVER LİNK
    }
    var prefix = client.conf.prefix
    client.avatarURL = "https://cdn.discordapp.com/attachments/930432532120498219/930436248802328616/4416578.png"//optional

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.cache.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.cache.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.cache.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.cache.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === client.conf.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn',function(e) {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error',function(e) {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
//veritabanı işlemleri
mongoose.connect(Settings.BotSettings.mongodburl, {useNewUrlParser: true, useUnifiedTopology: true}).then(c => console.log(`MongoDB'ye bağlanıldı!`)).catch(err => console.error(`Mongodb'Ye Bağlanılırken Hata Meydana Geldi!`));
client.login(process.env.token)
//---------------------------------KOMUTLAR---------------------------------\\




client.on("emojiCreate", async(emoji) => {
const fetchedLogs = await emoji.guild.fetchAuditLogs({
            limit: 5,
            type: 'EMOJI_CREATE',
            });
let yapan = fetchedLogs.entries.first()
let schema = require("./models/emojicreateevent.js")
let sj = new schema({
    sunucuID: emoji.guild.id,
    kullanıcıID: yapan.executor.id,
    emojiID: emoji.id,
    zaman: emoji.createdTimestamp
})
sj.save()
              
            });

            client.on("emojiDelete", async(emoji) => {
let schema = require("./models/emojicreateevent.js")
schema.findOneAndRemove({
    emojiID: emoji.id
  }).exec()
              
            });