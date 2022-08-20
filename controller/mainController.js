const path = require("path")

const mainControllers = {
    index: (req, res)=>{
        return res.render(path.resolve(__dirname, "../views/home"))
    },
    about: (req,res)=>{
        return res.render(path.resolve(__dirname, "../views/about"))
    },
    detail: (req,res)=>{
        return res.send("Detalle de usuarios"+ req.params.idUser )},
    
    login: function (){},
};

module.exports = mainControllers