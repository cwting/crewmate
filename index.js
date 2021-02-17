var gmjr = require('./gmjr.js');
var cwkbon = require('./cwkbon.js');
var hpwash = require("./hpwash.js");
var calcap = require('./calcap.js')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (index.js)`); // BOT online
    bot.user.setActivity("c.help") // set BOT's status
});

const helpmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setThumbnail('https://i.ibb.co/8zMHfsR/logo.png')
    .setTitle('Crewmate Commands')
    .setDescription('Hello! \\o/\nI am Crewmate, a BOT made by Crew\'s members for Crew!')
    .addFields(
        { name: 'About Crew', value: '`c.about`', inline: false },
        { name: 'Calculate AP that is unassigned/assigned to HP/MP', value: '`c.ap`', inline: false },
        { name: 'APQ Stage 2', value: '`c.apq`', inline: false },
        { name: 'Crimsonwood Keep\'s Bonus Stage Split', value: '`c.cwkbon`', inline: false },
        { name: 'Crew\'s GM/JRs', value: '`c.gmjr`', inline: false },
        { name: 'HP Washing', value: '`c.hpwash`', inline: false },
        { name: 'Leeching Guide', value: '`c.leech`', inline: false },
        { name: 'Zakum Pre-Quest Stage 1', value: '`c.zak`', inline: false },
    )

const aboutmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setThumbnail('https://i.ibb.co/8zMHfsR/logo.png')
    .setTitle('About Crew')
    .setDescription("We are a trust-based family where help is always available and nobody gets left behind. 😊");

const apqmsg = new Discord.MessageEmbed()
    .setColor("#223DDD")
    .setTitle('APQ Stage 2')
    .setImage("https://i.ibb.co/Wks0MQT/apq-stg2.jpg")
    .setFooter("Image from:\nhttps://mapleroyals.com/forum/threads/amoria-party-quest-apq.31743/");

const calcapmsg = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Calculate AP")
    .setDescription(
        "Enter your level, clean str, clean dex, clean int and clean luk in the following format:\n" +
        "c.ap `[level]` `[str]` `[dex]` `[int]` `[luk]`\n" +
        "`[level]`: 1 - 200\n" +
        "`[str]`: 4 - 999 \n" +
        "`[dex]`: 4 - 999 \n" +
        "`[int]`: 4 - 999 \n" +
        "`[luk]`: 4 - 999"
    );

const gmjrmsg = new Discord.MessageEmbed()
    .setColor('#DDDDDD')
    .setTitle('Crew\'s Guild Master/Junior Masters')
    .setDescription(
        "Enter the name of the member you're interested in in the following format:\n" +
        "`c.gmjr [name]`\n" +
        "`[name]`:\n" +
        "Nivi\n" +
        "Naomi\n" +
        "Marc\n" +
        "Antonio\n" +
        "Bell\n" +
        "Piet\n" +
        "Gel\n" +
        "Lior\n" +
        "*will add more people as we go :)"
    );

const hpwashmsg = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('HP Wash')
    .setDescription(
        "Enter your job, level and clean MP in the following format:\n" +
        "`c.hpwash [job] [level] [mp]`\n" +
        "`[job]`: beginner, spearman, fighter, page, archer, thief, brawler, gunslinger, magician\n" +
        "`[level]`: 1 - 200\n" +
        "`[mp]`: 1 - 30000 (not inclusive of MP added by equipments)"
    )
    .setFooter("Many thanks to Naomi, Antonio, Nivi and Marc for helping out with this section 🤍\nAnd let me know if there's any error in calculations @Ting#4335");

const leechmsg = new Discord.MessageEmbed()
    .setColor("#DDDDDD")
    .setTitle("Leeching Guide")
    .setDescription(
        "Lv 10-20: Bubbling [Kerning City Subway: Line 1 Area <1>]\n" +
        "Lv 20-25: Wild Boar [Hidden Street: The Land of WildBoar I]\n" +
        "Lv 25-30: Brown Teddy, Pink Teddy [Ludibrium: Terrace Hall]\n" +
        "Lv 30-36: Jr. Wraith [Kerning Line 1 Area 2]\n" +
        "Lv 36-41: Platoon Chronos [Ludibrium: The Path of Time <1>]\n" +
        "Lv 41-43: Master Chronos [Ludibrium: The Path of Time <4>]\n" +
        "Lv 43-51: Wraith [Kerning City Subway: Line 1 Area <4>]\n" +
        "Lv 51-53: Oly Oly, Dark Fission [Malaysia: Muddy Banks 1]\n" +
        "Lv 53-56: Neo Huroid [Alcadno Research Institute: Lab - Area C-3]\n" +
        "Lv 56-65: Rodeo [Malaysia: Muddy Banks 2]\n" +
        "Lv 65-67: Windraiders [Crimsonwood Keep: Tornado Corridor]\n" +
        "Lv 67-75: Froscola, Jester Scarlion [Malaysia: Fantasy Theme Park 1]\n" +
        "Lv 75-78: Stormbreaker [Crimsonwood Keep: Stormhall]\n" +
        "Lv 78-85: Harp, Blood Harp [Leafre: Sky Nest II]\n" +
        "Lv 85-90: Berserkie, Veetron [Singapore: Ulu Estate 1]\n" +
        "Lv 90-105: Veetron, Slygie [Singapore: Ulu Estate 2]\n" +
        "Lv 105+: Petrifighter [Singapore: Ulu City Center]\n" +
        "Lv 108+: Skelegon, Skelosaurus [Leafre: The Dragon Nest Left Behind]\n" +
        "Lv 110+: Duku [Singapore: Destroyed Park I/II] *Destoryed Park I is highly recommended for trio Duku"
    )
    .setFooter("Details from:\nhttps://mapleroyals.com/forum/threads/leeching-guide-updated-2021.145533/");

const zakmsg = new Discord.MessageEmbed()
    .setColor("#71502E")
    .setTitle("Zakum Pre-Quest Stage 1")
    .setImage("https://i.ibb.co/2gRQxw0/zak-stg1.png")
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
    .setFooter("Image from:\nhttps://mapleroyals.com/forum/threads/zakum-prerequisite-guide.10723/");

/* ------------------------------- DO NOT TOUCH BELOW ------------------------------- */

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

// APQ
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.apq") {
        msg.channel.send(apqmsg);
    }
});

// CALCULATE AP
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.ap") {
        msg.channel.send(calcapmsg);
        calcap;
    }
});

// CWK 
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.cwkbon") {
        cwkbon;
    }
});

// GM/JR
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.gmjr") {
        msg.channel.send(gmjrmsg);
        gmjr;
    }
});

// HP WASH
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.hpwash") {
        msg.channel.send(hpwashmsg);
        hpwash;
    }
});

// LEECH
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.leech") {
        msg.channel.send(leechmsg);
    }
});


// ZAK
bot.on("message", async msg => {
    if (msg.content.toLowerCase() === "c.zak") {
        msg.channel.send(zakmsg);
    }
});

bot.login(process.env.TOKEN);