/* Author: Milena Furuta Shishito */

const Discord = require('discord.js');

const client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
/*for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}*/
client.once('ready',()=>{
    console.log('bot is online');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'play'){
        var botChoice = 0;
        message.reply('**Let\'s play Rock, Paper, Scissors!!✊ 🖐️ ✌️**\n By choosing one of the reactions I will show you my choice as well and we will see who is the winner. . . ','').then(msg=>{
            msg.react("✊");
            msg.react("🖐️");
            msg.react("✌️");

            const reciveFilter = (reaction,user) => reaction.emoji.name === "✊" || reaction.emoji.name === "🖐️" || reaction.emoji.name === "✌️" && user.id === message.author.id;

            const collector = msg.createReactionCollector({ reciveFilter, time: 15000 });
            collector.on('collect', (reaction, user) => {
                
                if(user.id != message.author.id) return;
                if(reaction.emoji.name == "✊")
                {
                    botChoice = Math.floor(Math.random() * 3); // 0 1 2
                    console.log(botChoice);
                    if(botChoice == 0)
                    {
                        msg.edit(`😯✊`);
                        msg.channel.send(`${message.author} **That was close. . .** If you want to play again send **+play**`);
                    }else if(botChoice == 1){
                        msg.edit(`😎🖐️`);
                        msg.channel.send(`${message.author} **And the winner is me!!!!** If you want to play again send **+play**`);
                    }else if(botChoice == 2){
                        msg.edit(`😢✌️`);
                        msg.channel.send(`${message.author} **Oh no! I lost!!!** If you want to play again send **+play**`);
                    }
                }
                else if(reaction.emoji.name == "🖐️")
                {
                    if(botChoice == 0)
                    {
                        msg.edit(`😢✊`);
                        msg.channel.send(`${message.author} **Oh no! I lost!!!** If you want to play again send **+play**`);
                    }else if(botChoice == 1){
                        msg.edit(`😯🖐️`);
                        msg.channel.send(`${message.author} **That was close. . .** If you want to play again send **+play**`);
                    }else if(botChoice == 2){
                        msg.edit(`😎✌️`);
                        msg.channel.send(`${message.author} **And the winner is me!!!!** If you want to play again send **+play**`);
                    }
                }
                else if(reaction.emoji.name == "✌️")
                {
                    if(botChoice == 0)
                    {
                        msg.edit(`😎✊`);
                        msg.channel.send(`${message.author} **And the winner is me!!!!** If you want to play again send **+play**`);
                    }else if(botChoice == 1){
                        msg.edit(`😢🖐️`);
                        msg.channel.send(`${message.author} **Oh no! I lost!!!** If you want to play again send **+play**`);
                    }else if(botChoice == 2){
                        msg.edit(`😯✌️`);
                        msg.channel.send(`${message.author} **That was close. . .** If you want to play again send **+play**`);
                    }
                }
            });
        })
    }
});

client.login('');