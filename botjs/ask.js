const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (ask.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ask') {
        if (!args.length) {
            return
        }
        var question = args[0];
        if (!question) {
            return message.reply("Please ask your question.");
        }
        else {
            const askArray = ['Hell yes!', 'Yes.', 'Probably.', 'Maybe.', 'Probably not.', 'No.', 'Hell no!', 'Uhm...'];
            var askArrayNum = Math.floor(Math.random() * 8);
            message.reply(
                `${askArray[askArrayNum]}\n` +
                "Disclaimer: Please don't take Crewmate's answer too seriously, he/she/it is a skem.\n- Bell"
            )
        }
    }
})

bot.login(process.env.TOKEN);