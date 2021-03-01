const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (gpq.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    console.log("args: " + args)
    console.log("command: " + command)
    var tryNo = 1;
    var maxTryNo = 7;
    var items = ['s', 'm', 'w', 'f'] // scroll, medal, wine, food

    var g1 = args[1];
    var g2 = args[2];
    var g3 = args[3];
    var g4 = args[4];

    if (command === "gpq" && args[0] === "start") {
        // if empty
        if (!args.length) {
            return
        }
        // answers
        var a1 = items[Math.floor(Math.random() * 4)];
        var a2 = items[Math.floor(Math.random() * 4)];
        var a3 = items[Math.floor(Math.random() * 4)];
        var a4 = items[Math.floor(Math.random() * 4)];
        answer = [a1, a2, a3, a4];
        console.log("answer: " + answer)

        while (tryNo <= maxTryNo) {
            message.channel.send("inside???? xd")
            // guesses
            guesses = [g1, g2, g3, g4];
            console.log("guesses: " + guesses)
            var tempAnswer = [a1, a2, a3, a4];
            console.log("tempAnswer: " + tempAnswer)

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

            tryNo += 1;
        }
    }
})


bot.login(process.env.TOKEN);