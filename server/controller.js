module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getHouses().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    }
}