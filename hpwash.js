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

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var level = args[1];
    var cleanMP = args[2];

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
        // thief
        else if (args[0] === 'thief' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var mpLoss = 12;
            var minMP = (14 * level) + 148;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            // apr
            var minHPGainAPR = 16;
            var avgHPGainAPR = 18;
            var minHPGainedAPR = numOfWash * minHPGainAPR;
            var avgHPGainedAPR = numOfWash * avgHPGainAPR;
            // fresh
            var minHPGainFresh = 20;
            var avgHPGainFresh = 22;
            var minHPGainedFresh = numOfWash * minHPGainFresh;
            var avgHPGainedFresh = numOfWash * avgHPGainFresh;

            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `You can wash ${numOfWash.toLocaleString()} times.\n` +
                `**If you use APRs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedAPR).toLocaleString()} HP and on average ${Math.floor(avgHPGainedAPR).toLocaleString()} HP.\n` +
                `**If you use Fresh APs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX(${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos(${aprMeso.toLocaleString()} / AP Reset)`
            )
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
        else if (args[0] === 'magician' && (args[1] > 1 && args[1] <= 200) && (args[2] > 1 && args[2] <= 30000)) {
            var minHPGain = 10;
            var avgHPGain = 15;
            var mpLossS0 = 20;
            var mpLossS10 = 30;
            var minMP = (14 * level) + 148;
            var extraMP = cleanMP - minMP
            // Improved MapMP = 0
            var numOfWashS0 = Math.floor(extraMP / mpLossS0);
            var minHPGainedS0 = numOfWashS0 * minHPGain;
            var avgHPGainedS0 = numOfWashS0 * avgHPGain;
            // Improved MapMP = 10
            var numOfWashS10 = Math.floor(extraMP / mpLossS10);
            var minHPGainedS10 = numOfWashS10 * minHPGain;
            var avgHPGainedS10 = numOfWashS10 * avgHPGain;

            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `**If Improved MaxMP Increase skill is level 0:**\n` +
                `You can wash ${numOfWashS0.toLocaleString()} times\n and gain at least ${Math.floor(minHPGainedS0).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS0).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWashS0).toLocaleString()} NX(${Math.ceil(aprNX * numOfWashS0 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS0).toLocaleString()} mesos(${aprMeso.toLocaleString()} / AP Reset)\n` +
                `**If Improved MaxMP Increase skill is level 10:**\n` +
                `You can wash ${numOfWashS10.toLocaleString()} times\n and gain at least ${Math.floor(minHPGainedS10).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS10).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWashS10).toLocaleString()} NX(${Math.ceil(aprNX * numOfWashS10 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS10).toLocaleString()} mesos(${aprMeso.toLocaleString()} / AP Reset)`
            )
        }
        else {
            return message.reply("Incorrect format!")
        }
        message.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times and gain at least ${Math.floor(minHPGained).toLocaleString()} HP and on average ${Math.floor(avgHPGained).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX(${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos(${aprMeso.toLocaleString()} / AP Reset)`
        )
    }
})
bot.login(process.env.TOKEN);