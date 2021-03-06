const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'filter',
    description: 'Filter die je wilt toevoegen aan huidige muziek wachtrij.',
    options: [
        {
            name: 'filter',
            description: 'filter uitschakelen',
            type: 3,
            required: true,
            choices: [{
                name: 'uitschakelen',
                value: 'off'
            },
            {
                name: '3d',
                value: '3d'
            },
            {
                name: 'bassboost',
                value: 'bassboost'
            },
            {
                name: 'echo',
                value: 'echo'
            },
            {
                name: 'karaoke',
                value: 'karaoke'
            },
            {
                name: 'nightcore',
                value: 'nightcore'
            },
            {
                name: 'vaporwave',
                value: 'vaporwave'
            },
            {
                name: 'flanger',
                value: 'flanger'
            },
            {
                name: 'gate',
                value: 'gate'
            },
            {
                name: 'haas',
                value: 'haas'
            },
            {
                name: 'reverse',
                value: 'reverse'
            },
            {
                name: 'surround',
                value: 'surround'
            },
            {
                name: 'mcompand',
                value: 'mcompand'
            },
            {
                name: 'phaser',
                value: 'phaser'
            },
            {
                name: 'uitschakelen',
                value: 'off'
            },
            {
                name: 'tremolo',
                value: 'tremolo'
            },
            {
                name: 'earwax',
                value: 'earwax'
            },
            ]
        },
    ],
    run: async (interaction, client) => {
        const filter = interaction.options.getString('filter');
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        if (filter === 'off' && queue.filters?.length) {
            queue.setFilter(false);
            return client.scripts.simpelEmbed('Filter(s) succesvol uitgeschakeld.', interaction);
        }
        else if (Object.keys(client.distube.filters).includes(filter)) {
            queue.setFilter(filter);
            return client.scripts.simpelEmbed(`Huidige wachtrij filter(s): \`${queue.filters.join(', ')}\``, interaction);
        } else {
            return interaction.reply({ content: 'Er is een fout opgetreden!' });
        }
    }
};


