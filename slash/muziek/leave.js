const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { randomKleur } = require("../../scripts/randomKleur");

module.exports = {
    name: 'leave',
    description: 'Laat de bot jou huidige kanaal joinen',
    run: async (interaction, client) => {
        if (!interaction.guild.me.voice.channel) return interaction.reply({ content: 'Ik ben niet verbonden met een spraakkanaal.', ephemeral: true })
        const voiceChannel = interaction.guild.me.voice.channel;


        client.distube.voices.leave(voiceChannel);

        const embed = new MessageEmbed()
            .setDescription(`Ik ben het kanaal ${voiceChannel} geleaved.`)
            .setColor(randomKleur())

        interaction.reply({ embeds: [embed] });

    }
};


