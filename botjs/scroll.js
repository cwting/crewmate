const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.info(`${bot.user.tag} is now online! (scroll.js)`); // BOT online
});

const prefix = 'c.';
bot.on('message', message => {
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'scroll') {
        if (!args.length) {
            return
        }

        var scrollPct = parseInt(args[0]);
        var rng = Math.floor(Math.random() * 100) + 1;

        switch (scrollPct) {
            case 1:
                if (rng <= 1) {
                    message.reply(`Passed :D`);
                } else if (rng <= 97) {
                    message.reply(`Failed :(`);
                } else {
                    message.reply(`Boomed T.T`);
                }
                break;

            case 3:
                if (rng <= 3) {
                    message.reply(`Passed :D`);
                } else if (rng <= 91) {
                    message.reply(`Failed :(`);
                } else {
                    message.reply(`Boomed T.T`);
                }
                break;

            case 10:
                if (rng <= 10) {
                    message.reply(`Passed :D`);
                } else {
                    message.reply(`Failed :(`);
                }
                break;

            case 30:
                if (rng <= 30) {
                    message.reply(`Passed :D`);
                } else if (rng <= 65) {
                    message.reply(`Failed. :(`);
                } else {
                    message.reply(`Boomed T.T`);
                }
                break;

            case 60:
                if (rng <= 60) {
                    message.reply(`Passed :D`);
                } else {
                    message.reply(`Failed :(`);
                }
                break;

            case 70:
                if (rng <= 70) {
                    message.reply(`Passed :D`);
                } else if (rng <= 85) {
                    message.reply(`Failed. :(`);
                } else {
                    message.reply(`Boomed T.T`);
                }
                break;

            case 100:
                message.reply(`Why are you using this? =3=`);
                break;

            default:
                break;
        }
    }
})

bot.login(process.env.TOKEN);