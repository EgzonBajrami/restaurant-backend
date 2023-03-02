var express = require('express');
var router = express.Router();
const {verifyToken} = require('../middlewares/auth.middleware')
const productsController = require('../controllers/products.controller');
const {jsonResponse} = require('../lib/helper')
const upload = require('../lib/upload.js')

/* GET home page. */
router.post('/addProduct', verifyToken, async(req,res)=>{
    try{
        const result = await productsController.addProduct(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));

    }
})
router.post('/add-image/:id', verifyToken, upload.single('product-image'), async(req,res)=>{
    try{
        const result = await productsController.createImage(req.params.id, req.file);
        res.json(jsonResponse(result));
    
    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.get('/getPizzas/:type', async(req,res)=>{
    try{
        const result = await productsController.getPizzas(req.params.type);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})


module.exports = router;
