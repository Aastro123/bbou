//Modules
const Discord = require("discord.js");
const moment = require("moment");


//Client
const bot = new Discord.Client();

//Prefix
const prefix = '--'

//Lancement et etat du bot
bot.on('ready', () => {
   console.log('INFORMATIONS DU BOT:');
   console.log('Invite of bot all perms: https://discordapp.com/oauth2/authorize?client_id=${bot.id}&scope=bot&permissions=2146958591');
   console.log('username: ${bot.user.tag}');
   console.log('ID: ${bot.id}');
   console.log('Date of creation: ${bot.createdTimestamp}');
   console.log('INFORMATIONS OF SERVER BOT:');
   console.log('How many server: ${bot.guilds.size}');
   console.log('Name: ${bot.guilds.name}');
   console.log('Name: ${bot.guilds.id}');
   console.log('How many member: ${guilds.memberCount}');
   //bot.user.setActivity(`Serveur : ${bot.guilds.size}`, {type: "PLAYING"});
  });

  bot.on('message', msg => {
  if (msg.content === 'hdudkfbfkdjping') {
    msg.reply('Pong!');
  }
});
  
// Jeton Secret
client.login('process.env.TOKEN');
