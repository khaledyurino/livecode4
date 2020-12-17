const { Product, Category } = require('../models') 

class Controller {
  static showAllRunning(req, res) {
    Product.findAll({
      where: {is_discontinued: false}
    })
      .then (products => {
        // console.log(products)
        res.render('productList', {products , category})
        // res.send (products)
      })
      .catch(err => res.send(err))
    
  }

  static discontinueProduct(req, res) {
    let searchedId = req.param.id

    Product.findAll({
      where: {
        id: searchedId
      }
    })
      .then(selected => {
        selected.is_discontinued = true
      })
  }
  
  static showDiscontinued(req, res) {
    Product.findAll({
      where: {
        is_discontinued: true
      }
    })
    .then (discontinued => {
      res.render ("discontinued", discontinued)
    })
  }

  static showCategory(req, res) {
    let category = req.category

    Product.findAll({
      where: {
        category: category
      }
    })
    .then (product => {
      res.render('showcategory', product)
    })
  }

  static AddProductForm(req, res) {
    Category.findAll()
      .then (categories => {
        res.render("formAddProduct", {categories})
      })
      .catch(err => res.send(err))
  }

  static AddProduct(req, res) {
    let name = req.prodName
    let quantity = req.quantity
    let price = req.price
    let category = req.category
    let is_discontinued = false



  }

  static deleteDiscontinued (req, res) {
    let id = req.param.id

    Product.destroy(id)
  }
}

module.exports = Controller