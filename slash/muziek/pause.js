const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'pause',
	description: 'Pauzeer huidige nummer',
    run: async(interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) {
            return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        } else {
            if (queue.paused) {
                return interaction.reply({ content: 'Huidige nummer is al gepauzeerd.', ephemeral: true });
            } else {
                queue.pause();
                const embed = new MessageEmbed().setDescription('Huidige nummer succesvol gepauzeerd.').setColor(randomKleur())
                return interaction.reply({ embeds: [embed] });
            }
        }
    }
};


