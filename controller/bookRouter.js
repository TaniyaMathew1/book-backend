const express=require("express")
const bookModel=require("../model/bookModel")
const router=express.Router()

router.post("/book-add",async(req,res)=>{
    let data=req.body
    let book=new bookModel(data)
    let result=await book.save()
    res.json({
        status:"success"
    })
})
module.exports=router