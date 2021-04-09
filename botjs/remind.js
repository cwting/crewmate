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
        var reason = args.join(" ").slice("c.remind" + time.length);

        if (!time) {
            return message.reply("Please specify time");
        }
        if (!reason) {
            return message.reply("Please specify reason");
        }

        setTimeout(function () {
            // message.member.send(`${reason}`);
            // bot.users.cache.get('id').send(`${reason}`)
            return message.reply(`${reason}`)
        }, ms(time));
    }    
    console.log("time:" + ms(time))
    console.log("reason:" + reason)
})

bot.login(process.env.TOKEN);