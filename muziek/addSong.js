const { MessageEmbed } = require('discord.js');
const { randomKleur } = require('../scripts/randomKleur');


const addSong = (queue, song, client) => {
    const toegevoegdEmbed = new MessageEmbed()
        .setTitle(song.name)
        .setURL("https://discord.js.org/")
        .setColor(randomKleur())
        .setAuthor({
            name: "Toegevoegd aan wachtrij",
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
    client.distube.interactie.editReply({ embeds: [toegevoegdEmbed] });
}

module.exports = {
    addSong
}