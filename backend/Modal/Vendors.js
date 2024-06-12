const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Vendorschema = new Schema({
    company_name:{
        type:String,
        required:true,
    },
    company_address:{
        type:String,
        required:true,
    },
    company_email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    mobile_no:{
        type:Number,
        required:true,
    },
    GST_no:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    product_type:{
        type:String,
        required:true,
    },
    membership_type:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Vendor",Vendorschema);