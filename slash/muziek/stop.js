const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'stop',
    description: 'Stop huidige wachtrij en verwijder alle nummers',
    run: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ content: 'Er zit momenteel niks in de wachtrij.', ephemeral: true });
        queue.stop()
        const embed = new MessageEmbed().setDescription(`Wachtrij succesvol gestopt.`).setColor(randomKleur())
        return interaction.reply({ embeds: [embed] });
    }
};
