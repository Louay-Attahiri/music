const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'previous',
    description: 'speel het vorige nummer in de playlist af',
    run: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)

        if(!queue.previousSong) return interaction.reply({ content: 'Ik kan het vorige nummer niet vinden.', ephemeral: true});
        queue.previous();

        return client.scripts.simpelEmbed(`Vorige **nummer** word nu afgespeeld.`, interaction);
    }
};


