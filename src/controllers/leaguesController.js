let db = require('../database/models');

module.exports = {

    leagues: (req, res) => {
        const leagues = db.Leagues.findAll()
        const mcs = db.Mcs.findAll()
        Promise.all([leagues, mcs])
            .then(([leagues, mcs]) => {
                res.render('league', {
                    title: `FMS - ${req.params.liga}`,
                    league: leagues,
                    mc: mcs,
                    
                })
               
            })
    },
    
}