var express = require('express');
var router = express.Router();
const {jsonResponse} = require('../lib/helper')
const checkoutController = require('../controllers/checkout.controller')


router.post('/checkout', async(req,res)=>{
    try{
        const result = await checkoutController.checkout(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false))
    }
})

module.exports = router;