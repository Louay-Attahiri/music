const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'resume',
    description: 'Hetvat het huidige nummer',
    run: async(interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) {
            return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        } else {
            if (queue.paused) {
                queue.resume();
                const embed = new MessageEmbed().setDescription('Huidige nummer succesvol hervat.').setColor(randomKleur())
                return interaction.reply({ embeds: [embed] });
            } else {
                return interaction.reply({ content: 'Huidige nummer word al afgespeeld.', ephemeral: true });
            }
        }
    }
};


