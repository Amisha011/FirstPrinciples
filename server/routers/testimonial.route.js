const express=require("express");
const {addTestimonial,getAllTestimonials,updateTestimonial,deleteTestimonial} = require("../controllers/testimonialApi");


//create router
const router=express.Router();

//controllers
router.post('/addTestimoinal',addTestimonial);
router.get('/getAllTestimoinal',getAllTestimonials);
// router.put('/updateTestimoinal/:id',testimonialController.updatetestimonial);
// router.delete('/deleteTestimoinal/:id',testimonialController.deletetestimonial);

module.exports=router;