const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`${bot.user.tag} is now online! (gach2.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {

    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'gach2') {
        // if empty
        if (!args.length) {
            return
        }
        else {
            var locations = args.join(" ").slice();
            const gachLocationArray = locations.split(' ');
            var gachLocationArrayNum = Math.floor(Math.random() * gachLocationArray.length);
            return message.reply(
                `You have selected: ${locations}.\n` +
                `From these locations... I choose...... ${gachLocationArray[gachLocationArrayNum]}` +
                "Disclaimer: Crewmate is not to be held accountable for any 'bad gach run'. uwu"
            )
        }

    }
})

bot.login(process.env.TOKEN);