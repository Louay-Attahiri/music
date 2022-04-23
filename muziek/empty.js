const { MessageEmbed } = require('discord.js');

const empty = (channel) => {
    const kanaalLeeg = new MessageEmbed().setDescription('Spraakkanaal is leeg. Kanaal verlaten...').setColor('#ff0000')
    channel.send({ embeds: [kanaalLeeg] });

}

module.exports = {
    empty
}