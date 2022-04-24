module.exports = {
    name: 'join',
	description: 'Laat de bot jouw huidige kanaal joinen',
    run: async(interaction, client) => {
        let voiceChannel = interaction.member.voice.channel;
        client.distube.voices.join(voiceChannel);

        client.scripts.simpelEmbed(`Ik ben het kanaal ${voiceChannel} gejoined.`, interaction);

        interaction.reply({ embeds: [embed] });
        
    }
};


