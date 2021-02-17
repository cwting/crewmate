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
            if (level >= 70 && level < 120) {
                var userAP = 9 + (level * 5) + 5;
            }
            else if (level >= 120) {
                var userAP = 9 + (level * 5) + 10;
            }
            else {
                var userAP = 9 + (level * 5);
            }
            var unusedAP = userAP - str - dex - int - luk + 16;
            if (unusedAP < 0) {
                return message.reply("\nYour AP that is assigned to HP/MP or unassigned is negative. Please check that your str/dex/int/luk is not inclusive of any stat added by equipments.")
            }
        }
        else {
            return message.reply("Incorrect format!\nCorrect format: c.ap `[level]` `[str]` `[dex]` `[int]` `[luk]`")
        }
        message.reply(`\nYou have ${unusedAP} AP unassigned or assigned to HP/MP`)
    }
})

bot.login(process.env.TOKEN);