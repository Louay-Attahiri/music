const searchNoResult = () => {
    const kanaalLeeg = new MessageEmbed().setDescription(`Geen resulaten gevonden voor **${query}`).setColor('#ff0000')
    client.distube.interactie.reply({ embeds: [kanaalLeeg] });
}

module.exports = {
    searchNoResult
}