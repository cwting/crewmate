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
        var locations = args[0];
        if (!locations) {
            return message.reply("Please specify locations~");
        }
        else {
            const gachLocationArray = locations.split(' ');
            var gachLocationArrayNum = Math.floor(Math.random() * gachLocationArray.length);
        }
        message.reply(
            `You have selected: ${gachLocationArray}.\n` +
            `From these locations... I choose......\n` +
            `${gachLocationArray[gachLocationArrayNum]}!\n` +
            "Disclaimer: Crewmate is not to be held accountable for any 'bad gach run'. uwu"
        )
    }
})

bot.login(process.env.TOKEN);