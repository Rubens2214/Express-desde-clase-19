const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000, ()=> console.log("servidor corriendo"));

app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

const productsRoutes = require("./routers/products");
const usersRoutes = require("./routers/users");
const mainRoutes = require("./routers/main");
const indexRoutes = require("./routers/index");
//Rutas//
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/",mainRoutes);
app.use("/index",indexRoutes);



