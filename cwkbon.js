const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const bot = new Client()

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (cwkbon.js)`); // BOT online
});

bot.on('message', message => {
    if (message.content === "c.cwkbon") {
        let cwkbon = new Menu(message.channel, message.author.id, [
            // 3 man bon
            {
                name: "3-man-bonus",
                content: new MessageEmbed({
                    title: "3 MAN BONUS",
                    description: "Map for 3 man bonus split"
                })
                    .setColor("#DDDDDD")
                    .setImage("https://i.ibb.co/TB1mRbs/cwk-3manbon.png"),
                reactions: {
                    '3️⃣': "3-man-bonus",
                    '4️⃣': "4-man-bonus",
                    '5️⃣': "5-man-bonus",
                    '6️⃣': "6-man-bonus"
                }
            },
            // 4 man bon
            {
                name: "4-man-bonus",
                content: new MessageEmbed({
                    title: "4 MAN BONUS",
                    description: "Map for 4 man bonus split"
                })
                    .setColor("#DDDDDD")
                    .setImage("https://i.ibb.co/yQZsNgb/cwk-4manbon.png"),
                reactions: {
                    '3️⃣': "3-man-bonus",
                    '4️⃣': "4-man-bonus",
                    '5️⃣': "5-man-bonus",
                    '6️⃣': "6-man-bonus"
                }
            },
            // 5 man bon
            {
                name: "5-man-bonus",
                content: new MessageEmbed({
                    title: "5 MAN BONUS",
                    description: "Map for 5 man bonus split"
                })
                    .setColor("#DDDDDD")
                    .setImage("https://i.ibb.co/VqPpzyg/cwk-5manbon.png"),
                reactions: {
                    '3️⃣': "3-man-bonus",
                    '4️⃣': "4-man-bonus",
                    '5️⃣': "5-man-bonus",
                    '6️⃣': "6-man-bonus"
                }
            },
            // 6 man bon
            {
                name: "6-man-bonus",
                content: new MessageEmbed({
                    title: "6 MAN BONUS",
                    description: "Map for 6 man bonus split"
                })
                    .setColor("#DDDDDD")
                    .setImage("https://i.ibb.co/StY5LC3/cwk-6manbon.png"),
                reactions: {
                    '3️⃣': "3-man-bonus",
                    '4️⃣': "4-man-bonus",
                    '5️⃣': "5-man-bonus",
                    '6️⃣': "6-man-bonus"
                }
            }
        ], 600000)
        cwkbon.start()
    }
})

bot.login(process.env.TOKEN);