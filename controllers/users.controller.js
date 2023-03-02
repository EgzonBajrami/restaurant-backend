const jwt = require('jsonwebtoken');

const userModel = require('../models/users.models');
const bcrypt = require('bcrypt');

module.exports = {
    add: async(params) =>{
        console.log(params);
        const {password,firstName,lastName,age,email} = params

        const hashedPassword = await bcrypt.hash(params.password, parseInt(process.env.SALT));
        console.log(hashedPassword);

        const result = await userModel.create({password:hashedPassword,firstName:params.firstName,
            lastName:params.lastName,
            age:params.age,email:params.email,role:'ADMIN'});
        console.log(result);
        return result._id;
    }
}