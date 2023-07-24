const express=require("express")
const router=express.Router();
const mainController=require("../controllers/mainController")

// app routes

router.get("/",mainController.homepage)
router.get("/about",mainController.about)
router.get("/faqs",mainController.faqs)


module.exports=router