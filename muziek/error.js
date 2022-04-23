const muziekError = (channel, error, client) => {
    client.distube.interactie.reply({ content: 'Er is een fout opgetreden!', ephemeral: true });
    console.error(error);
}

module.exports = {
    muziekError
}