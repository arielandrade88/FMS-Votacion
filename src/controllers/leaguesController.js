let { getMcs } = require('../database/dataBase')

module.exports = {

    league: (req, res) => {
        let mcs = getMcs.filter(mc => {
            return mc.country == `${req.params.league}`
        })
        res.render('league', {
            title: `FMS - ${req.params.league}`,
            country: `${req.params.league}`,
            mcs
        })
    }
    
}
