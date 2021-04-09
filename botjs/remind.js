const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (remind.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'remind') {
        var time = args[0];
        if (!time) {
            return message.reply("Please specify time");
        }

        var reason = args.join(" ").slice("c.remind" + args[0].length);
        if (reason) {
            if (!args[1]) {
                return message.reply("Please specify reason");
            }

            return message.reply(`I will remind you in ${time}`)
        }

        setTimeout(function () {
            message.author.send(`${reason}`);
        }, ms(time));
    }
})

bot.login(process.env.TOKEN);