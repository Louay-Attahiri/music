const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'join',
	description: 'Laat de bot jouw huidige kanaal joinen',
    run: async(interaction, client) => {
        let voiceChannel = interaction.member.voice.channel;
        client.distube.voices.join(voiceChannel);

        const embed = new MessageEmbed()
        .setDescription(`Ik ben het kanaal ${voiceChannel} gejoined.`)
        .setColor(randomKleur())

        interaction.reply({ embeds: [embed] });
        
    }
};


