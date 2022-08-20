const express = require("express");
const router = express.Router();

router.get("/products",(req,res)=>{
    return res.send("Llegarste a detalles de productos")
});

router.get("/products/list",(req,res)=>{
    return res.send("Llegarste a listado de productos")
});

module.exports= router;