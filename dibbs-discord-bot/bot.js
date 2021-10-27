const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('message', message => {
	console.log(message.author.id);
});

client.login(process.env.BOT_TOKEN);


