const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'volume',
	description: 'Pas de volume aan van de huidige nummer',
    options: [
        {
            name: 'volume',
            description: 'sss',
            type: 10,
            required: true,
        }
    ],
    run: async(interaction, client) => {
        const volume = interaction.options.getNumber('volume');
        const queue = client.distube.getQueue(interaction);
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        if (volume > 150) return interaction.reply({ content: 'Volume moet tussen de 1 en 150 zijn.', ephemeral: true });
        queue.setVolume(volume);
        const embed = new MessageEmbed().setDescription(`Volume succesvol aangepast naar **${volume}**.`).setColor(randomKleur());
        return interaction.reply({ embeds: [embed] }); 
    }
};
