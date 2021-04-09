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

        var reason = args.join(" ").slice(time.length + 1);
        if (!reason) {
            return message.reply("Please specify reason");
        }
        else {
            message.reply(`OK! I will remind you in ${time}`)
            setTimeout(function () {
                return message.reply(`${reason}`)
            }, ms(time));
        }
    }

    console.log("time: " + time)
    console.log("time length: " + time.length);
    console.log("reason: " + reason)
    console.log("args: " + args);
})

bot.login(process.env.TOKEN);