import express, { json } from "express";
const app=express();
const PORT= 3000;


//middlewares
app.use(json());

//import route
import productsRoute from "../src/routes/products.route";
app.use("/",productsRoute)



//set handlebars
import { engine } from "express-handlebars";
import { default as mongoose } from "mongoose";
app.engine("handlebars", engine());
app.set("view engine","handlebars")
app.set("views",__dirname+`/views`);



app.get("/", (req,res)=>{
    res.render("index")
})




//set conection mongodb ecomerce cluster
mongoose.connect("mongodb+srv://javiermecker94:8GQVknO1JuiAQ920@ecomerce.9sqyqwu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("conectado a la base de datos")
})
.catch(error=>{console.log("error al conectar ")})




app.listen(PORT,()=>{
    console.log(`servidor en puerto ${PORT}`)
})