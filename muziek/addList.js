const { MessageEmbed } = require('discord.js');

const addList = (queue, playlist, client) => {
    playlist.source = playlist.source.charAt(0).toUpperCase() + playlist.source.slice(1);
    const playlistEmbed = new MessageEmbed().setTitle(playlist.name).setURL(playlist.url).setAuthor({ name: "Toegevoegd aan wachtrij", iconURL: playlist.user.displayAvatarURL() }).setThumbnail(playlist.thumbnail)
        .addFields(
            {
                name: "Bron:",
                value: `${playlist.source}`,
                inline: true,
            },
            {
                name: "Duur:",
                value: `${playlist.formattedDuration}`,
                inline: true,
            },
            {
                name: "Positie in wachtrij:",
                value: `${queue.songs.length - queue.songs.length + 1}`,
                inline: true,
            },
            {
                name: "Nummers:",
                value: `${playlist.songs.length}`,
                inline: true,
            })
    client.distube.interactie.reply({ embeds: [playlistEmbed] });
}

module.exports = {
    addList
}