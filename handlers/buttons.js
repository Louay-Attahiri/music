const { readdirSync } = require('fs');
module.exports = async(client) => {
    readdirSync("./buttons/").map(async dir => {
        readdirSync(`./buttons/${dir}/`).map(async cmd=> {
            let pull = require(`../buttons/${dir}/${cmd}`)
            client.buttons.set(pull.name, pull)
        })
    })
}