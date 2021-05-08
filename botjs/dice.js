const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`${bot.user.tag} is now online! (dice.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'dice') {
        if (!args.length) {
            return
        }

        var number = args[0];
        if (!number) {
            return message.reply("Please specify a number");
        }
        else {
            var randomDice = Math.floor(Math.random() * number) + 1;
            message.reply(`Roll~ Spin~ You got ${randomDice}!`)
        }
    }
})

bot.login(process.env.TOKEN);