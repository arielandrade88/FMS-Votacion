let db = require('../database/models')

module.exports = {

    index: (req, res) => {
        db.Leagues.findAll()
            .then(league => {
                res.render('index', {
                    title: 'FMS - Inicio',
                    league,
                })
            })

    }
}