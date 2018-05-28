//Modules
const Discord = require("discord.js");
const moment = require("moment");

const client = bot

//Client
const bot = new Discord.Client();

//Prefix
const prefix = '--'

//Lancement et informations du bot
bot.on('ready', () => {
   
   console.log(`INFORMATIONS DU BOT:`);
   console.log(`Invite of bot all perms: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591`);
   console.log(`username: ${bot.user.tag}`);
   console.log(`ID: ${bot.user.id}`);
   //console.log(`Date of creation: ${bot.createdTimestamp}`);
   console.log(`INFORMATIONS OF SERVER BOT:`);
   console.log(`How many server: ${bot.guilds.size}`);
   console.log(`Name: ${bot.guild.name}`);
   console.log(`ID: ${bot.guild.id}`);
   console.log(`How many member: ${guild.memberCount}`);
 });


bot.on('message', message => {
  
   //invit link 
    //bot.guilds.forEach(guild => { 
      //var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random('1').id);
     // invite.createInvite({maxAge: 0}, {maxUses: 0}).then(invite => { console.log(`Connecté sur :\n${guild.name} ${invite}`));
     //  };                                                   
     // }
  // });          
                                                                    
     
                                                          
   
   if (message.content.startsWith('C\'est mieux comme ça')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
    message.member.addRole(message.member.guild.roles.find('name', '☡- 🌸Famille de shiro🌸 -☡'));
      }
   
   
   
   //message.channel.createInvite({maxAge: 0, maxUses: 0}).then(invite => {
    //let embed = new Discord.RichEmbed()
    //.setColor(color)
   // .console.log(`**Permanent Invite Link**: ${invite}`);
   // message.channel.send(embed);
 // });
//}
//});
  
// Jeton Secret
bot.login(process.env.TOKEN);
