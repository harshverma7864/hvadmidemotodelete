const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    email : {type : String  }, 
    address : {type : String },
    password : {type : String }
});

mongoose.models = {}
export default mongoose.model("Products", productSchema);