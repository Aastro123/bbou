//Modules
const Discord = require("discord.js");
const moment = require("moment");


//Client
const bot = new Discord.Client();

//Prefix
const prefix = '--'

//Lancement et etat du bot
bot.on('ready', () => {
   console.log(`        \          SORRY            /`);
   console.log(`      \                         /`);
   console.log(`       \    This page does     /`);
   console.log(`        ]   not exist yet.    [    ,'|`);
   console.log(`        ]                     [   /  |`);
   console.log(`        ]___               ___[ ,'   |`);
   console.log(`        ]  ]\             /[  [ |:   |`);
   console.log(`        ]  ] \           / [  [ |:   |`);
   console.log(`        ]  ]  ]         [  [  [ |:   |`);
   console.log(`        ]  ]  ]__     __[  [  [ |:   |`);
   console.log(`        ]  ]  ] ]\ _ /[ [  [  [ |:   |`);
   console.log(`        ]  ]  ] ] (#) [ [  [  [ :===='`);
   console.log(`        ]  ]  ]_].nHn.[_[  [  [`);
   console.log(`        ]  ]  ]  HHHHH. [  [  [`);
   console.log(`        ]  ] /   'UHH("  \ [  [`);
   console.log(`        ]__]/     HHH  "  \[__[`);
   console.log(`        ]         NNN         [`);
   console.log(`        ]         N/"         [`);
   console.log(`        ]         N H         [`);
   console.log(`       /          N            \ `);
   console.log(`      /           q'            \ `);
   console.log(`     /                           \ `);

   console.log(`INFORMATIONS DU BOT:`);
   console.log(`Invite of bot all perms: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591`);
   console.log(`username: ${bot.user.tag}`);
   console.log(`ID: ${bot.user.id}`);
   //console.log(`Date of creation: ${bot.createdTimestamp}`);
   console.log(`INFORMATIONS OF SERVER BOT:`);
   console.log(`How many server: ${bot.guilds.size}`);
  // console.log(`Name: ${bot.guilds.name}`);
  // console.log(`ID: ${bot.guilds.id}`);
 //  console.log(`How many member: ${guilds.memberCount}`);
 });

bot.on('message', msg => {
  if (msg.content === 'urjrurjping') {
    msg.reply('Pong!');
  }
});
  
// Jeton Secret
bot.login(process.env.TOKEN);
