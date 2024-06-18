const express=require('express');
const app=express();
const PORT=8000;
app.get("/",(req,res)=>{
   res.json({message:"Manchester United"})
})

app.listen(PORT,()=>{
    console.log("Server Running on 8000");
})