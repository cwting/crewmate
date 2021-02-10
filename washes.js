const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (washes.js)`); // BOT online
})

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'washes') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments! for belbel: $washes <job> <level> <mp>`);
        }
        else if (args[0] === 'spearman') {
            message.channel.send('spearman wash entered!');
        }
        else if (args[0] === 'fighter') {
            message.channel.send('fighter wash entered!');
        }
        else if (args[0] === 'page') {
            message.channel.send('page wash entered!');
        }
        else if (args[0] === 'archer') {
            message.channel.send('archer wash entered!');
        }
        else if (args[0] === 'thief') {
            message.channel.send('thief wash entered!');
        }
        else if (args[0] === 'brawler') {
            message.channel.send('brawler wash entered!');
        }
        else if (args[0] === 'gunslinger') {
            message.channel.send('gunslinger wash entered!');
        }
        else if (args[0] === 'magician') {
            message.channel.send('magician wash entered!');
        }
    }

})

bot.login(process.env.TOKEN);