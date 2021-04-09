const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const bot = new Client();
const currentYear = 2021; // Change yearly

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}! ${bot.user.tag} is now online! (members.js)`); // BOT online
});

const prefix = "c.";
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var name = args[0];

    if (command === "member") {
        // if empty
        if (!args.length) {
            return
        }
        /* -------------------------------------- GUILD MASTER AND JR.MASTERS -------------------------------------- */
        // Nivi
        else if (name.toLowerCase() === "nivi") {
            message.reply("Here's info on Nivi! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'Wolftail',
                    content: new MessageEmbed({
                        title: 'Guild Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __Wolftail - Level 200 Corsair__ 🤍\n" +
                                    "Bunpaws - Level 200 Buccaneer\n" +
                                    "Nweeky - Level 200 Bowmaster\n" +
                                    "Pronghorn - Level 18x Marksman\n" +
                                    "Stripewing - Level 13x Bishop"
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.ibb.co/dLzRG3n/Wolftail.png"),
                    reactions: {
                        '❌': 'Wolftail',
                        '➡': 'Bunpaws'
                    }
                },
                {
                    name: 'Bunpaws',
                    content: new MessageEmbed({
                        title: 'Guild Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Wolftail - Level 200 Corsair\n" +
                                    "🤍 __Bunpaws - Level 200 Buccaneer__ 🤍\n" +
                                    "Nweeky - Level 200 Bowmaster\n" +
                                    "Pronghorn - Level 18x Marksman\n" +
                                    "Stripewing - Level 13x Bishop"
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.ibb.co/GJ4WhPV/Bunpaws.png"),
                    reactions: {
                        '⬅': 'Wolftail',
                        '➡': 'Nweeky'
                    }
                },
                {
                    name: 'Nweeky',
                    content: new MessageEmbed({
                        title: 'Guild Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Wolftail - Level 200 Corsair\n" +
                                    "Bunpaws - Level 200 Buccaneer\n" +
                                    "🤍 __Nweeky - Level 200 Bowmaster__ 🤍\n" +
                                    "Pronghorn - Level 18x Marksman\n" +
                                    "Stripewing - Level 13x Bishop"
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.ibb.co/L5jTGYk/Nweeky.png"),
                    reactions: {
                        '⬅': 'Bunpaws',
                        '➡': 'Pronghorn'
                    }
                },
                {
                    name: 'Pronghorn',
                    content: new MessageEmbed({
                        title: 'Guild Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988}`, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Wolftail - Level 200 Corsair\n" +
                                    "Bunpaws - Level 200 Buccaneer\n" +
                                    "Nweeky - Level 200 Bowmaster\n" +
                                    "🤍 __Pronghorn - Level 18x Marksman__ 🤍\n" +
                                    "Stripewing - Level 13x Bishop"
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.ibb.co/qsq60qm/Pronghorn.png"),
                    reactions: {
                        '⬅': 'Nweeky',
                        '➡': 'Stripewing'
                    }
                },
                {
                    name: 'Stripewing',
                    content: new MessageEmbed({
                        title: 'Guild Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Nivi", inline: true },
                            { name: "Age:", value: `${currentYear - 1988} `, inline: true },
                            { name: "Country:", value: "Finland", inline: true },
                            { name: "Speaks:", value: "Finnish, English, Swedish, Spanish (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Wolftail - Level 200 Corsair\n" +
                                    "Bunpaws - Level 200 Buccaneer\n" +
                                    "Nweeky - Level 200 Bowmaster\n" +
                                    "Pronghorn - Level 18x Marksman\n" +
                                    "🤍 __Stripewing - Level 13x Bishop__ 🤍"
                            }
                        )
                        .setColor("#5FC3C3")
                        .setImage("https://i.ibb.co/Wgvkw3b/Stripewing.png"),
                    reactions: {
                        '⬅': 'Pronghorn',
                        '❌': 'Stripewing'
                    }
                },
            ], 60000)
            member.start()
        }

        // Naomi
        else if (name.toLowerCase() === "naomi") {
            message.reply("Here's info on Naomi! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'NLynx',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __NLynx - Level 200 Night Lord__ 🤍\n" +
                                    "Acinonyx - Level 17x Dark Knight\n" +
                                    "LunarN - Level 16x Shadower\n" +
                                    "NPanthera - Level 16x Bowmaster"
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.ibb.co/vZMjXXF/NLynx.png"),
                    reactions: {
                        '❌': 'NLynx',
                        '➡': 'Acinonyx'
                    }
                },
                {
                    name: 'Acinonyx',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "NLynx - Level 200 Night Lord\n" +
                                    "🤍 __Acinonyx - Level 17x Dark Knight__ 🤍\n" +
                                    "LunarN - Level 16x Shadower\n" +
                                    "NPanthera - Level 16x Bowmaster"
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.ibb.co/FX9cvzW/Acinonyx.png"),
                    reactions: {
                        '⬅': 'NLynx',
                        '➡': 'LunarN'
                    }
                },
                {
                    name: 'LunarN',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "NLynx - Level 200 Night Lord\n" +
                                    "Acinonyx - Level 17x Dark Knight\n" +
                                    "🤍 __LunarN - Level 16x Shadower__ 🤍\n" +
                                    "NPanthera - Level 16x Bowmaster"
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.ibb.co/ccVvbfT/LunarN.png"),
                    reactions: {
                        '⬅': 'Acinonyx',
                        '➡': 'NPanthera'
                    }
                },
                {
                    name: 'NPanthera',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Naomi", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "EU", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "NLynx - Level 200 Night Lord\n" +
                                    "Acinonyx - Level 17x Dark Knight\n" +
                                    "LunarN - Level 16x Shadower\n" +
                                    "🤍 __NPanthera - Level 16x Bowmaster__ 🤍"
                            }
                        )
                        .setColor("#F8A913")
                        .setImage("https://i.ibb.co/vv6VLJv/NPanthera.png"),
                    reactions: {
                        '⬅': 'LunarN',
                        '❌': 'NPanthera'
                    }
                },
            ], 60000)
            member.start()

        }

        // Marc
        else if (name.toLowerCase() === "marc") {
            message.reply("Here's info on Marc! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'xKook007',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __xKook007 - Level 200 Night Lord__ 🤍\n" +
                                    "Vaiiente - Level 19x Dark Knight\n" +
                                    "Rooka - Level 14x Corsair\n" +
                                    "Leuca - Level 13x Night Lord\n" +
                                    "Jyeong - Level 13x Bishop"
                            }
                        )
                        .setColor("#3455EB")
                        .setImage("https://i.ibb.co/wLB6Bb4/xKook007.png"),
                    reactions: {
                        '❌': 'xKook007',
                        '➡': 'Vaiiente'
                    }
                },
                {
                    name: 'Vaiiente',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xKook007 - Level 200 Night Lord\n" +
                                    "🤍 __Vaiiente - Level 19x Dark Knight__ 🤍\n" +
                                    "Rooka - Level 14x Corsair\n" +
                                    "Leuca - Level 13x Night Lord\n" +
                                    "Jyeong - Level 13x Bishop"
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.ibb.co/S5jLdBZ/VaIiente.png"),
                    reactions: {
                        '⬅': 'xKook007',
                        '➡': 'Rooka'
                    }
                },
                {
                    name: 'Rooka',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xKook007 - Level 200 Night Lord\n" +
                                    "Vaiiente - Level 19x Dark Knight\n" +
                                    "🤍 __Rooka - Level 14x Corsair__ 🤍\n" +
                                    "Leuca - Level 13x Night Lord\n" +
                                    "Jyeong - Level 13x Bishop"
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.ibb.co/zRcwWJz/Rooka.png"),
                    reactions: {
                        '⬅': 'Vaiiente',
                        '➡': 'Leuca'
                    }
                },
                {
                    name: 'Leuca',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xKook007 - Level 200 Night Lord\n" +
                                    "Vaiiente - Level 19x Dark Knight\n" +
                                    "Rooka - Level 14x Corsair\n" +
                                    "🤍 __Leuca - Level 13x Night Lord__ 🤍\n" +
                                    "Jyeong - Level 13x Bishop"
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.ibb.co/bswFbSK/Leuca.png"),
                    reactions: {
                        '⬅': 'Rooka',
                        '➡': 'Jyeong'
                    }
                },
                {
                    name: 'Jyeong',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Marc/Kook", inline: true },
                            { name: "Age:", value: `${currentYear - 1995} (Normal), ${currentYear - 1994} (Korean)`, inline: true },
                            { name: "Country:", value: "Korea", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xKook007 - Level 200 Night Lord\n" +
                                    "Vaiiente - Level 19x Dark Knight\n" +
                                    "Rooka - Level 14x Corsair\n" +
                                    "Leuca - Level 13x Night Lord\n" +
                                    "🤍 __Jyeong - Level 13x Bishop__ 🤍"
                            }
                        )
                        .setColor("3455EB")
                        .setImage("https://i.ibb.co/VMnFQZz/Jyeong.png"),
                    reactions: {
                        '⬅': 'Leuca',
                        '❌': 'Jyeong'
                    }
                },
            ], 60000)
            member.start()
        }

        // Antonio
        else if (name.toLowerCase() === "antonio") {
            message.reply("Here's info on Antonio! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'ArchWar',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __ArchWar - Level 200 Bowmaster__ 🤍\n" +
                                    "BadShooter - Level 19x Corsair\n" +
                                    "GreenyHeaven - Level 13x Bishop"
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.ibb.co/7NcJkwK/ArchWar.png"),
                    reactions: {
                        '❌': 'ArchWar',
                        '➡': 'BadShooter'
                    }
                },
                {
                    name: 'BadShooter',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "ArchWar - Level 200 Bowmaster\n" +
                                    "🤍 __BadShooter - Level 19x Corsair__ 🤍\n" +
                                    "GreenyHeaven - Level 13x Bishop"
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.ibb.co/ChhJSkT/Bad-Shooter.png"),
                    reactions: {
                        '⬅': 'ArchWar',
                        '➡': 'GreenyHeaven'
                    }
                },
                {
                    name: 'GreenyHeaven',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Arch/Antonio", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "English, Arabic, Hebrew", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "ArchWar - Level 200 Bowmaster\n" +
                                    "BadShooter - Level 19x Corsair\n" +
                                    "🤍 __GreenyHeaven - Level 13x Bishop__ 🤍"
                            }
                        )
                        .setColor("#384C4F")
                        .setImage("https://i.ibb.co/R7sHjnH/Greeny-Heaven.png"),
                    reactions: {
                        '⬅': 'BadShooter',
                        '❌': 'GreenyHeaven'
                    },
                },
            ], 60000)
            member.start()
        }

        // Bell
        else if (name.toLowerCase() === "bell") {
            message.reply("Here's info on Bell! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'DingTongBell',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __DingTongBell - Level 200 Hero__ 🤍\n" +
                                    "BadPuncher - Level 19x Buccaneer\n" +
                                    "TingTongBell - Level 18x Bishop"
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.ibb.co/jTZjnr9/Ding-Tong-Bell.png"),
                    reactions: {
                        '❌': 'DingTongBell',
                        '➡': 'BadPuncher'
                    }
                },
                {
                    name: 'BadPuncher',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DingTongBell - Level 200 Hero\n" +
                                    "🤍 __BadPuncher - Level 19x Buccaneer__ 🤍\n" +
                                    "TingTongBell - Level 18x Bishop"
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.ibb.co/WGCGT4W/Bad-Puncher.png"),
                    reactions: {
                        '⬅': 'DingTongBell',
                        '➡': 'TingTongBell'
                    }
                },
                {
                    name: 'TingTongBell',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Bell/Belle", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "Singapore", inline: true },
                            { name: "Speaks:", value: "English, Chinese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DingTongBell - Level 200 Hero\n" +
                                    "BadPuncher - Level 19x Buccaneer\n" +
                                    "🤍 __TingTongBell - Level 18x Bishop__ 🤍"
                            }
                        )
                        .setColor("#F83B3B")
                        .setImage("https://i.ibb.co/Vm2ZMv0/Ting-Tong-Bell.png"),
                    reactions: {
                        '⬅': 'BadPuncher',
                        '❌': 'TingTongBell'
                    }
                },
            ], 60000)
            member.start()
        }

        // Piet/Pietro
        else if (name.toLowerCase() === "piet") {
            message.reply("Here's info on Piet! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'MazeRunner',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Piet/Pietro", inline: true },
                            { name: "Age:", value: `${currentYear - 2001} `, inline: true },
                            { name: "Country:", value: "Germany", inline: true },
                            { name: "Speaks:", value: "German, Italian, English, Spanish", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: "🤍 __MazeRunner - Level 200 Night Lord__ 🤍"
                            }
                        )
                        .setColor("#00FFF9")
                        .setImage("https://i.ibb.co/Tc5ynQX/Maze-Runner.png"),
                    reactions: {
                        '❌': 'MazeRunner',
                        '😭': 'MazeRunner'
                    }
                },
            ], 60000)
            member.start()
        }

        // Gel
        else if (name.toLowerCase() === "gel") {
            message.reply("Here's info on Gel! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'xCintare',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Gel", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "Philippines", inline: true },
                            { name: "Speaks:", value: "English, Filipino", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __xCintare - Level 200 Dark Knight__ 🤍\n" +
                                    "Mewleficent - Level 18x Bishop"
                            }
                        )
                        .setColor("#5C44D2")
                        .setImage("https://i.ibb.co/bb66wKy/xCintare.png"),
                    reactions: {
                        '❌': 'xCintare',
                        '➡': 'Mewleficent'
                    }
                },
                {
                    name: 'Mewleficent',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Gel", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "Philippines", inline: true },
                            { name: "Speaks:", value: "English, Filipino", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xCintare - Level 200 Dark Knight\n" +
                                    "🤍 __Mewleficent - Level 18x Bishop__ 🤍"
                            }
                        )
                        .setColor("#5C44D2")
                        .setImage("https://i.ibb.co/Br07z5f/Mewleficent.png"),
                    reactions: {
                        '⬅': 'xCintare',
                        '❌': 'Mewleficent'
                    }
                },
            ], 60000)
            member.start()
        }

        // Lior
        else if (name.toLowerCase() === "lior") {
            message.reply("Here's info on Lior! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'iTinyRick',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __iTinyRick - Level 200 Dark Knight__ 🤍\n" +
                                    "TinyHero - Level 200 Hero\n" +
                                    "iDragonFist - Level 19x Buccaneer\n" +
                                    "HealWolf - Level 15x Bishop"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/gjn8dMz/ITiny-Rick.png"),
                    reactions: {
                        '❌': 'iTinyRick',
                        '➡': 'TinyHero'
                    }
                },
                {
                    name: 'TinyHero',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "iTinyRick - Level 200 Dark Knight\n" +
                                    "🤍 __TinyHero - Level 200 Hero__ 🤍\n" +
                                    "iDragonFist - Level 19x Buccaneer\n" +
                                    "HealWolf - Level 15x Bishop"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/30cST1D/TinyHero.png"),
                    reactions: {
                        '⬅': 'iTinyRick',
                        '➡': 'iDragonFist'
                    }
                },
                {
                    name: 'iDragonFist',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "iTinyRick - Level 200 Dark Knight\n" +
                                    "TinyHero - Level 200 Hero\n" +
                                    "🤍 __iDragonFist - Level 19x Buccaneer__ 🤍\n" +
                                    "HealWolf - Level 15x Bishop"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/p21L3nj/IDragon-Fist.png"),
                    reactions: {
                        '⬅': 'TinyHero',
                        '➡': 'HealWolf'
                    }
                },
                {
                    name: 'HealWolf',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Lior", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Israel", inline: true },
                            { name: "Speaks:", value: "Hebrew, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "iTinyRick - Level 200 Dark Knight\n" +
                                    "TinyHero - Level 200 Hero\n" +
                                    "iDragonFist - Level 19x Buccaneer\n" +
                                    "🤍 __HealWolf - Level 15x Bishop__ 🤍"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/W5HxR9b/HealWolf.png"),
                    reactions: {
                        '⬅': 'iDragonFist',
                        '❌': 'HealWolf'
                    }
                },
            ], 60000)
            member.start()
        }

        // Jon
        else if (name.toLowerCase() === "jon") {
            message.reply("Here's info on Jon! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'S2Hanna',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Jon", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "USA/Korea", inline: true },
                            { name: "Speaks:", value: "English, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __S2Hanna - Level 200 Dark Knight__ 🤍\n" +
                                    "iJSK - Level 19x Night Lord"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/vcLn8D0/S2hanna.png"),
                    reactions: {
                        '❌': 'S2Hanna',
                        '➡': 'iJSK'
                    }
                },
                {
                    name: 'iJSK',
                    content: new MessageEmbed({
                        title: 'Jr. Master of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Jon", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "USA/Korea", inline: true },
                            { name: "Speaks:", value: "English, Korean", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "S2Hanna - Level 200 Dark Knight\n" +
                                    "🤍 __iJSK - Level 19x Night Lord__ 🤍"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/9wbfVWz/iJSK.png"),
                    reactions: {
                        '⬅': 'S2Hanna',
                        '❌': 'iJSK'
                    }
                },
            ], 60000)
            member.start()
        }

        /* ----------------------------------------------- MEMBERS ----------------------------------------------- */
        // David
        else if (name.toLowerCase() === "david") {
            message.reply("Here's info on David! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'megachin',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "David", inline: true },
                            { name: "Age:", value: `${currentYear - 2000} `, inline: true },
                            { name: "Country:", value: "The Netherlands", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value: "🤍 __megachin - Level 16x Bowmaster__ 🤍"
                            }
                        )
                        .setColor("#6F2525")
                        .setImage("https://i.ibb.co/j66cgGf/megachin.png"),
                    reactions: {
                        '❌': 'megachin',
                        '😭': 'megachin'
                    }
                },
            ], 60000)
            member.start()
        }

        // Rosa
        else if (name.toLowerCase() === "rosa") {
            message.reply("Here's info on Rosa! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'PalaRose',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Rosa", inline: true },
                            { name: "Age:", value: `${currentYear - 2004} `, inline: true },
                            { name: "Country:", value: "Canada", inline: true },
                            { name: "Speaks:", value: "English, Mandarin, French (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __PalaRose - Level 19x Paladin__ 🤍\n" +
                                    "N00BPR0 - Level 16x Bishop"
                            }
                        )
                        .setColor("#D633FF")
                        .setImage("https://i.ibb.co/sQwf9Hd/PalaRose.png"),
                    reactions: {
                        '❌': 'PalaRose',
                        '➡': 'N00BPR0'
                    }
                },
                {
                    name: 'N00BPR0',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Rosa", inline: true },
                            { name: "Age:", value: `${currentYear - 2004} `, inline: true },
                            { name: "Country:", value: "Canada", inline: true },
                            { name: "Speaks:", value: "English, Mandarin, French (Basics)", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "PalaRose - Level 19x Paladin\n" +
                                    "🤍 __N00BPR0 - Level 16x Bishop__ 🤍"
                            }
                        )
                        .setColor("#D633FF")
                        .setImage("https://i.ibb.co/KXP5fRc/N00BPR0.png"),
                    reactions: {
                        '⬅': 'PalaRose',
                        '❌': 'N00BPR0'
                    }
                }
            ], 60000)
            member.start()
        }

        // Jenn
        else if (name.toLowerCase() === "jenn") {
            message.reply("Here's info on Jenn! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'NinjaJenn',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Jenny/Jenn", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Canada", inline: true },
                            { name: "Speaks:", value: "English, French, Greek", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __NinjaJenn - Level 17x Night Lord__ 🤍\n" +
                                    "Bullseyeboi - Level 14x Bowmaster\n" +
                                    "FrozenQueenX - Level 14x Bishop"
                            }
                        )
                        .setColor("#6106DA")
                        .setImage("https://i.ibb.co/L5VyB5S/Ninja-Jenn.png"),
                    reactions: {
                        '❌': 'NinjaJenn',
                        '➡': 'Bullseyeboi'
                    }
                },
                {
                    name: 'Bullseyeboi',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Jenny/Jenn", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Canada", inline: true },
                            { name: "Speaks:", value: "English, French, Greek", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "NinjaJenn - Level 17x Night Lord\n" +
                                    "🤍 __Bullseyeboi - Level 14x Bowmaster__ 🤍\n" +
                                    "FrozenQueenX - Level 14x Bishop"
                            }
                        )
                        .setColor("#6106DA")
                        .setImage("https://i.ibb.co/HG3kJcb/Bullseyeboi.png"),
                    reactions: {
                        '⬅': 'NinjaJenn',
                        '➡': 'FrozenQueenX'
                    }
                },
                {
                    name: 'FrozenQueenX',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Jenny/Jenn", inline: true },
                            { name: "Age:", value: `${currentYear - 1997} `, inline: true },
                            { name: "Country:", value: "Canada", inline: true },
                            { name: "Speaks:", value: "English, French, Greek", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "NinjaJenn - Level 17x Night Lord\n" +
                                    "Bullseyeboi - Level 14x Bowmaster\n" +
                                    "🤍 __FrozenQueenX - Level 14x Bishop__ 🤍"
                            }
                        )
                        .setColor("#6106DA")
                        .setImage("https://i.ibb.co/1dqPnBK/Frozen-Queen-X.png"),
                    reactions: {
                        '⬅': 'Bullseyeboi',
                        '❌': 'FrozenQueenX'
                    }
                },
            ], 60000)
            member.start()
        }

        // JJ
        else if (name.toLowerCase() === "jj") {
            message.reply("Here's info on JJ! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: '28thOfJune',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "JJ", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Malay, Cantonese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __28thofJune - Level 15x Night Lord__ 🤍\n" +
                                    "JJBishop - Level 17x Bishop"
                            }
                        )
                        .setColor("#000000")
                        .setFooter("Twitch: twitch.tv/sixpackgamer")
                        .setImage("https://i.ibb.co/6yWwQn0/28thof-June.png"),
                    reactions: {
                        '❌': '28thOfJune',
                        '➡': 'JJBishop'
                    }
                },
                {
                    name: 'JJBishop',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "JJ", inline: true },
                            { name: "Age:", value: `${currentYear - 1994} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English, Chinese, Malay, Cantonese", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "28thofJune - Level 15x Night Lord\n" +
                                    "🤍 __JJBishop - Level 17x Bishop__ 🤍"
                            }
                        )
                        .setColor("#000000")
                        .setFooter("Twitch: twitch.tv/sixpackgamer")
                        .setImage("https://i.ibb.co/F6t6qzv/JJBishop.png"),
                    reactions: {
                        '⬅': '28thOfJune',
                        '❌': 'JJBishop'
                    }
                }
            ], 60000)
            member.start()
        }

        // James
        else if (name.toLowerCase() === "james") {
            message.reply("Here's info on James! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'Snikt',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "James", inline: true },
                            { name: "Age:", value: `${currentYear - 1992} `, inline: true },
                            { name: "Country:", value: "USA", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __Snikt - Level 200 Shadower__ 🤍\n" +
                                    "PkewPkew - Level 200 Corsair"
                            }
                        )
                        .setColor("#241773")
                        .setImage("https://i.ibb.co/47kDjVM/Snikt.png"),
                    reactions: {
                        '❌': 'Snikt',
                        '➡': 'PkewPkew'
                    }
                },
                {
                    name: 'PkewPkew',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "James", inline: true },
                            { name: "Age:", value: `${currentYear - 1992} `, inline: true },
                            { name: "Country:", value: "USA", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Snikt - Level 200 Shadower\n" +
                                    "🤍 __PkewPkew - Level 200 Corsair__ 🤍"
                            }
                        )
                        .setColor("#00DD00")
                        .setImage("https://i.ibb.co/JCJLv8r/PkewPkew.png"),
                    reactions: {
                        '⬅': 'Snikt',
                        '❌': 'PkewPkew'
                    }
                }
            ], 60000)
            member.start()
        }

        // Sabi
        else if (name.toLowerCase() === "sabi") {
            message.reply("Here's info on Sabi! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'Kwin',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Sabina", inline: true },
                            { name: "Age:", value: `${currentYear - 1991} `, inline: true },
                            { name: "Country:", value: "Sweden", inline: true },
                            { name: "Speaks:", value: "Swedish, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __Kwin - Level 17x Hero__ 🤍\n" +
                                    "Kwinie - Level 12x Bishop"
                            }
                        )
                        .setColor("#C35DAE")
                        .setImage("https://i.ibb.co/cYnW9Fw/Kwin.png"),
                    reactions: {
                        '❌': 'Kwin',
                        '➡': 'Kwinie'
                    }
                },
                {
                    name: 'Kwinie',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Sabina", inline: true },
                            { name: "Age:", value: `${currentYear - 1991} `, inline: true },
                            { name: "Country:", value: "Sweden", inline: true },
                            { name: "Speaks:", value: "Swedish, English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "Kwin - Level 17x Hero\n" +
                                    "🤍 __Kwinie - Level 12x Bishop__ 🤍"
                            }
                        )
                        .setColor("#C35DAE")
                        .setImage("https://i.ibb.co/41nDpPV/Kwinie.png"),
                    reactions: {
                        '⬅': 'Kwin',
                        '❌': 'Kwinie'
                    }
                }
            ], 60000)
            member.start()
        }

        // Cyrus
        else if (name.toLowerCase() === "cyrus") {
            message.reply("Here's info on Cyrus! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'xIcedCoffee',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Cyrus", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "Chinese, English, Malay, Basic Thai and French", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __xIcedCoffee - Level 200 Hero__ 🤍\n" +
                                    "HotCoffee- Level 15x Bishop"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/C5qSkrT/x-Iced-Coffee.png"),
                    reactions: {
                        '❌': 'xIcedCoffee',
                        '➡': 'HotCoffee'
                    }
                },
                {
                    name: 'HotCoffee',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Cyrus", inline: true },
                            { name: "Age:", value: `${currentYear - 1998} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "Chinese, English, Malay, Basic Thai and French", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "xIcedCoffee - Level 200 Hero\n" +
                                    "🤍 __HotCoffee- Level 15x Bishop__ 🤍"
                            }
                        )
                        .setColor("#000000")
                        .setImage("https://i.ibb.co/Wt2qRJ7/Hot-Coffee.png"),
                    reactions: {
                        '⬅': 'xIcedCoffee',
                        '❌': 'HotCoffee'
                    }
                }
            ], 60000)
            member.start()
        }

        /* ---------------------------------------- GONE BUT NOT FORGOTTEN ---------------------------------------- */
        // Chris
        else if (name.toLowerCase() === "chris") {
            message.reply("Here's info on Chris! 😉")
            let member = new Menu(message.channel, message.author.id, [
                {
                    name: 'DrKris',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Chris", inline: true },
                            { name: "Age:", value: `${currentYear - 1996} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "🤍 __DrKris - Level 200 Bishop__ 🤍\n" +
                                    "Chris4ReaL - Level 190 Night Lord\n" +
                                    "SamuraiChris - Level 184 Paladin\n" +
                                    "CutePaws - Level 155 Buccaneer\n" +
                                    "MarXmaN - Level 134 Marksman"
                            }
                        )
                        .setColor("#0A0A0A")
                        .setImage("https://i.ibb.co/N60TyN8/DrKris.png"),
                    reactions: {
                        '❌': 'DrKris',
                        '➡': 'Chris4ReaL'
                    }
                },
                {
                    name: 'Chris4ReaL',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Chris", inline: true },
                            { name: "Age:", value: `${currentYear - 1996} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DrKris - Level 200 Bishop\n" +
                                    "🤍 __Chris4ReaL - Level 190 Night Lord__ 🤍\n" +
                                    "SamuraiChris - Level 184 Paladin\n" +
                                    "CutePaws - Level 155 Buccaneer\n" +
                                    "MarXmaN - Level 134 Marksman"
                            }
                        )
                        .setColor("#0A0A0A")
                        .setImage("https://i.ibb.co/C8vWbLP/Chris4-Rea-L.png"),
                    reactions: {
                        '⬅': 'DrKris',
                        '➡': 'SamuraiChris'
                    }
                },
                {
                    name: 'SamuraiChris',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Chris", inline: true },
                            { name: "Age:", value: `${currentYear - 1996} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DrKris - Level 200 Bishop\n" +
                                    "Chris4ReaL - Level 190 Night Lord\n" +
                                    "🤍 __SamuraiChris - Level 184 Paladin__ 🤍\n" +
                                    "CutePaws - Level 155 Buccaneer\n" +
                                    "MarXmaN - Level 134 Marksman"
                            }
                        )
                        .setColor("#0A0A0A")
                        .setImage("https://i.ibb.co/hBKx7BK/Samurai-Chris.png"),
                    reactions: {
                        '⬅': 'Chris4ReaL',
                        '➡': 'CutePaws'
                    }
                },
                {
                    name: 'CutePaws',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Chris", inline: true },
                            { name: "Age:", value: `${currentYear - 1996} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DrKris - Level 200 Bishop\n" +
                                    "Chris4ReaL - Level 190 Night Lord\n" +
                                    "SamuraiChris - Level 184 Paladin\n" +
                                    "🤍 __CutePaws - Level 155 Buccaneer__ 🤍\n" +
                                    "MarXmaN - Level 134 Marksman"
                            }
                        )
                        .setColor("#0A0A0A")
                        .setImage("https://i.ibb.co/ZYRfj4L/CutePaws.png"),
                    reactions: {
                        '⬅': 'SamuraiChris',
                        '➡': 'MarXmaN'
                    }
                },
                {
                    name: 'MarXmaN',
                    content: new MessageEmbed({
                        title: 'Member of Crew',
                    })
                        .addFields(
                            { name: "Name:", value: "Chris", inline: true },
                            { name: "Age:", value: `${currentYear - 1996} `, inline: true },
                            { name: "Country:", value: "Malaysia", inline: true },
                            { name: "Speaks:", value: "English", inline: true },
                            {
                                name: "Maple Character(s) IGN, Level and Job:",
                                value:
                                    "DrKris - Level 200 Bishop\n" +
                                    "Chris4ReaL - Level 190 Night Lord\n" +
                                    "SamuraiChris - Level 184 Paladin\n" +
                                    "CutePaws - Level 155 Buccaneer\n" +
                                    "🤍 __MarXmaN - Level 134 Marksman__ 🤍"
                            }
                        )
                        .setColor("#0A0A0A")
                        .setImage("https://i.ibb.co/C7D8F2c/MarXmaN.png"),
                    reactions: {
                        '⬅': 'CutePaws',
                        '❌': 'MarXmaN'
                    }
                },
            ], 60000)
            member.start()
        }
        else {
            return message.reply("Incorrect name!\nTo get the list of members, type: `c.member`")
        }
    }
})

bot.login(process.env.TOKEN);