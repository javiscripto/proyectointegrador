
import fs from "fs/promises";

export default class ProductManagerFS {
  constructor() {
    this.path = "products.json";
  }

  writeProduct = async (data) => {
    try {
      let Products = JSON.parse(await fs.readFile(this.path, "utf-8"));
      
      let currentProducts = [...Products, {...data,id:Products.length++}];
      await fs.writeFile(this.path, JSON.stringify(currentProducts));
      console.log("se ha agregado nuevo producto en " + this.path)
      
    } catch (err) {
      console.error(err);
    }
  };

 getAll = async () => {
    try {
      let productsJson = JSON.parse(await fs.readFile(this.path, "utf8"));
      console.log(productsJson)
      //return productsJson;
    } catch (error) {
      console.error("error de lectura");
    }
  };

  getById = async (id) => {
    try {
      let productsJson = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let product = productsJson.find((prod) => prod.id === id);
      if (!product) return "producto no encontrado";
      console.log(product)
    } catch (error) {
      console.error("error de lectura");
    }
  };

  updateProduct = async (id, objImput) => {
    try {
      let productsJson = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let productToUpdate = productsJson.find((prod) => prod.id === id);
      if (!productToUpdate) return "product not found";
      Object.assign(productToUpdate, objImput);
      console.log("producto actualizado") ;
      console.log(productsJson)
    } catch (error) {
      console.error("error de lectura/escritura");
    }
  };

  deleteProduct = async (id) => {
    try {
      let productsJson = JSON.parse(await fs.readFile(this.path, "utf8"));
      let productToDelete= productsJson.find((prod)=>prod.id===id);
      if(!productToDelete){
        console.log("producto no encontrado")
    }else{
        let indexProduct= productsJson.indexOf(productToDelete);
      productsJson.splice(indexProduct,1);
      await fs.writeFile(this.path, JSON.stringify(productsJson))
      console.log("producto eliminado") 
      console.log(productsJson)

    }
    
    } catch (error) {
      console.error("error de lectura/ escritura");
    }
  };
}

//////
const manager = new ProductManagerFS();
const data = {nombre:"manzana", precio:1200}
