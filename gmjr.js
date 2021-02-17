const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const bot = new Client();
const currentYear = 2021; // Change yearly

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (gmjr.js)`); // BOT online
});

/*
List of GMJr:
- Nivi
- Naomi
- Marc
- Antonio
- Bell
- Piet/Pietro
- Gel
- Lior
*/
const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "gmjr") {
        // if empty
        if (!args.length) {
            return
        }
        // Nivi
        else if (args[0].toLowerCase() === "nivi") {
            message.reply("Here's info on Nivi! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'Wolftail',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __Wolftail - Level 200 Corsair__ 🤍\nBunpaws - Level 200 Buccaneer\nNweeky -  Level 200 Bowmaster\nPronghorn -  Level 18x Marksman\nStripewing -  Level 13x Bishop`
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.imgur.com/xuaKCTS.png"),
                    reactions: {
                        '❌': 'Wolftail',
                        '➡': 'Bunpaws'
                    }
                },
                {
                    name: 'Bunpaws',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `Wolftail - Level 200 Corsair\n🤍 __Bunpaws - Level 200 Buccaneer__ 🤍\nNweeky -  Level 200 Bowmaster\nPronghorn -  Level 18x Marksman\nStripewing -  Level 13x Bishop`
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.imgur.com/wYihec9.png"),
                    reactions: {
                        '⬅': 'Wolftail',
                        '➡': 'Nweeky'
                    }
                },
                {
                    name: 'Nweeky',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `Wolftail - Level 200 Corsair\nBunpaws - Level 200 Buccaneer\n🤍 __Nweeky -  Level 200 Bowmaster__ 🤍\nPronghorn -  Level 18x Marksman\nStripewing -  Level 13x Bishop`
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.imgur.com/LohAi8X.png"),
                    reactions: {
                        '⬅': 'Bunpaws',
                        '➡': 'Pronghorn'
                    }
                },
                {
                    name: 'Pronghorn',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `Wolftail - Level 200 Corsair\nBunpaws - Level 200 Buccaneer\nNweeky -  Level 200 Bowmaster\n🤍 __Pronghorn -  Level 18x Marksman__ 🤍\nStripewing -  Level 13x Bishop`
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.imgur.com/CsoGqIb.png"),
                    reactions: {
                        '⬅': 'Nweeky',
                        '➡': 'Stripewing'
                    }
                },
                {
                    name: 'Stripewing',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `Wolftail - Level 200 Corsair\nBunpaws - Level 200 Buccaneer\nNweeky -  Level 200 Bowmaster\nPronghorn -  Level 18x Marksman\n🤍 __Stripewing -  Level 13x Bishop__ 🤍`
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.imgur.com/fBK18bi.png"),
                    reactions: {
                        '⬅': 'Pronghorn',
                        '❌': 'Stripewing'
                    }
                },
            ], 60000)
            gmjr.start()
        }

        // Naomi
        else if (args[0].toLowerCase() === "naomi") {
            message.reply("Here's info on Naomi! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'NLynx',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998}`, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __NLynx - Level 200 Night Lord__ 🤍\nAcinonyx - Level 17x Dark Knight\nLunarN - Level 16x Shadower\nNPanthera - Level 16x Bowmaster`
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.imgur.com/yr9yj1i.png"),
                    reactions: {
                        '❌': 'NLynx',
                        '➡': 'Acinonyx'
                    }
                },
                {
                    name: 'Acinonyx',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998}`, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `NLynx - Level 200 Night Lord\n🤍 __Acinonyx - Level 17x Dark Knight__ 🤍\nLunarN - Level 16x Shadower\nNPanthera - Level 16x Bowmaster`
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.imgur.com/MciV0dh.png"),
                    reactions: {
                        '⬅': 'NLynx',
                        '➡': 'LunarN'
                    }
                },
                {
                    name: 'LunarN',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998}`, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `NLynx - Level 200 Night Lord\nAcinonyx - Level 17x Dark Knight\n🤍 __LunarN - Level 16x Shadower__ 🤍\nNPanthera - Level 16x Bowmaster`
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.imgur.com/AxeEatG.png"),
                    reactions: {
                        '⬅': 'Acinonyx',
                        '➡': 'NPanthera'
                    }
                },
                {
                    name: 'NPanthera',
                    content: new MessageEmbed({
                        title: 'Crew\'s Guild Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998}`, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `NLynx - Level 200 Night Lord\nAcinonyx - Level 17x Dark Knight\nLunarN - Level 16x Shadower\n🤍 __NPanthera - Level 16x Bowmaster__ 🤍`
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.imgur.com/HVG25C9.png"),
                    reactions: {
                        '⬅': 'LunarN',
                        '❌': 'NPanthera'
                    }
                },
            ], 60000)
            gmjr.start()

        }

        // Marc
        else if (args[0].toLowerCase() === "marc") {
            message.reply("Here's info on Marc! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'xKook007',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __xKook007 - Level 200 Night Lord__ 🤍\nVaiiente - Level 19x Dark Knight\nRooka - Level 14x Corsair\nLeuca - Level 13x Night Lord\nJyeong - Level 13x Bishop`
                            }
                        )
                        .setColor("#3455EB")
                        .setImage("https://i.imgur.com/hkGWKrS.png"),
                    reactions: {
                        '❌': 'xKook007',
                        '➡': 'Vaiiente'
                    }
                },
                {
                    name: 'Vaiiente',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `xKook007 - Level 200 Night Lord\n🤍 __Vaiiente - Level 19x Dark Knight__ 🤍\nRooka - Level 14x Corsair\nLeuca - Level 13x Night Lord\nJyeong - Level 13x Bishop`
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.imgur.com/eI7OF9r.png"),
                    reactions: {
                        '⬅': 'xKook007',
                        '➡': 'Rooka'
                    }
                },
                {
                    name: 'Rooka',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })

                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `xKook007 - Level 200 Night Lord\nVaiiente - Level 19x Dark Knight\n🤍 __Rooka - Level 14x Corsair__ 🤍\nLeuca - Level 13x Night Lord\nJyeong - Level 13x Bishop`
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.imgur.com/IG8512L.png"),
                    reactions: {
                        '⬅': 'Vaiiente',
                        '➡': 'Leuca'
                    }
                },
                {
                    name: 'Leuca',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `xKook007 - Level 200 Night Lord\nVaiiente - Level 19x Dark Knight\nRooka - Level 14x Corsair\n🤍 __Leuca - Level 13x Night Lord__ 🤍\nJyeong - Level 13x Bishop`
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.imgur.com/gHbGnpE.png"),
                    reactions: {
                        '⬅': 'Rooka',
                        '➡': 'Jyeong'
                    }
                },
                {
                    name: 'Jyeong',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `xKook007 - Level 200 Night Lord\nVaiiente - Level 19x Dark Knight\nRooka - Level 14x Corsair\nLeuca - Level 13x Night Lord\n🤍 __Jyeong - Level 13x Bishop__ 🤍`
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.imgur.com/XIMw3BI.png"),
                    reactions: {
                        '⬅': 'Leuca',
                        '❌': 'Jyeong'
                    }
                },
            ], 60000)
            gmjr.start()
        }

        // Antonio
        else if (args[0].toLowerCase() === "antonio") {
            message.reply("Here's info on Antonio! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'ArchWar',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __ArchWar - Level 200 Bowmaster__ 🤍\nBadShooter - Level 19x Corsair\nGreenyHeaven - Level 13x Bishop`
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.imgur.com/qt4cCQS.png"),
                    reactions: {
                        '❌': 'ArchWar',
                        '➡': 'BadShooter'
                    }
                },
                {
                    name: 'BadShooter',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `ArchWar - Level 200 Bowmaster\n🤍 __BadShooter - Level 19x Corsair__ 🤍\nGreenyHeaven - Level 13x Bishop`
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.imgur.com/oQE3ZS3.png"),
                    reactions: {
                        '⬅': 'ArchWar',
                        '➡': 'GreenyHeaven'
                    }
                },
                {
                    name: 'GreenyHeaven',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `ArchWar - Level 200 Bowmaster\nBadShooter - Level 19x Corsair\n🤍 __GreenyHeaven - Level 13x Bishop__ 🤍`
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.imgur.com/hZt683O.png"),
                    reactions: {
                        '⬅': 'BadShooter',
                        '❌': 'GreenyHeaven'
                    },
                },
            ], 60000)
            gmjr.start()
        }

        // Belle
        else if (args[0].toLowerCase() === "bell") {
            message.reply("Here's info on Bell! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'DingTongBell',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000}`, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __DingTongBell - Level 200 Hero__ 🤍\nBadPuncher - Level 19x Buccaneer\nTingTongBell - Level 18x Bishop`
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.imgur.com/UICM5SR.png"),
                    reactions: {
                        '❌': 'DingTongBell',
                        '➡': 'BadPuncher'
                    }
                },
                {
                    name: 'BadPuncher',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000}`, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `DingTongBell - Level 200 Hero\n🤍 __BadPuncher - Level 19x Buccaneer__ 🤍\nTingTongBell - Level 18x Bishop`
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.imgur.com/z9Glm8q.png"),
                    reactions: {
                        '⬅': 'DingTongBell',
                        '➡': 'TingTongBell'
                    }
                },
                {
                    name: 'TingTongBell',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000}`, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `DingTongBell - Level 200 Hero\nBadPuncher - Level 19x Buccaneer\n🤍 __TingTongBell - Level 18x Bishop__ 🤍`
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.imgur.com/qmLgI47.png"),
                    reactions: {
                        '⬅': 'BadPuncher',
                        '❌': 'TingTongBell'
                    }
                },
            ], 60000)
            gmjr.start()
        }

        // Piet/Pietro
        else if (args[0].toLowerCase() === "piet") {
            message.reply("Here's info on Piet! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'MazeRunner',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Piet/Pietro", inline: true },
                            { name: "Age:", value: `${currentYear - 2002}`, inline: true },
                            { name: "Country:", value: "Germany", inline: true },
                            { name: "Speaks:", value: "German, Italian, English, Spanish", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __MazeRunner - Level 200 Night Lord__ 🤍`
                            }
                        )
                        .setColor("#00FFF9")
                        .setImage("https://i.imgur.com/StegBHS.png"),
                    reactions: {
                        '❌': 'MazeRunner',
                        '😭': 'MazeRunner'
                    }
                },
            ], 60000)
            gmjr.start()
        }

        // Gel
        else if (args[0].toLowerCase() === "gel") {
            message.reply("Here's info on Gel! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'xCintare',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Gel", inline: true },
                            { name: "Age:", value: `${currentYear - 2001}`, inline: true },
                            { name: "Country:", value: "Philippines", inline: true },
                            { name: "Speaks:", value: "English, Filipino", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __xCintare - Level 200 Dark Knight__ 🤍\nMewleficent - Level 18x Bishop`
                            }
                        )
                        .setColor("#5C44D2")
                        .setImage("https://i.imgur.com/yjROcqK.png"),
                    reactions: {
                        '❌': 'xCintare',
                        '➡': 'Mewleficent'
                    }
                },
                {
                    name: 'Mewleficent',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Gel", inline: true },
                            { name: "Age:", value: `${currentYear - 2001}`, inline: true },
                            { name: "Country:", value: "Philippines", inline: true },
                            { name: "Speaks:", value: "English, Filipino", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `xCintare - Level 200 Dark Knight\n🤍 __Mewleficent - Level 18x Bishop__ 🤍`
                            }
                        )
                        .setColor("#5C44D2")
                        .setImage("https://i.imgur.com/Om786Fk.png"),
                    reactions: {
                        '⬅': 'xCintare',
                        '❌': 'Mewleficent'
                    }
                },
            ], 60000)
            gmjr.start()
        }

        // Lior
        else if (args[0].toLowerCase() === "lior") {
            message.reply("Here's info on Lior! 😉")
            let gmjr = new Menu(message.channel, message.author.id, [
                {
                    name: 'iTinyRick',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `🤍 __iTinyRick - Level 200 Dark Knight__ 🤍\nTinyHero - Level 200 Hero\niDragonFist - Level 19x Buccaneer\nHealWolf - Level 15x Bishop`
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.imgur.com/KPDAbTg.png"),
                    reactions: {
                        '❌': 'iTinyRick',
                        '➡': 'TinyHero'
                    }
                },
                {
                    name: 'TinyHero',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `iTinyRick - Level 200 Dark Knight\n🤍 __TinyHero - Level 200 Hero__ 🤍\niDragonFist - Level 19x Buccaneer\nHealWolf - Level 15x Bishop`
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.imgur.com/MRURZnB.png"),
                    reactions: {
                        '⬅': 'iTinyRick',
                        '➡': 'iDragonFist'
                    }
                },
                {
                    name: 'iDragonFist',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `iTinyRick - Level 200 Dark Knight\nTinyHero - Level 200 Hero\n🤍 __iDragonFist - Level 19x Buccaneer__ 🤍\nHealWolf - Level 15x Bishop`
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.imgur.com/1xaJf9I.png"),
                    reactions: {
                        '⬅': 'TinyHero',
                        '➡': 'HealWolf'
                    }
                },
                {
                    name: 'HealWolf',
                    content: new MessageEmbed({
                        title: 'Crew\'s Jr. Master',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997}`, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: `iTinyRick - Level 200 Dark Knight\nTinyHero - Level 200 Hero\niDragonFist - Level 19x Buccaneer\n🤍 __HealWolf - Level 15x Bishop__ 🤍`
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.imgur.com/3PPL34S.png"),
                    reactions: {
                        '⬅': 'iDragonFist',
                        '❌': 'HealWolf'
                    }
                },
            ], 60000)
            gmjr.start()
        }
        /* insert here */
        else {
            return message.reply("Incorrect format! GM")
        }
    }
})

bot.login(process.env.TOKEN);