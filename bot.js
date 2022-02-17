var member = require('./botjs/members.js');
var cwkbon = require('./botjs/cwkbon.js');
var hpwash = require('./botjs/hpwash.js');
var apcalc = require('./botjs/apcalc.js');
var apq = require('./botjs/apq.js');
var remind = require('./botjs/remind.js');
var ask = require('./botjs/ask.js');
var dice = require('./botjs/dice.js');
var scroll = require('./botjs/scroll.js');
var gach2 = require('./botjs/gach2.js');
const cron = require('cron');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.info(`${bot.user.tag} is now online! (index.js)`); // BOT online
  bot.user.setActivity('c.help') // set BOT's status

  /* CRONJOB TIMEZONE = UTC */
  /* ------------------------------- Channels ------------------------------- */

  /*
      // get channel id
      const eventCh = bot.channels.cache.get('CH_ID');
      const event1 = new cron.CronJob('ss mm hh * * *', () => {
          eventCh.send(`<@&${'ROLE_ID'}>, hi!`);
      });

      event1.start();
  */

  /* ------------------------------- DMs ------------------------------- */

  // Mike 
  let mikeVote = new cron.CronJob('0 0 0 * * *', () => {
    bot.users.fetch('245522553173442560').then(mikeVoteMsg => {
      mikeVoteMsg.send('Time to vote :3')
    })
  })
  mikeVote.start();

  // Ant
  let antVote = new cron.CronJob('0 0 16 * * *', () => {
    bot.users.fetch('518100094839685130').then(antVoteMsg => {
      antVoteMsg.send('Time to vote UwU')
    })
  })
  antVote.start();

});

