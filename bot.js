const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzQ4NzExMDYwMjQ0MDA0OTI3.X0hZgw.y8E2LGkRTQ3fJATh-NMChtPgt8E);//BOT_TOKEN is the Client Secret
