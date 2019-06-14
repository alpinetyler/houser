module.exports = {
    read: (req, res) => {
        const db = req.app.get('db')

        db.getHouses().then((response) => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },

    create: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip} = req.body

        db.create_house([name, address, city, state, zip])
            .then((house) => res.status(200).send(house))
            .catch(err => console.log(err))

    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
    
        db.delete_house([id]).then(resp => {
          res.status(200).send(resp);
        });
      },
}