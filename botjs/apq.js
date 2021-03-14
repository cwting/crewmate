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
                    .setDescription("You may choose your preferred APQ guide by changing the image with the provided reactions.")
                    .setColor("#223DDD")
                    .setImage("https://i.ibb.co/LN00p9q/apq1.jpg")
                    .setFooter("Image From:\nhttps://mapleroyals.com/forum/threads/amoria-party-quest-apq.31743/"),
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
                    .setDescription("You may choose your preferred APQ guide by changing the image with the provided reactions.")
                    .setColor("#223DDD")
                    .setImage("https://i.ibb.co/1JDzZxQ/apq2.png")
                    .setFooter(
                        "Image Reference From:\nhttps://mapleroyals.com/forum/threads/comprehensive-apq-guide-updated-feb-2021.172942/#stage2" +
                        "Image Edited By: Gel"
                    ),
                reactions: {
                    '1️⃣': 'APQ1',
                    '2️⃣': 'APQ2'
                }
            }
        ], 60000)
        apq.start()
    }
})

bot.login(process.env.TOKEN);