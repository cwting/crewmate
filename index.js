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
        { name: 'To Adds:', value: 'Leech Guide. HP Wash.', inline: false }
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
        "- Belle\n" +
        "- Piet\n" +
        "- Gel\n" +
        "- Lior\n" +
        "*will be adding more jrs as we go"
    )

const hpwashmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setTitle('HP Washing')
    .setDescription(
        "Enter your job, level and clean MP in the following format:\n" +
        "c.hpwash < job > <level> <mp>\n" +
        "`<job>`:\t beginner, spearman, fighter, page, archer, thief, brawler, gunslinger, magician\n" +
        "`<level>`:\t 1 - 200\n" +
        "`<mp>`:\t 1 - 30000 (not inclusive of MP added by equipments)"
    )

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
    if (msg.content.toLowerCase() === "c.zakpq") {
        msg.channel.send(zakmsg);
    }
});

// APQ
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.apq") {
        msg.channel.send(apqmsg);
    }
});

bot.login(process.env.TOKEN);