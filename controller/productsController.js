const path = require("path")

const productsControllers = {
    list: (req, res)=>{
        return res.render(path.resolve(__dirname, "../views/products.html"))
    },
    products: (req, res)=>{
        return res.render(path.resolve(__dirname, "../views/products.html"))
    },
};

module.exports = productsControllers