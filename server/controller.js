

module.exports = {
  getHouses(req, res){
    const db = req.app.get('db')
    db.get_houses().then( dbRes => {
      res.status(200).send(dbRes)
    })
  },
  addHouse(req, res){
    const db = req.app.get('db')
    let {name, address, city, state, zipcode} = req.body
    db.create_house([name, address, city, state, zipcode]).then(dbRes => {
      res.sendStatus(200)
    })
  },
  deleteHouse(req, res){
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_house(id)
    .then(() => res.sendStatus(200))
    .catch( err => {
      res.status(500).send(console.log("you suck", err))
    })
  }
}