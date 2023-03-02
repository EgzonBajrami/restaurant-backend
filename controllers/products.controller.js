const productsModel = require('../models/products.models')

module.exports ={
    addProduct:async(params) =>{
        console.log(params);
        const result = await productsModel.create({
            title:params.title,
            description:params.description,
            section:params.section,
            ingredients:params.ingredients,
            price:params.price
        })
        return result;

    },
    createImage: async (id, file) => {
        let fileName = null
        console.log(id);
     
        if(file){
          fileName =  `/images/${file.filename}` 
        }    
        const postId= await productsModel.findById(id);
        console.log(postId);
        let postImages = postId.image;
        console.log(postImages);
        postImages = [fileName];

  
        const result = await productsModel.findByIdAndUpdate(id,{image:postImages}).exec();
        console.log(result);
       
        return result 
      },
      getPizzas:async(params) =>{
        const result = await productsModel.find({section:params});
        return result;
      }
}