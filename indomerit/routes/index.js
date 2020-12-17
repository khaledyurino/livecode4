var express = require('express')
var router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', (req,res) => res.send('homepage page'))
router.get('/products', Controller.showAllRunning)

router.get('/products/add', Controller.AddProductForm)
router.post('/products/add', Controller.AddProduct)

router.get('/products/category/:category_id', Controller.showCategory)

router.get('/products/:product_id/discontinued', Controller.discontinueProduct)

router.get('/products/discontinued', Controller.showDiscontinued)

router.get('/products/discontinued/:product_id/remove', Controller.deleteDiscontinued)






module.exports = router

