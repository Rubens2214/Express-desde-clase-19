const express = require("express");
const router = express.Router();

router.get("/detail",(req,res)=>{
    return res.send("Llegarste a detalles de productos")
});
module.exports= router;