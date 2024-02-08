const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema(
    {
        bookName:String,
        author:String,
        price:String,
        publisher:String
    }
)
module.exports=mongoose.model("book",bookSchema)