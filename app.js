const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bookRouter=require("./controller/bookRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/bookDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/book",bookRouter)

app.listen(3001,()=>{
    console.log("server running")
})