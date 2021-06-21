const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`${bot.user.tag} is now online! (remind.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'remind') {
        if (!args.length) {
            return
        }

        var hours = args[0];
        if (!hours) {
            return message.reply("Please specify hour(s)");
        }
        var hoursTime = hours / 3600000

        var minutes = args[1];
        if (!minutes) {
            return message.reply("Please specify minute(s)");
        }
        var minutesTime = minutes / 60000

        var seconds = args[2];
        if (!seconds) {
            return message.reply("Please specify second(s)");
        }
        var secondsTime = seconds / 1000

        var totalTime = hoursTime + minutesTime + secondsTime;

        var reason = args.join(" ").slice(hours.length + 1 + minutes.length + 1 + seconds.length + 1);
        if (!reason) {
            return message.reply("Please specify reason");
        }
        else {
            message.reply(`OK! I will remind you in ${time}`)
            setTimeout(function () {
                return message.reply(`${reason}`)
            }, totalTime);
        }
    }
})

bot.login(process.env.TOKEN);