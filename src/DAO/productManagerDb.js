const { write } = require("fs");
const fs = require("fs/promises");

export class ProductManager{
    constructor(){
        this.path="./src/dao/productManager/products.json"
    }


    readProducts= async()=>{
        let products= JSON.parse(await fs.readFile(this.path,"utf-8")) ;
        return products;
    }

    writeProducts= async(producto)=>{
        try {
            await fs.writeFile(this.path, JSON.stringify(producto))
            console.log("success")
        } catch (error) {
            console.error("error de escritura")
        }
       
    }
    //metodo que se encarga de validar la existencia de un producto
    existent= async(id)=>{
        let products = await JSON.parse(await fs.readFile(this.path,"utf-8"))
        return products.find((prod)=>prod.id===id)
    }
}


const obj= {nombre:"manzana", precio:1500, cantidad: 12}

const maganerPrueba= new ProductManager();
maganerPrueba.writeProducts(obj)