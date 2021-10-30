/**
 * Discord Bot API for DIBS
 */

const express = require('express')
const Discord = require('discord.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS","GUILD_PRESENCES"] });

client.on('message', message => {
	console.log(message.author.id);
});

app.get('/servers', (req, res) => {
	let  o = { servers: [] }
	client.guilds.cache.each(guild => {
		let obj = {};
		obj.id = guild.id;
		obj.name = guild.name;
		obj.icon = guild.icon;
		o.servers.push(obj);
	});
	res.json(o);
});

app.get('/servers/:id', (req, res) => {
	const id = req.params.id;
	const s = client.guilds.cache.get(id);
	let  o = {  }
	o.id = s.id;
	o.name = s.name;
	o.icon = s.icon;
	
	res.json(o);
});

app.get('/servers/:id/users', (req, res) => {
	const id = req.params.id;
	const s = client.guilds.cache.get(id);
	var o = s.members.cache.map(user => user.id);
	res.json(o);
});


app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	client.users.fetch(id).then(
		user => {

			let  o = {  }
			o.id = user.id;
			o.name = user.username;
			o.tag = user.tag;
			o.icon =user.avatar;
			let guilds = client.guilds.cache.filter((guild) => {	
					return guild.members.cache.has(id);
			 });
			 o.servers = guilds.map(g => g.id);

			res.json(o);


		}



	)
});

client.login(process.env.BOT_TOKEN);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


