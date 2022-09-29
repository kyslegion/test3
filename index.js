// import express from 'express';
let express =require('express');
let app=express();
let path =require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));

app.get('/',(req,res)=>{
    console.log(req.route.path);
    res.sendFile(path.join(__dirname, './connexion.html'));
});
// app.get('/',(req,res)=>{
//     res.json({
//         hello:"hi",
//     })
// })





app.listen('3000',()=>{
    console.log("Serveur 3000");
})