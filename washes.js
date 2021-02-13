const Discord = require('discord.js');
const bot = new Discord.Client();

var vote = 8000;
var aprNX = 3100;
var aprMeso = 12500000;

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (washes.js)`); // BOT online
})

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var level = args[1];
    var cleanMP = args[2];
    // c.washes <job> <level> <mp>

    if (command === 'hpwash') {
        // if empty
        if (!args.length) {
            message.reply("Please enter your level and clean MP.")
        }
        // if invalid parameter
        else if (args[0] === '' || (args[1] < 1 && args[1] > 200) || (args[2] < 1 && args[2] > 30000)) {
            message.reply("Invalid job/level/clean MP.")
        }
        // beginner
        else if (args[0] === 'beginner' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('beginner wash entered!');
        }
        // warriors
        else if (args[0] === 'spearman' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 50;
            var avgHPGain = 52;
            var mpLoss = 4;
            var minMP = (4 * level) + 156;
            var extraMP = cleanMP - minMP
            var numOfWash = extraMP / mpLoss;
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;

            message.reply(`You have ${extraMP.toLocaleString()} extra MP.\nYou can wash ${numOfWash.toLocaleString()} times and gain at least ${minHPGained.toLocaleString()} and on average ${avgHPGained.toLocaleString()}.\nThe cost of AP resets is: ${(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()}/ AP Reset)`)
        }
        else if (args[0] === 'fighter' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('fighter wash entered!');
        }
        else if (args[0] === 'page' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('page wash entered!');
        }
        // archers
        else if (args[0] === 'archer' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('archer wash entered!');
        }
        // thieves
        else if (args[0] === 'thief' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('thief wash entered!');
        }
        // brawler
        else if (args[0] === 'brawler' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('brawler wash entered!');
        }
        // gunslinger
        else if (args[0] === 'gunslinger' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('gunslinger wash entered!');
        }
        // magicians
        else if (args[0] === 'magician' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            message.channel.send('magician wash entered!');
        }
        else {
            message.reply("Incorrect format!")
        }
    }

})

bot.login(process.env.TOKEN);