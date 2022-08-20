const path = require("path")

const usersControllers = {
    index: (req, res)=>{
        return res.sendfile(path.resolve(__dirname, "..views/users.html"))
    },
    create: (req,res)=>{
        return res.send("Llegarste crear usuarios")
    },
    register: function (){},
    delete: function (){},
    update: function (){},
    detail: (req,res)=>{
        return res.send("Detalle de usuarios"+ req.params.idUser )},
    
    login: function (){},
};

module.exports = usersControllers