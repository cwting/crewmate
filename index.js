var gmjr = require('./gmjr.js');
var cwkbon = require('./cwkbon.js');
var washes = require("./hpwash.js");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (index.js)`); // BOT online
    bot.user.setActivity("c.help") // set BOT's status
});

const helpmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setThumbnail('https://i.imgur.com/HPZg2QE.png')
    .setTitle('Crewmate Commands')
    .setDescription('Hello! \\o/\nI am Crewmate, a BOT made by Crew\'s members for Crew!')
    .addFields(
        { name: 'About Crew', value: '`c.about`', inline: false },
        { name: 'About Crew\'s GM/JRs', value: '`c.gmjr`', inline: false },
        { name: 'HP Washing', value: '`c.hpwash`', inline: false },
        { name: 'Crimsonwood Keep\'s Bonus Stage Split', value: '`c.cwkbon`', inline: false },
        { name: 'Zakum Pre-Quest Stage 1', value: '`c.zak`', inline: false },
        { name: 'APQ Stage 2', value: '`c.apq`', inline: false },
        { name: 'Leeching Guide', value: '`c.leech`', inline: false },
    )

const aboutmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setThumbnail('https://i.imgur.com/HPZg2QE.png')
    .setTitle('About Crew')
    .setDescription("We are a trust-based family where help is always available and nobody gets left behind. 😊")

const gmjrmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setTitle('Crew\'s Guild Master/Junior Masters')
    .setDescription(
        "Enter the name of the member you're interested in in the following format:\n" +
        "**c.gmjr-<name>**\n" +
        "- Nivi\n" +
        "- Naomi\n" +
        "- Marc\n" +
        "- Antonio\n" +
        "- Bell\n" +
        "- Piet\n" +
        "- Gel\n" +
        "- Lior\n" +
        "*will add more people as we go :)"
    )

const hpwashmsg = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('HP Washing')
    .setDescription(
        "Enter your job, level and clean MP in the following format:\n" +
        "c.hpwash [job] [level] [mp]\n" +
        "`[job]`: beginner, spearman, fighter, page, archer, thief, brawler, gunslinger, magician\n" +
        "`[level]`: 1 - 200\n" +
        "`[mp]`: 1 - 30000 (not inclusive of MP added by equipments)"
    )
    .setFooter("Many thanks to Naomi, Antonio, Nivi and Marc for helping out with this section 🤍\nAnd let me know if there's any error in calculations @Ting#4335")

const apqmsg = new Discord.MessageEmbed()
    .setColor("#223DDD")
    .setTitle('APQ Stage 2')
    .setImage("https://i.imgur.com/GrZbctI.jpg")
    .setFooter("Image from:\nhttps://mapleroyals.com/forum/threads/amoria-party-quest-apq.31743/")

const zakmsg = new Discord.MessageEmbed()
    .setColor("#71502E")
    .setTitle("Zakum Pre-Quest Stage 1")
    .setImage("https://i.imgur.com/juGsxVp.png")
    .setDescription(
        "*In order to gain access to Area 16, you need to go through room 10 or 7 until you reach Area 16.\n" +
        "11-1 (chest)\n" +
        "9-2 (chest)\n" +
        "14-1 (chest)\n" +
        "4-2 (rock)\n" +
        "16-3 (chest)\n" +
        "16-2 (chest)\n" +
        "16-5 (rock)"
    )
    .setFooter("Image from:\nhttps://mapleroyals.com/forum/threads/zakum-prerequisite-guide.10723/")

const leechmsg = new Discord.MessageEmbed()
    .setColor("#DDDDDD")
    .setTitle("Leeching Guide")
    .setDescription(
        "```CSS\nLv 10-20: Bubbling [Kerning City Subway: Line 1 Area <1>]\n```\n" +
        "```CSS\nLv 20-25: Wild Boar [Hidden Street: The Land of WildBoar I]\n```\n" +
        "```CSS\nLv 25-30: Brown Teddy, Pink Teddy [Ludibrium: Terrace Hall]\n```\n" +
        "```CSS\nLv 30-36: Jr. Wraith [Kerning Line 1 Area 2]\n```\n" +
        "```CSS\nLv 36-41: Platoon Chronos [Ludibrium: The Path of Time <1>]\n```\n" +
        "```CSS\nLv 41-43: Master Chronos [Ludibrium: The Path of Time <4>]\n```\n" +
        "```CSS\nLv 43-51: Wraith [Kerning City Subway: Line 1 Area <4>]\n```\n" +
        "```CSS\nLv 51-53: Oly Oly, Dark Fission [Malaysia: Muddy Banks 1]\n```\n" +
        "```yaml\nLv 53-56: Neo Huroid [Alcadno Research Institute: Lab - Area C-3]\n```\n" +
        "```CSS\nLv 56-65: Rodeo [Malaysia: Muddy Banks 2]\n```\n" +
        "```CSS\nLv 65-67: Windraiders [Crimsonwood Keep: Tornado Corridor]\n```\n" +
        "```CSS\nLv 67-75: Froscola, Jester Scarlion [Malaysia: Fantasy Theme Park 1]\n```\n" +
        "```http\nLv 75-78: Stormbreaker [Crimsonwood Keep: Stormhall]\n```\n" +
        "```http\nLv 78-85: Harp, Blood Harp [Leafre: Sky Nest II]\n```\n" +
        "```http\nLv 85-90: Berserkie, Veetron [Singapore: Ulu Estate 1]\n```\n" +
        "```http\nLv 90-105: Veetron, Slygie [Singapore: Ulu Estate 2]\n```\n" +
        "```arm\nLv 105+: Petrifighter [Singapore: Ulu City Center]\n```\n" +
        "```arm\nLv 108+: Skelegon, Skelosaurus [Leafre: The Dragon Nest Left Behind]\n```\n" +
        "```arm\nLv 110+: Duku [Singapore: Destroyed Park I/II] *Destoryed Park I is highly recommended for trio Duku\n```"
    )
    .setFooter("Details from:\nhttps://mapleroyals.com/forum/threads/leeching-guide-updated-2021.145533/")

/* DO NOT TOUCH BELOW */

// HELP
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.help") {
        msg.channel.send(helpmsg);
    }
})

// ABOUT 
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.about") {
        msg.channel.send(aboutmsg);
    }
})

// GM/JR
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.gmjr") {
        msg.channel.send(gmjrmsg);
        gmjr;
    }
})

// HP WASH
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.hpwash") {
        msg.channel.send(hpwashmsg);
        washes;
    }
});

// CWK 
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.cwkbon") {
        cwkbon;
    }
});

// ZAK
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.zak") {
        msg.channel.send(zakmsg);
    }
});

// APQ
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.apq") {
        msg.channel.send(apqmsg);
    }
});

// LEECH
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.leech") {
        msg.channel.send(leechmsg);
    }
})

bot.login(process.env.TOKEN);