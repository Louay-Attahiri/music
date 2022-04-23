const { MessageEmbed } = require('discord.js');
const { randomKleur } = require('../../scripts/randomKleur');

module.exports = {
  name: 'playskip',
	description: 'Voeg een nummer toe aan de wachtrij en speel hem meteen af',
	options: [
		{
			name: 'nummer',
			description: 'Nummer die je wilt toevoegen',
			type: 3,
			required: true,
		},
	],
  run: async(interaction, client) => {

    const gebruiker = interaction.member;
    const nummer = interaction.options.getString('nummer');

    if (!gebruiker.voice.channel) return interaction.reply({ content: "Je moet in een spraakkanaal zitten om dit commando te kunnen gebruiken!", ephemeral: true });
    else {
      client.distube.interactie = interaction;

      const embed = new MessageEmbed()
        .setDescription(`🔍 | **Aan het zoeken...**`).setColor(randomKleur())
      interaction.reply({ embeds: [embed] });

      client.distube.play(gebruiker.voice.channel, nummer, {
        member: gebruiker,
        textChannel: interaction.channel,
        interaction,
        skip: true
      });
    }
  }
};
