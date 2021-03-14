const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const bot = new Client()

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (apq.js)`); // BOT online
});

bot.on('message', message => {
    if (message.content === "c.apq") {
        let apq = new Menu(message.channel, message.author.id, [
            {
                name: "APQ1",
                content: new MessageEmbed({
                    title: "APQ Guide #1"
                })
                    .setColor("#223DDD")
                    .setImage("https://i.ibb.co/LN00p9q/apq1.jpg"),
                reactions: {
                    '1️⃣': 'APQ1',
                    '2️⃣': 'APQ2'
                }
            },
            {
                name: "APQ2",
                content: new MessageEmbed({
                    title: "APQ Guide #2",
                })
                    .setColor("#223DDD")
                    .setImage("https://i.ibb.co/60XCwz7/apq2.png"),
                reactions: {
                    '1️⃣': 'APQ1',
                    '2️⃣': 'APQ2'
                }
            }
        ], 600000)
        apq.start()
    }
})

bot.login(process.env.TOKEN);