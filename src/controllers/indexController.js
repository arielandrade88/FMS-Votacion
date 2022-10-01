let {getLeagues} = require('../database/dataBase');

module.exports = {

    index: (req, res) => {
        league = getLeagues;          
                res.render('index', {
                    title: 'FMS - Inicio',
                    league,
                })
            }
            
    }