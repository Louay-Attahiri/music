const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'previous',
    description: 'speel het vorige nummer in de playlist af',
    run: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });

        if(!queue.previousSong) return interaction.reply({ content: 'Ik kan het vorige nummer niet vinden.', ephemeral: true});
        queue.previous();


        const embed = new MessageEmbed()
            .setDescription(`Vorige nummer word nu afgespeeld.`)
            .setColor(randomKleur())

        interaction.reply({ embeds: [embed] });




    }
};


