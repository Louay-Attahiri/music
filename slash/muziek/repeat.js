const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'repeat',
    description: 'Herhaal hudige nummer of wachtrij',
    options: [
        {
            name: 'type',
            description: 'Soort dat je wilt herhalen',
            type: 10,
            required: true,
            choices: [{
                name: 'uitschakelen',
                value: 0,
            },
            {
                name: 'wachtrij',
                value: 1,
            },
            {
                name: 'nummer',
                value: 2,
            }
            ]
        },
    ],
    run: async (interaction, client) => {
        let type = interaction.options.getNumber('type');

        const queue = client.distube.getQueue(interaction);
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });

        console.log(queue.repeatMode, type);
        if (type === queue.repeatMode) {
            switch (type) {
                case 0:
                    return interaction.reply({ content: 'Repeat mode is al uitgeschakeld.', ephemeral: true })
                    break;
                case 1:
                    return interaction.reply({ content: 'Repeat mode is al ingeschakeld.', ephemeral: true })
                    break;
                case 2:
                    return interaction.reply({ content: 'Repeat mode is al ingeschakeld.', ephemeral: true })
                    break;
            }
        }

        type = await queue.setRepeatMode(type);

        switch (type) {
            case 0:
                type = 'uitgeschakeld'
                break;
            case 1:
                type = 'ingeschakeld'
                break;
            case 2:
                type = 'ingeschakeld'
                break;
        }
        return client.scripts.simpelEmbed(`Repeat is succesvol **${type}**.`, interaction);
    }
}
