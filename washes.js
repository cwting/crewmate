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
    // c.washes <job> <level> <mp>

    if (command === 'hpwash') {
        if (!args.length) {
            return
        }
        // HP gain from APR
        else if (args[0] === 'spearman' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var level = args[1];
            var cleanMP = args[2];
            var hpGain = 49;
            var mpLoss = 4;
            var minMP = 148 + (level * 6);
            var extraMP = cleanMP - minMP
            var numOfWash = extraMP / mpLoss;
            var hpGained = numOfWash * hpGain;

            message.reply(`You have ${extraMP.toLocaleString()} extra MP.\nYou can wash ${numOfWash.toLocaleString()} times and gain an approximate of ${hpGained.toLocaleString()} HP.\nThe cost of AP resets is: ${(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()}/ AP Reset)`)

            //You have 113 extra MP. You can wash 28 times to gain at least 1,400 HP and on average 1,456 HP. The cost of AP Reset is 86,800 NX (11 days of voting) or 448,000,000 mesos (16m/AP Reset).
        }
        else if (args[0] === 'fighter') {
            message.channel.send('fighter wash entered!');
        }
        else if (args[0] === 'page') {
            message.channel.send('page wash entered!');
        }
        else if (args[0] === 'archer') {
            message.channel.send('archer wash entered!');
        }
        else if (args[0] === 'thief') {
            message.channel.send('thief wash entered!');
        }
        else if (args[0] === 'brawler') {
            message.channel.send('brawler wash entered!');
        }
        else if (args[0] === 'gunslinger') {
            message.channel.send('gunslinger wash entered!');
        }
        else if (args[0] === 'magician') {
            message.channel.send('magician wash entered!');
        }
    }

})

bot.login(process.env.TOKEN);