const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const { laadMuziek } = require('./modules/muziek');
const { laadSlash } = require('./slash');
const { MessageEmbed} = require('discord.js');
const { randomKleur } = require('./scripts/randomKleur');
require('dotenv');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_INVITES,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_INVITES,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
		Intents.FLAGS.GUILD_VOICE_STATES
	], partials: [
		"MESSAGE",
		"CHANNEL",
		"GUILD_MEMBER"
	]
});

require('colors');


client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.buttons = new Collection();


["handlers", "events", "slash", "buttons"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

laadMuziek(client);
laadSlash();

const simpelEmbed = (tekst, interaction) => {
	const embed = new MessageEmbed()
		.setDescription(tekst)
		.setColor(randomKleur())

	interaction.reply({ embeds: [embed] })
}

client.scripts = {
	simpelEmbed
};


client.login(process.env.TOKEN);