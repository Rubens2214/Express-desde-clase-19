const path = require("path")

const indexControllers = {
    index: (req, res)=>{
        return res.render(path.resolve(__dirname, "/views/index"))
    }};

module.exports = indexControllers