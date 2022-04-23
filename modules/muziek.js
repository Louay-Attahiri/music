const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { MessageEmbed } = require("discord.js");
const { playSong } = require("../muziek/playSong");
const { addSong } = require("../muziek/addSong");
const { addList } = require("../muziek/addList");
const { muziekError } = require("../muziek/error");
const { empty } = require("../muziek/empty");
const { finish } = require("../muziek/finish");
const { searchNoResult } = require("../muziek/searchNoResult");

const laadMuziek = (client) => {
    client.distube = new DisTube(client, {
        leaveOnStop: false,
        emitNewSongOnly: true,
        emitAddSongWhenCreatingQueue: false,
        emitAddListWhenCreatingQueue: false,
        plugins: [
            new SpotifyPlugin({
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin(),
            new YtDlpPlugin(),
        ],
        youtubeDL: false,
    });



    client.distube

        .on("playSong", (queue, song) => {
            playSong(queue, song, client);
        })

        .on("addSong", (queue, song) => {
            addSong(queue, song, client)
        })

        .on("addList", (queue, playlist) => {
            addList(queue, playlist, client)
        })

        .on("error", (channel, error) => {
            muziekError(channel, error, client);
        })


        .on("empty", (channel, client) => {
            empty(channel)
        }

        )
        .on("searchNoResult", (message, query, client) => {
            searchNoResult()
        }

        )
        .on("finish", (queue, client) => {
            finish(queue)
        });
};

module.exports = {
    laadMuziek
}
