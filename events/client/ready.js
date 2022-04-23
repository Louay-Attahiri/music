require('colors')

module.exports = async client => {   
      console.log(`[Discord API] Logged in as ${client.user.tag}`.magenta);
      client.user.setActivity( 'JULLIE KK MOEDERS!', {type: 'PLAYING' })
};