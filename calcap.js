const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (calcap.js)`); // BOT online
});


const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var level = args[0];
    var str = args[1];
    var dex = args[2];
    var int = args[3];
    var luk = args[4];

    if (command === 'ap') {
        // if empty
        if (!args.length) {
            return
        }
        else if ((level >= 1 && level <= 200) && (str >= 4 && str <= 999) && (dex >= 4 && dex <= 999) && (int >= 4 && int <= 999) && (luk >= 4 && luk <= 999)) {
            userAP = 9 + (level * 5);
            unusedAP = userAP - str - dex - int - luk + 16;
        }
        else {
            return message.reply("Incorrect format! AP")
        }
        message.reply(`\nYou have ${unusedAP} AP unassigned or assigned to HP/MP`)
    }
})

bot.login(process.env.TOKEN);