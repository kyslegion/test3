import express from 'express';
let app=express();

app.get('/',(req,res)=>{
    res.json({
        hello:"hi",
    })
})




app.listen('3000',()=>{
    console.log("Serveur 3000");
})