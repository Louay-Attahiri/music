const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'resume',
    description: 'Hervat het huidige nummer',
    run: async(interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        else {
            if (queue.paused) {
                queue.resume();
                return client.scripts.simpelEmbed(`Huidige nummer succesvol hervat.`, interaction);
            } else return interaction.reply({ content: 'Huidige nummer word al afgespeeld.', ephemeral: true });
        }
    }
};


