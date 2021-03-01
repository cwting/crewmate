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
    // answers
    var a1 = items[Math.floor(Math.random() * 4)];
    var a2 = items[Math.floor(Math.random() * 4)];
    var a3 = items[Math.floor(Math.random() * 4)];
    var a4 = items[Math.floor(Math.random() * 4)];
    answer = [a1, a2, a3, a4];
    console.log("answer: " + answer)

    if (command === "gpq") {
        // if empty
        if (!args.length) {
            return
        }
        else if (args[0].toLowerCase() === "start") {
            message.reply("inside")
        }
    }
    // while (tryNo <= maxTryNo) {
    //     // guesses
    //     var g1 = args[0].toLowerCase();
    //     var g2 = args[1].toLowerCase();
    //     var g3 = args[2].toLowerCase();
    //     var g4 = args[3].toLowerCase();
    //     guesses = [g1, g2, g3, g4];
    //     console.log("guesses: " + guesses)
    //     tryNo += 1;
    //     var tempAnswer = [a1, a2, a3, a4];
    //     console.log("tempAnswer: " + tempAnswer)

    //     var correctPcorrectI = 0;
    //     var wrongPcorrectI = 0;
    //     for (i = 0; i < tempAnswer.length; i++) {
    //         if (guesses[i] == tempAnswer[i]) {
    //             correctPcorrectI += 1;
    //         }
    //     }
    //     for (i = 0; i < tempAnswer.length; i++) {
    //         for (j = 0; j < tempAnswer.length; j++) {
    //             if (i !== j) {
    //                 if (guesses[i] == tempAnswer[j]) {
    //                     wrongPcorrectI += 1;
    //                 }
    //             }
    //         }
    //     }

    //     if (correctPcorrectI = 4) {
    //         message.reply("CLEAR!")
    //     }
    // }
})


bot.login(process.env.TOKEN);