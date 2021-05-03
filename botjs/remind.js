const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`${bot.user.tag} is now online! (remind.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'remind') {
        if (!args.length) {
            return
        }
        
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
})

bot.login(process.env.TOKEN);