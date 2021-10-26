const { /*Client,*/ MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
// const bot = new Client()

// bot.on('ready', () => {
//     console.info(`${bot.user.tag} is now online! (apq.js)`); // BOT online
// });

// const prefix = 'c.';
// bot.on('message', message => {
// if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

const APQ = () => {
  // if (message.content.toLowerCase() === 'c.apq') {
    let apq = new Menu(message.channel, message.author.id, [
      {
        name: 'APQ1',
        content: new MessageEmbed({
          title: 'APQ Guide #1'
        })
          .setDescription('You may choose your preferred APQ guide by changing the image with the provided reactions.')
          .setColor('#223DDD')
          .setImage('https://i.ibb.co/LN00p9q/apq1.jpg')
          .setFooter('Image From:\nhttps://mapleroyals.com/forum/threads/amoria-party-quest-apq.31743/'),
        reactions: {
          '❌': 'APQ1',
          '2️⃣': 'APQ2'
        }
      },
      {
        name: 'APQ2',
        content: new MessageEmbed({
          title: 'APQ Guide #2',
        })
          .setDescription('You may choose your preferred APQ guide by changing the image with the provided reactions.')
          .setColor('#223DDD')
          .setImage('https://i.ibb.co/1JDzZxQ/apq2.png')
          .setFooter(
            'Image Reference From:\nhttps://mapleroyals.com/forum/threads/comprehensive-apq-guide-updated-feb-2021.172942/#stage2\n\n' +
            'Image Edited By: Gel'
          ),
        reactions: {
          '1️⃣': 'APQ1',
          '❌': 'APQ2'
        }
      }
    ], 60000)
    apq.start()
  // }
}
//   }
// })

// bot.login(process.env.TOKEN);

module.exports = {
  APQ
}