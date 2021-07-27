const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.info(`${bot.user.tag} is now online! (hpwash.js)`); // BOT online
})

const prefix = 'c.';
bot.on('message', message => {
    var vote = 8000;
    var aprNX = 3100;
    var aprMeso = 11000000;

    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var job = args[0];
    var level = args[1];
    var cleanMP = args[2];

    if (command === 'hpwash') {
        // if empty
        if (!args.length) {
            return
        }
        else if ((level >= 1 && level <= 200) && (cleanMP >= 1 && cleanMP <= 30000)) {
            switch (job.toLowerCase()) {
                case 'beginner':
                    var minHPGain = 8;
                    var avgHPGain = 10;
                    var mpLoss = 8;
                    var minMP = (10 * level) + 2;
                    var extraMP = cleanMP - minMP
                    var numOfWash = Math.floor(extraMP / mpLoss);
                    var minHPGained = numOfWash * minHPGain;
                    var avgHPGained = numOfWash * avgHPGain;
                    break;

                case 'spearman':
                case 'dk':
                case 'drk':
                    var minHPGain = 50;
                    var avgHPGain = 52;
                    var mpLoss = 4;
                    var minMP = (4 * level) + 156;
                    var extraMP = cleanMP - minMP
                    var numOfWash = Math.floor(extraMP / mpLoss);
                    var minHPGained = numOfWash * minHPGain;
                    var avgHPGained = numOfWash * avgHPGain;
                    break;

                case 'fighter':
                case 'crusader':
                case 'hero':
                    var minHPGain = 50;
                    var avgHPGain = 52;
                    var mpLoss = 4;
                    var minMP = (4 * level) + 56;
                    var extraMP = cleanMP - minMP
                    var numOfWash = Math.floor(extraMP / mpLoss);
                    var minHPGained = numOfWash * minHPGain;
                    var avgHPGained = numOfWash * avgHPGain;
                    break;

                case 'page':
                case 'wk':
                case 'pala':
                case 'paladin':
                    var minHPGain = 50;
                    var avgHPGain = 52;
                    var mpLoss = 4;
                    var minMP = (4 * level) + 156;
                    var extraMP = cleanMP - minMP
                    var numOfWash = Math.floor(extraMP / mpLoss);
                    var minHPGained = numOfWash * minHPGain;
                    var avgHPGained = numOfWash * avgHPGain;
                    break;

                case 'archer':
                case 'hunter':
                case 'ranger':
                case 'bowmaster':
                case 'bm':
                case 'crossbowman':
                case 'sniper':
                case 'marksman':
                case 'mm':
                    var minHPGain = 16;
                    var avgHPGain = 18;
                    var mpLoss = 12;
                    var minMP = (14 * level) + 148;
                    var extraMP = cleanMP - minMP
                    var numOfWash = Math.floor(extraMP / mpLoss);
                    var minHPGained = numOfWash * minHPGain;
                    var avgHPGained = numOfWash * avgHPGain;
                    break;

                case 'thief':
                case 'assassin':
                case 'sin':
                case 'hermit':
                case 'nightlord':
                case 'nl':
                case 'bandit':
                case 'chiefbandit':
                case 'cb':
                case 'shadower':
                case 'shad':
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

                    if (cleanMP < minMP) {
                        return message.reply(
                            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
                        )
                    } else {
                        return message.reply(
                            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                            `You can wash ${numOfWash.toLocaleString()} times.\n` +
                            `**If you use Fresh APs:**👍\n` +
                            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                            `**If you use APRs:**\n` +
                            `You can gain at least ${Math.floor(minHPGainedAPR).toLocaleString()} HP and on average ${Math.floor(avgHPGainedAPR).toLocaleString()} HP.\n` +
                            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
                        )
                    }

                case 'brawler':
                case 'marauder':
                case 'buccaneer':
                case 'bucc':
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

                    if (cleanMP < minMP) {
                        return message.reply(
                            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
                        )
                    } else {
                        return message.reply(
                            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                            `You can wash ${numOfWash.toLocaleString()} times.\n` +
                            `**If you use Fresh APs:**\n` +
                            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                            `**If you use APRs:**👍\n` +
                            `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
                            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
                        )
                    }

                case 'gunslinger':
                case 'outlaw':
                case 'corsair':
                case 'sair':
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

                    if (cleanMP < minMP) {
                        return message.reply(
                            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
                        )
                    } else {
                        return message.reply(
                            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                            `You can wash ${numOfWash.toLocaleString()} times.\n` +
                            `**If you use Fresh APs:**\n` +
                            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
                            `**If you use APRs:**👍\n` +
                            `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
                            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
                        )
                    }

                case 'magician':
                case 'f/p':
                case 'i/l':
                case 'am':
                case 'cleric':
                case 'priest':
                case 'bishop':
                case 'bs':
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

                    if (cleanMP < minMP) {
                        return message.reply(
                            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
                        )
                    } else {
                        return message.reply(
                            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                            '**If your `Improved MaxMP Increase skill` is level 0:**\n' +
                            `You can wash ${numOfWashS0.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS0).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS0).toLocaleString()} HP.\n` +
                            `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS0).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS0 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS0).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)\n` +
                            '**If your `Improved MaxMP Increase skill` is level 10:**\n' +
                            `You can wash ${numOfWashS10.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS10).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS10).toLocaleString()} HP.\n` +
                            `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS10).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS10 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS10).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
                        )
                    }
            }
        }
        else {
            return message.reply('Incorrect format!\nCorrect format: c.hpwash `job` `level` `clean mp`')
        }
        if (cleanMP < minMP) {
            return message.reply(
                `Your MP is below the minimum MP for your job. Please check your Clean MP again`
            )
        } else {
            return message.reply(
                `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
                `You can wash ${numOfWash.toLocaleString()} times and gain at least ${Math.floor(minHPGained).toLocaleString()} HP and on average ${Math.floor(avgHPGained).toLocaleString()} HP.\n` +
                `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
            )
        }
    }
})
bot.login(process.env.TOKEN);