/* ------------------------------- HELP ------------------------------- */
bot.on('message', async msg => {
  if (msg.author.bot) {
    return
  }
  else if (msg.content.toLowerCase() === 'c.help') {
    const helpmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setThumbnail('https://i.ibb.co/8zMHfsR/logo.png')
      .setTitle('Crewmate Commands')
      .setDescription('Hello! \\o/\nI am Crewmate, a BOT made by Crew\'s members for Crew!')
      .addFields(
        { name: 'About Crew', value: '`c.about`' },
        { name: 'Calculate AP that is unassigned/assigned to HP/MP', value: '`c.ap`' },
        { name: 'Coin Flip', value: '`c.coinflip`' },
        { name: 'APQ Stage 2', value: '`c.apq`' },
        { name: 'Ask Crewmate A Question!', value: '`c.ask`' },
        { name: 'Crimsonwood Keep\'s Bonus Stage Split', value: '`c.cwkbon`' },
        { name: 'Roll A Dice', value: '`c.dice`' },
        { name: 'Guild PQ\'s Trial Stage', value: '`c.gpq`' },
        { name: 'HP Washing', value: '`c.hpwash`' },
        { name: 'Leeching Guide', value: '`c.leech`' },
        { name: 'Members of Crew', value: '`c.member`' },
        { name: 'Random Channel Picker', value: '`c.ch`' },
        { name: 'Random Gacha Location Picker', value: '`c.gach`' },
        { name: 'Random Gacha Location Picker (Selective)', value: '`c.gach2`' },
        { name: 'Reminder', value: '`c.remind`' },
        { name: 'Scroll', value: '`c.scroll`' },
        { name: 'Zakum Pre-Quest Stage 1', value: '`c.zak`' },
      )
    msg.channel.send(helpmsg);
  }

  /* ------------------------------- ABOUT ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.about') {
    const aboutmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setThumbnail('https://i.ibb.co/8zMHfsR/logo.png')
      .setTitle('About Crew')
      .setDescription('We are a trust-based family where help is always available and nobody gets left behind. 😊')
      .setFooter('Guild Pic will be updated upon request 🤍')
    msg.channel.send(aboutmsg);
    msg.channel.send('https://i.ibb.co/WKmjwvK/crew.png')
  }

  // /* ------------------------------- APQ ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.apq') {
    apq;
  }

  /* ------------------------------- AP CALCULATOR ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.ap') {
    const apcalcmsg = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Calculate AP')
      .setDescription(
        'Enter your level, clean str, clean dex, clean int and clean luk in the following format:\n' +
        'c.ap `level` `str` `dex` `int` `luk`\n' +
        '`level`: 1 - 200\n' +
        '`str`: 4 - 999 \n' +
        '`dex`: 4 - 999 \n' +
        '`int`: 4 - 999 \n' +
        '`luk`: 4 - 999'
      );
    msg.channel.send(apcalcmsg);
    apcalc;
  }

  /* ------------------------------- COIN FLIP ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.coinflip') {
    const coinFlipOutcomeArray = ['Heads', 'Tails']
    var coinFlipOutcomeNum = Math.floor(Math.random() * coinFlipOutcomeArray.length);
    msg.reply(`you got ${coinFlipOutcomeArray[coinFlipOutcomeNum]}.`)
  }

  /* ------------------------------- ASK ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.ask') {
    const askmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Have A Question?')
      .setDescription(
        'Enter in the following format:\n' +
        '`c.ask question`'
      )
    msg.channel.send(askmsg);
    ask;
  }

  /* ------------------------------- CWK ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.cwkbon') {
    cwkbon;
  }

  /* ------------------------------- DICE ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.dice') {
    const dicemsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Roll a Dice')
      .setDescription(
        'Enter in the following format:\n' +
        '`c.dice X`\n' +
        '`X`: any number'
      )
    msg.channel.send(dicemsg);
    dice;
  }

  /* --------------------------------- GPQ ----------------------------------- */
  else if (msg.content.toLowerCase() === 'c.gpq') {
    msg.channel.send('GPQ Stage 3 (Scroll/Medal/Wine/Food Stage) Practice: https://cwting.github.io/crewmate/index.html')
    const gpqmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('GPQ Bonus Stage')
      .setImage('https://i.ibb.co/Jm33f7S/gpq-bon.png')
      .setDescription(
        'Red/Cyan markings - Hidden Teleporters (from circle to X)\n' +
        'Purple - Spawn Point'
      )

    msg.channel.send(gpqmsg);
  }

  /* ------------------------------- HP WASH ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.hpwash') {
    const hpwashmsg = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('HP Wash')
      .setDescription(
        'Enter your job, level and clean MP in the following format:\n' +
        '`c.hpwash job level mp`\n' +
        '`job`: job/class\n' +
        '`level`: 1 - 200\n' +
        '`mp`: 1 - 30000 (not inclusive of MP added by equipments)'
      )
      .setFooter('Many thanks to Naomi, Antonio, Nivi and Marc for helping out with this section 🤍\nAnd let me know if there are any error in calculations @Ting#4335');

    msg.channel.send(hpwashmsg);
    hpwash;
  }

  /* ------------------------------- LEECH ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.leech') {
    const leechmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Leeching Guide')
      .setDescription(
        'Lv 10-20: Bubbling [Kerning City Subway: Line 1 Area <1>]\n' +
        'Lv 20-25: Wild Boar [Hidden Street: The Land of WildBoar I]\n' +
        'Lv 21-30: Genin [Zipangu: Castle Corridor*]\n' +
        'Lv 25-30: Brown Teddy, Pink Teddy [Ludibrium: Terrace Hall]\n' +
        'Lv 30-36: Jr. Wraith [Kerning Line 1 Area 2]\n' +
        'Lv 36-41: Platoon Chronos [Ludibrium: The Path of Time <1>]\n' +
        'Lv 41-43: Master Chronos [Ludibrium: The Path of Time <4>]\n' +
        'Lv 43-51: Wraith [Kerning City Subway: Line 1 Area <4>]\n' +
        'Lv 51-53: Oly Oly, Dark Fission [Malaysia: Muddy Banks 1]\n' +
        'Lv 53-56: Neo Huroid [Alcadno Research Institute: Lab - Area C-3]\n' +
        'Lv 56-65: Rodeo [Malaysia: Muddy Banks 2]\n' +
        'Lv 65-67: Windraiders [Crimsonwood Keep: Tornado Corridor]\n' +
        'Lv 67-75: Froscola, Jester Scarlion [Malaysia: Fantasy Theme Park 1]\n' +
        'Lv 75-78: Stormbreaker [Crimsonwood Keep: Stormhall]\n' +
        'Lv 78-85: Harp, Blood Harp [Leafre: Sky Nest II]\n' +
        'Lv 85-90: Berserkie, Veetron [Singapore: Ulu Estate 1]\n' +
        'Lv 90-105: Veetron, Slygie [Singapore: Ulu Estate 2]\n' +
        'Lv 105+: Petrifighter [Singapore: Ulu City Center]\n' +
        'Lv 108+: Skelegon, Skelosaurus [Leafre: The Dragon Nest Left Behind]\n' +
        '* **First Map After Zipangu: Inside the Castle Gate**'
      )
      .setFooter('Details from:\nhttps://mapleroyals.com/forum/threads/leeching-guide-updated-2021.145533/');
    msg.channel.send(leechmsg);
  }

  /* ------------------------------- MEMBERS ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.member') {
    const membermsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Crew\'s Members')
      .setDescription(
        'Enter the name of the member you are interested in, in the following format:\n' +
        '`c.member name`'
      )
      .setFooter('Once a member has been "summoned", you can react to the arrows to navigate the member\'s character(s)/image(s)')
      .addFields(
        {
          name: 'Guild Master and Jr. Masters',
          value:
            'Nivi\n' +
            'Naomi\n' +
            'Marc\n' +
            'Antonio\n' +
            'Bell\n' +
            'Piet\n' +
            'Gel\n' +
            'Lior\n' +
            'James'
        },
        {
          name: 'Members',
          value:
            'David\n' +
            'Rosa\n' +
            'Jenn\n' +
            'JJ\n' +
            'Sabi\n' +
            'Cyrus'
        },
        {
          name: 'Gone But Not Forgotten',
          value:
            'Chris'
        },
      )
    // const membermsg = new Discord.MessageEmbed()
    //     .setColor('#DDDDDD')
    //     .setTitle('Given Up')
    //     .setDescription('This command no longer exist.')
    msg.channel.send(membermsg);
    member;
  }

  /* ------------------------------- RANDOM CHANNEL PICKER ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.ch') {
    var randomCh = Math.floor(Math.random() * 20) + 1;
    msg.reply(`I have picked Channel ${randomCh} for you!`)
  }

  /* ------------------------------- RANDOM GACHA LOCATION PICKER ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.gach') {
    const gachLocationArray = ['CBD', 'Ellinia', 'Henesys', 'Kerning City', 'Nautilus', 'NLC', 'Perion', 'Showa', 'Mushroom Shrine', 'Sleepywood'];
    var gachLocationArrayNum = Math.floor(Math.random() * gachLocationArray.length);
    msg.reply(
      `I have picked ${gachLocationArray[gachLocationArrayNum]} for you! Good Luck!\n` +
      'Disclaimer: Crewmate is not to be held accountable for any "bad gach run". uwu'
    )
  }

  /* ------------------------------- RANDOM GACHA LOCATION PICKER 2 ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.gach2') {
    const gach2msg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Gacha Location Randomiser')
      .setDescription(
        'Enter in the following format:\n' +
        '`c.gach2 <location1> <location2>`\n' +
        'Locations: CBD, Ellinia, Henesys, Kerning City, Nautilus, NLC, Perion, Showa, Mushroom Shrine, Sleepywood'
      )
      .setFooter('There can be more than 2 locations!')
    msg.channel.send(gach2msg);
    gach2;

  }

  /* --------------------------------------- REMINDER --------------------------------------- */
  else if (msg.content.toLowerCase() === 'c.remind') {
    const remindmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Reminder')
      .setDescription(
        'Enter in the following format:\n' +
        '`c.remind hh mm ss reason`'
      )
      .setFooter('For some reason, long hours aren\'t allowed to try to keep reminder short :)');
    msg.channel.send(remindmsg);
    remind;
  }

  /* ------------------------------- SCROLL ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.scroll') {
    const scrollmsg = new Discord.MessageEmbed()
      .setColor('#DDDDDD')
      .setTitle('Scrolling Simulator')
      .setDescription(
        'Enter in the following format:\n' +
        '`c.scroll %`\n' +
        '`%`: 1, 3, 10, 30, 60, 70'
      )
    msg.channel.send(scrollmsg);
    scroll;
  }

  /* ------------------------------- ZAK ------------------------------- */
  else if (msg.content.toLowerCase() === 'c.zak') {
    const zakmsg = new Discord.MessageEmbed()
      .setColor('#71502E')
      .setTitle('Zakum Pre-Quest Stage 1')
      .setImage('https://i.ibb.co/2gRQxw0/zak-stg1.png')
      .setDescription(
        '11-1 (chest)\n' +
        '9-2 (chest)\n' +
        '14-1 (chest)\n' +
        '4-2 (rock)\n' +
        '16-3 (chest)\n' +
        '16-2 (chest)\n' +
        '16-5 (rock)\n' +
        '*In order to gain access to Area 16, you need to go through room 10 or 7 until you reach Area 16.'
      )
      .setFooter('Image from:\nhttps://mapleroyals.com/forum/threads/zakum-prerequisite-guide.10723/');
    msg.channel.send(zakmsg);
  }

  /* ------------------------------- hidden features ------------------------------- */
  else if (msg.content.toLowerCase().includes('bunpaws')) {
    msg.channel.send('https://cdn.discordapp.com/attachments/515879326856642582/839563550207901706/99eab75d-baf4-49e3-ac8c-c183522eaebe_1.gif');
  }
  else if (msg.content.toLowerCase().includes('cutepaws')) {
    msg.channel.send('https://cdn.discordapp.com/attachments/515879326856642582/839569845041496135/cutepaws.gif');
  }

  else if (msg.channel.type === 'dm') {
    const dmmsg = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
      .setDescription(msg.content);

    const dmChannel = bot.channels.cache.get('943806396896514068');
    dmChannel.send(dmmsg)

    bot.channels.get(channelID).send(embed);
  }
});

bot.login(process.env.TOKEN);