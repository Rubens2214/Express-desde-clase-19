const path = require("path")

const usersControllers = {
    index: (req, res)=>{
        return res.send("Llegarste listado de usuarios")
    },
    create: (req,res)=>{
        return res.send("Llegarste crear usuarios")
    },
    register: (req,res)=>{
        return res.send("Llegarste registracion de usuarios")
    },
    delete: (req,res)=>{
        return res.send("Llegarste eliminacion de usuarios")
    },
    update: (req,res)=>{
        return res.send("Llegarste actualizacion de usuarios")
    },
    detail: (req,res)=>{
        return res.send("Detalle de usuarios"+ req.params.idUser )},
    
};

module.exports = usersControllers