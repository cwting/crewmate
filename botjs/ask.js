const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (ask.js)`); // BOT online
});

const prefix = "c.";
bot.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ask") {
        if (!args.length) {
            return
        }
        var question = args[0];
        if (!question) {
            return message.reply("Please ask your question.");
        }
        else {
            const badwordsArray = ["gay", "slut", "babi", "cb", "ccb", "bitch", "fuck"];
            const askArray = ["Hell yes!", "Yes.", "Probably.", "Maybe.", "Probably not.", "No.", "Hell no!", "Uhm...", "I don't know, what do you think? 🤔", "I hope not!", "Hmm..."];
            var askArrayNum = Math.floor(Math.random() * askArray.length);
            if (badwordsArray.some(word => message.toString().toLowerCase().includes(word))) {
                return message.reply(
                    `I will not be answering your question because it contains bad words! 😠`
                )
            }
            else {
                return message.reply(
                    `${askArray[askArrayNum]}\n` +
                    "Disclaimer: Please don't take Crewmate's answer too seriously, he/she/it is a skem.\n-Bell"
                )
            }
        }
    }
})

bot.login(process.env.TOKEN);