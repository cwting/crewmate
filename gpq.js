const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (gpq.js)`); // BOT online
});

var items = ['s', 'm', 'w', 'f'] // scroll, medal, wine, food
var tryNo = 1;
var maxTryNo = 7;

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const gpqmsg = new Discord.MessageEmbed()
        .setColor("#DDDDDD")
        .setTitle("GPQ Stage 3 Practice")
        .setDescription(
            "Try out GPQ's Stage 3, Fountain of the Wiseman.\n" +
            "Enter in the following format:\n" +
            "`c.gpq [1] [2] [3] [4]`\n" +
            "`[1]/[2]/[3]/[4]:`\n" +
            "`s - scroll`\n`m - medal`\n`w - wine`\n`f - food`"
        )

    if (command === "gpq") {
        // answers
        var a1 = items[Math.floor(Math.random() * 4)];
        var a2 = items[Math.floor(Math.random() * 4)];
        var a3 = items[Math.floor(Math.random() * 4)];
        var a4 = items[Math.floor(Math.random() * 4)];
        answer = [a1, a2, a3, a4];
        console.log("answer: " + answer)

        // if empty
        if (!args.length) {
            return
        }
        let filter = m => m.author.id === message.author.id
        message.channel.send(gpqmsg).then(() => {
            message.channel.awaitMessages(filter, {
                max: 7,
                time: 600000,
                errors: ['time']
            })
                .then(message => {
                    message = message.first();
                    // solver(message);
                    // if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                    //     message.channel.send(`Deleted`)
                    // } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
                    //     message.channel.send(`Terminated`)
                    // } else {
                    //     message.channel.send(`Terminated: Invalid Response`)
                    // }
                    message.channel.send("meow")
                    while (tryNo <= maxTryNo) {
                        // guesses
                        var g1 = args[0];
                        var g2 = args[1];
                        var g3 = args[2];
                        var g4 = args[3];
                        var guesses = [g1, g2, g3, g4];
                        console.log("guesses: " + guesses)
                        var tempAnswer = [a1, a2, a3, a4];

                        var correctPcorrectI = 0;
                        var wrongPcorrectI = 0;
                        var wrongPwrongI = 0;

                        for (i = 0; i < tempAnswer.length; i++) {
                            if (guesses[i] == tempAnswer[i]) {
                                correctPcorrectI += 1;
                            }
                        }
                        for (i = 0; i < tempAnswer.length; i++) {
                            for (j = 0; j < tempAnswer.length; j++) {
                                if (i !== j) {
                                    if (guesses[i] == tempAnswer[j]) {
                                        wrongPcorrectI += 1;
                                    }
                                }
                            }
                        }
                        for (i = 0; i < tempAnswer.length; i++) {
                            for (j = 0; j < tempAnswer.length; j++) {
                                if (i !== j) {
                                    if (guesses[i] != tempAnswer[j]) {
                                        wrongPwrongI += 1;
                                    }
                                }
                            }
                        }

                        if (wrongPwrongI >= 1 && wrongPwrongI <= 4) {
                            message.channel.send(
                                `${wrongPwrongI} vassals have received unknown offering(s)\n` +
                                `This is attempt #${tryNo}`
                            )
                        }
                        else if ((wrongPcorrectI >= 1 && wrongPcorrectI <= 4) && (wrongPwrongI >= 1 && wrongPwrongI <= 4)) {
                            message.channel.send(
                                `${wrongPcorrectI} vassals are pleased with their offering(s)\n` +
                                `${wrongPwrongI} vassals have received unknown offering(s)\n` +
                                `This is attempt #${tryNo}`

                            )
                        }
                        else if (correctPcorrectI == 4) {
                            message.reply("CLEAR!")
                        }
                    }
                })
                .catch(collected => {
                    message.channel.send('Timeout');
                });
        })
    }
})



bot.login(process.env.TOKEN);