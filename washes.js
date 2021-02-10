const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (washes.js)`); // BOT online

})

const prefix = "c.";
// bot.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'washes') {
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments! $washes <job> <level> <mp>`);
    }
    else if (args[0] === 'spearman') {
        message.channel.send('spearman wash entered!');
    }

    message.channel.send(`Command namne: ${command}\nArguments: ${args}\nFirst argument: ${args[0]}`)
}

/*switch (args[0]) {
    case 'washes':
        if (args[1].toLowerCase() === 'spearman') {
            message.channel.send('spearman wash');
        }
        else if (args[1].toLowerCase() === 'fighter') {
            message.channel.send('fighter wash');
        }
        else if (args[1].toLowerCase() === 'page') {
            message.channel.send('page wash');
        }
        else if (args[1].toLowerCase() === 'archer') {
            message.channel.send('archer wash');
        }
        else if (args[1].toLowerCase() === 'thief') {
            message.channel.send('thief wash');
        }
        else if (args[1].toLowerCase() === 'brawler') {
            message.channel.send('brawler wash');
        }
        else if (args[1].toLowerCase() === 'gunslinger') {
            message.channel.send('gunslinger wash');
        }
        else if (args[1].toLowerCase() === 'magician') {
            message.channel.send('magician wash');
        }
        break;
}*/

bot.login(process.env.TOKEN);