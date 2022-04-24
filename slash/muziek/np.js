const { MessageEmbed } = require('discord.js');
const { randomKleur } = require('../../scripts/randomKleur');

module.exports = {
    name: 'nowplaying',
    description: 'Sla huidige nummer over',
    run: async (interaction, client) => {
        

        const queue = client.distube.getQueue(interaction);
        
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        const song = queue.songs[0]; 
        const toegevoegdEmbed = new MessageEmbed()
            .setTitle(song.name)
            .setURL("https://discord.js.org/")
            .setColor(randomKleur())
            .setAuthor({
                name: "Word nu afgespeeld",
                iconURL: song.user.displayAvatarURL(),
            })
            .setThumbnail(song.thumbnail)
            .addFields(
                { name: "Duur:", value: song.formattedDuration, inline: true },
                { name: "Kanaal:", value: song.uploader.name, inline: true },
                {
                    name: "Wachtrij duur:",
                    value: `${queue.formattedDuration}`,
                    inline: true,
                },
                {
                    name: "Positie in queue:",
                    value: `${queue.songs.length}`,
                    inline: true,
                }
            )
        client.distube.interactie.reply({ embeds: [toegevoegdEmbed] });

    }
};
