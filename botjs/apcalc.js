const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (apcalc.js)`); // BOT online
});

bot.on('message', message => {    
    
    if (!message.content.startsWith("C.") || (!message.content.startsWith("c.") || message.author.bot)) return;

    const args = message.content.slice(2).trim().split(/ +/);
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
            // 1st and 2nd job
            if (level < 70) {
                var userAP = 4 + (level * 5);
            }
            // 3rd job
            else if (level >= 70 && level < 120) {
                var userAP = 4 + (level * 5) + 5;
            }
            // 4th job
            else {
                var userAP = 4 + (level * 5) + 10;
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