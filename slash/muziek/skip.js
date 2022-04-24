const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'skip',
    description: 'Sla huidige nummer over',
    options: [
        {
            name: 'aantal',
            description: 'aantal nummer dat je wilt skippen',
            type: 10,
            required: false,
        }
    ],
    run: async (interaction, client) => {
        const skip = interaction.options.getNumber('aantal') || 1;
        const queue = client.distube.getQueue(interaction);

        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true })
        try {
            if (skip >= queue.songs.length) return interaction.reply({ content: `Het maximale aantal nummers dat je kan skippen is **${queue.songs.length - 1}**.`, ephemeral: true })
            queue.skip(skip);
            return client.scripts.simpelEmbed(`Huidige **nummer** succesvol geskipt.`, interaction);
        } catch (e) {
            console.log(e);
            return interaction.reply({ content: 'Er is een fout opgetreden!' });
        }
    }
};
