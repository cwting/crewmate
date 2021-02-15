const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (hpwash.js)`); // BOT online
})

const prefix = "c.";
bot.on('message', message => {
    var vote = 8000;
    var aprNX = 3100;
    var aprMeso = 12500000;
    var minHPGain, avgHPGain, mpLoss, minMP, extraMP, numOfWash, minHPGained, avgHPGained = 0;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var level = args[1];
    var cleanMP = args[2];
    // c.washes <job> <level> <mp>

    if (command === 'hpwash') {
        // if empty
        if (!args.length) {
            return
        }
        // beginner
        else if (args[0] === 'beginner' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 8;
            var avgHPGain = 10;
            var mpLoss = 8;
            var minMP = (10 * level) + 2;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // spearman
        else if (args[0] === 'spearman' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 50;
            var avgHPGain = 52;
            var mpLoss = 4;
            var minMP = (4 * level) + 156;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // fighter 
        else if (args[0] === 'fighter' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 50;
            var avgHPGain = 52;
            var mpLoss = 4;
            var minMP = (4 * level) + 56;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // page
        else if (args[0] === 'page' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 50;
            var avgHPGain = 52;
            var mpLoss = 4;
            var minMP = (4 * level) + 56;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // archers
        else if (args[0] === 'archer' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 16;
            var avgHPGain = 18;
            var mpLoss = 12;
            var minMP = (14 * level) + 148;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // thieves
        else if (args[0] === 'thief' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 20;
            var avgHPGain = 22;
            var mpLoss = 12;
            var minMP = (14 * level) + 148;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // brawler
        else if (args[0] === 'brawler' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 36;
            var avgHPGain = 38;
            var mpLoss = 16;
            var minMP = (18 * level) + 111;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // gunslinger
        else if (args[0] === 'gunslinger' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 16;
            var avgHPGain = 18;
            var mpLoss = 16;
            var minMP = (18 * level) + 111;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = Math.floor(numOfWash * minHPGain);
            var avgHPGained = Math.floor(numOfWash * avgHPGain);
        }
        // magicians
        else if (args[0] === 'magician') {// && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            return message.channel.send("i cannot do mage D:")
        }
        else {
            return message.reply("Incorrect format!")
        }
        message.reply(
            `Hi ${message.author.id}!\n` +
            `You have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times and gain at least ${Math.floor(minHPGained).toLocaleString()} HP and on average ${Math.floor(avgHPGained).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX(${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos(${aprMeso.toLocaleString()} / AP Reset)`)
    }
})
bot.login(process.env.TOKEN);