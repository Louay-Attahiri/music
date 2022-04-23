const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js')
const parse = require('parse-duration');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'seek',
    description: 'Spoel door naar een specifiek stuk in een nummer',
    options: [
        {
            name: 'tijd',
            description: 'bijvoorbeeld 2m 10s',
            type: 3,
            required: true,
        }
    ],
    run: async (interaction, client) => {
        let seconden = interaction.options.getString('tijd');
        seconden = parse(seconden)/ 1000;
        
        
        const queue = client.distube.getQueue(interaction);

        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        if (seconden > queue.songs[0].duration) return interaction.reply({ content: 'De tijd die je hebt opgegeven is langer dan dit nummer!', ephemeral: true });
        const tijd = new Date(seconden * 1000).toISOString().slice(14, 19);

        queue.seek(seconden);
        const embed = new MessageEmbed()
            .setDescription(`Muziek word nu afgespeeld vanaf **${tijd}**.`)
            .setColor(randomKleur())

        interaction.reply({ embeds: [embed] })

        
    }
};
