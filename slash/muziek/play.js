const { MessageEmbed } = require('discord.js');
const { randomKleur } = require('../../scripts/randomKleur');

module.exports = {
  name: 'play',
  description: 'Voeg een nummer toe aan de wachtrij',
  options: [
    {
      name: 'nummer',
      description: 'Nummer die je wilt toevoegen',
      type: 3,
      required: true,
    },
  ],
  timeout: 10000,
  run: async (interaction, client) => {

    const gebruiker = interaction.member;
    const nummer = interaction.options.getString('nummer');

    client.scripts.simpelEmbed(`🔍 | **Aan het zoeken...**`, interaction);

    client.distube.play(gebruiker.voice.channel, nummer, {
      member: gebruiker,
      textChannel: interaction.channel,
      interaction
    });

  }
};
