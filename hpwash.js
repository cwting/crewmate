const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (hpwash.js)`); // BOT online
})

const prefix = "c." || "C.";
bot.on('message', message => {
    var vote = 8000;
    var aprNX = 3100;
    var aprMeso = 12500000;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var job = args[0].toLowerCase();
    var level = args[1];
    var cleanMP = args[2];

    if (command === 'hpwash') {
        // if empty
        if (!args.length) {
            return
        }
        // beginner
        else if (job === 'beginner' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
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
        else if (job === 'spearman' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
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
        else if (job === 'fighter' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
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
        else if (job === 'page' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
            var minHPGain = 50;
            var avgHPGain = 52;
            var mpLoss = 4;
            var minMP = (4 * level) + 156;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            var minHPGained = numOfWash * minHPGain;
            var avgHPGained = numOfWash * avgHPGain;
        }
        // archer
        else if (job === 'archer' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
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
        else if (job === 'thief' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
            var mpLoss = 12;
            var minMP = (14 * level) + 148;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            // fresh
            var minHPGainFresh = 20;
            var avgHPGainFresh = 22;
            var minHPGainedFresh = numOfWash * minHPGainFresh;
            var avgHPGainedFresh = numOfWash * avgHPGainFresh;
            // apr
            var minHPGainAPR = 16;
            var avgHPGainAPR = 18;
            var minHPGainedAPR = numOfWash * minHPGainAPR;
            var avgHPGainedAPR = numOfWash * avgHPGainAPR;

            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `You can wash ${numOfWash.toLocaleString()} times.\n` +
                `**If you use Fresh APs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                `**If you use APRs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedAPR).toLocaleString()} HP and on average ${Math.floor(avgHPGainedAPR).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} / AP Reset)`
            )
        }
        // brawler
        else if (job === 'brawler' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
            var mpLoss = 16;
            var minMP = (18 * level) + 111;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            // fresh
            var minHPGainFresh = 36;
            var avgHPGainFresh = 38;
            var minHPGainedFresh = numOfWash * minHPGainFresh;
            var avgHPGainedFresh = numOfWash * avgHPGainFresh;
            // apr
            var HPGainAPR = 40;
            var HPGainedAPR = numOfWash * HPGainAPR;

            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `You can wash ${numOfWash.toLocaleString()} times.\n` +
                `**If you use Fresh APs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                `**If you use APRs:**\n` +
                `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} / AP Reset)`
            )
        }
        // gunslinger
        else if (job === 'gunslinger' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
            var mpLoss = 16;
            var minMP = (18 * level) + 111;
            var extraMP = cleanMP - minMP
            var numOfWash = Math.floor(extraMP / mpLoss);
            // fresh
            var minHPGainFresh = 16;
            var avgHPGainFresh = 18;
            var minHPGainedFresh = numOfWash * minHPGainFresh;
            var avgHPGainedFresh = numOfWash * avgHPGainFresh;
            // apr
            var HPGainAPR = 20;
            var HPGainedAPR = numOfWash * HPGainAPR;

            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `You can wash ${numOfWash.toLocaleString()} times.\n` +
                `**If you use Fresh APs:**\n` +
                `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                `**If you use APRs:**\n` +
                `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} / AP Reset)`
            )
        }
        // magician
        else if (job === 'magician' && (level > 1 && level <= 200) && (cleanMP > 1 && cleanMP <= 30000)) {
            var minHPGain = 10;
            var avgHPGain = 15;
            var mpLossS0 = 20;
            var mpLossS10 = 30;
            var minMP = (22 * level) + 488;
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
                "**If your `Improved MaxMP Increase skill` is level 0:**\n" +
                `You can wash ${numOfWashS0.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS0).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS0).toLocaleString()} HP.\n` +
                `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS0).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS0 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS0).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)\n` +
                "**If your `Improved MaxMP Increase skill` is level 10:**\n" +
                `You can wash ${numOfWashS10.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS10).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS10).toLocaleString()} HP.\n` +
                `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS10).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS10 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS10).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
            )
        }
        else {
            return message.reply("Incorrect format!\nCorrect format: c.hpwash `[job]` `[level]` `[mp]`")
        }
        message.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times and gain at least ${Math.floor(minHPGained).toLocaleString()} HP and on average ${Math.floor(avgHPGained).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
        )
    }
})
bot.login(process.env.TOKEN);