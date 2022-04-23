const { randomKleur } = require("../scripts/randomKleur");
const { MessageEmbed } = require('discord.js')

const finish = (queue) => {
    const embed = new MessageEmbed().setDescription('Alle nummers in de queue zijn afgespeeld.').setColor(randomKleur())
    queue.textChannel.send({ embeds: [embed] });
}

module.exports = {
    finish
}