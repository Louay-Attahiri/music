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
            required: false,
        }
    ],
    run: async(interaction, client) => {
        const volume = interaction.options.getNumber('volume');
        const queue = client.distube.getQueue(interaction);
        
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        if(!volume) return client.scripts.simpelEmbed(`Huidige volume is **${queue.volume}%**.`, interaction);
        
        if (volume > 150) return interaction.reply({ content: 'Volume moet tussen de **1** en **150** zijn.', ephemeral: true });

        queue.setVolume(volume);
        return client.scripts.simpelEmbed(`Volume succesvol aangepast naar **${volume}%**.`, interaction);
    }
};
