module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'FMS - Inicio',
            session: req.session,
        })
    }
}