/* Author: Milena Furuta Shishito */

const Discord = require('discord.js');

const client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}
client.once('ready',()=>{
    console.log('bot is online');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'commands'){
        client.commands.get('commands').execute(message,args);

    }else if(command == 'christmas'){
        client.commands.get('christmas').execute(message,args);

    }else if(command == 'decorations'){
        client.commands.get('decorations').execute(message,args);
        
    }else if(command == 'food'){
        client.commands.get('food').execute(message,args);
        
    }else if(command == 'movies'){
        client.commands.get('movies').execute(message,args);
        
    }else if(command == 'origin'){
        client.commands.get('origin').execute(message,args);
        
    }else if(command == 'santa'){
        client.commands.get('santa').execute(message,args);
        
    }else if(command == 'songs'){
        client.commands.get('songs').execute(message,args);
        
    }else if(command == 'traditions'){
        client.commands.get('traditions').execute(message,args);
        
    }else if(command == 'worldevents'){
        client.commands.get('worldevents').execute(message,args);
        
    }else if(command == 'gift'){
        client.commands.get('gift').execute(message,args);
    }
});

client.login('OTI0MDE4MTYxNDQxOTcyMjI1.YcYc-Q.SqS7fEJ6WiAQgAOSSr3apcvwdA0');