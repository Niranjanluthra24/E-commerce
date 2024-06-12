const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Vendor = require("../Modal/Vendors");

router.post('/createvendor', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt);
    const vendor = new Vendor({
      username: req.body.username,
      company_email: req.body.company_email,
      password: secpass,
      company_name: req.body.company_name,
      company_address: req.body.company_address,
      mobile_no: req.body.mobile_no,
      product_type: req.body.product_type,
      membership_type: req.body.membership_type,
      GST_no: req.body.GST_no,
      status:req.body.status
    });

    await vendor.save();
    res.json({ success: true, vendor });

    console.log(req.body);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post('/removevendor' , async(req,res)=>{
    try{
        const vendor = await Vendor.findOneAndDelete(req.body.GST_no);
        res.json({success:true,vendor});
        console.log("removed");
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
})
router.get('/vendor',async(req,res)=>{
    const vendor = await Vendor.find({});
    res.json({success:true,vendor});
})
router.post('/blockvendor',async(req,res)=>{
    try{
        const vendor = await Vendor.findOneAndUpdate(req.body.GST_no,{status:req.body.status});
        res.json({success:true,vendor});
        console.log("blocked");
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
            }
})
router.post('/unblockvendor',async(req,res)=>{
    try{
        const vendor = await Vendor.findOneAndUpdate(req.body.GST_no,{status:req.body.status});
        res.json({success:true,vendor});
        console.log("unblocked");
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
            }
})          
module.exports = router;
