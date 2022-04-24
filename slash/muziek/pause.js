module.exports = {
    name: 'pause',
    description: 'Pauzeer huidige nummer',
    run: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        if (queue.paused) return interaction.reply({ content: 'Huidige nummer is al gepauzeerd.', ephemeral: true });
        else {
            queue.pause();
            client.scripts.simpelEmbed('Huidige nummer succesvol gepauzeerd.', interaction);
        }
    }
};


