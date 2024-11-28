const mongoose =require('mongoose')


const registerschema =new mongoose.Schema({
      name:String,
      email:String,
      password:String
})
const registermodal=mongoose.model('register',registerschema)

module.exports =registermodal