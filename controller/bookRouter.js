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

router.post("/book-search",async(req,res)=>{
    let input=req.body
    let data=await bookModel.find(input)
    res.json(data)
})

router.get("/book-view",async(req,res)=>{
    let data=await bookModel.find()
    res.json(data)
})
module.exports=router