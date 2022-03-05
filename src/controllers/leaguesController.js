let db = require('../database/models');

module.exports = {

    league: (req, res) => {
        let league = db.Leagues.findOne({
            where: {
                id: req.params.league
            },
        })
        let mcsArgentina = db.Mcs.findAll({
            limit: 12
        })
        let mcsChile = db.Mcs.findAll({
            offset: 12,
            limit: 12
        })
        let mcsColombia = db.Mcs.findAll({
            offset: 24,
            limit: 12
        })
        let mcsEspaña = db.Mcs.findAll({
            offset: 36,
            limit: 12
        })
        let mcsMexico = db.Mcs.findAll({
            offset: 48,
            limit: 12
        })
        let mcsPeru = db.Mcs.findAll({
            offset: 60,
            limit: 12
        })
        Promise.all([league, mcsArgentina, mcsChile, mcsColombia, mcsEspaña, mcsMexico, mcsPeru])
            .then(([league, mcsArgentina, mcsChile, mcsColombia, mcsEspaña, mcsMexico, mcsPeru]) => {
                res.render('league', {
                    title: `FMS - ${req.params.league}`,
                    country: `${req.params.league}`,
                    Argentina: mcsArgentina,
                    Chile: mcsChile,
                    Colombia: mcsColombia,
                    España: mcsEspaña,
                    Mexico: mcsMexico,
                    Peru: mcsPeru,
                    league: league
                })
            })
    }}