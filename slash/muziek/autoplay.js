const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'autoplay',
    description: 'Automatisch nummers toevoegen aan de wachtrij',
    options: [
        {
            name: 'schakelaar',
            description: 'Autplay in of uitschakelen',
            type: 3,
            required: true,
            choices: [{
                name: 'inschakelen',
                value: 'true'
            },
            {
                name: 'uitschakelen',
                value: 'false'
            }
            ]
        },
    ],
    run: async (interaction, client) => {
        let schakel = interaction.options.getString('schakelaar');
        if(schakel === 'true') schakel = true;
        else schakel = false;

        const queue = client.distube.getQueue(interaction);
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });

        console.log(queue.autoplay, schakel);
        if (schakel === queue.autoplay) return interaction.reply({ content: `Autoplay is al ${queue.autoplay ? 'ingeschakeld.' : 'uitgeschakeld.'}`, ephemeral: true});
        await queue.toggleAutoplay(queue);

        return client.scripts.simpelEmbed(`Autoplay is succesvol ${queue.autoplay ? 'ingeschakeld.' : 'uitgeschakeld.'}`, interaction);
    }
}
