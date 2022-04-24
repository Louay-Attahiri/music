const Timeout = new Set()
const { MessageEmbed } = require('discord.js');
const humanizeDuration = require("humanize-duration");
const { botID } = require('../../config.json');

const nederlands = humanizeDuration.humanizer({
	language: 'nl'
});

module.exports = async (client, interaction) => {

	if (interaction.isCommand()) {
		if (!client.slash.has(interaction.commandName)) return;
		if (!interaction.guild) return;
		if (!interaction.member.voice.channel) return interaction.reply({ content: "Je moet in een spraakkanaal zitten om dit commando te kunnen gebruiken!", ephemeral: true });
		if(!interaction.guild.me.voice.channel);
		else if(interaction.guild.me.voice.channel.name != interaction.member.voice.channel.name) return interaction.reply({ content: "Je moet in hetzelfde spraakkanaal als mij zitten om dit commando te kunnen gebruiken!", ephemeral: true }); 
		

		client.distube.interactie = interaction;
		const command = client.slash.get(interaction.commandName)
		try {
			if (command.timeout) {
				if (Timeout.has(`${interaction.user.id}${command.name}`)) {
					return interaction.reply({ content: `Je moet **${nederlands(command.timeout, { round: true })}** wachten voordat je dit commando weer kunt gebruiken.`, ephemeral: true })
				}
			}
			command.run(interaction, client);
			Timeout.add(`${interaction.user.id}${command.name}`)
			setTimeout(() => {
				Timeout.delete(`${interaction.user.id}${command.name}`)
			}, command.timeout);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Er is een fout opgetreden!', ephemeral: true });
		}
	}

}


