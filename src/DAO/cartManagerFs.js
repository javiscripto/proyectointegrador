import fs from "fs/promises";

export default class CartManagerFs {
  constructor() {
    this.path = "carts.json";
  }
  writeCart = async (objectDatabase) => {
    try {
      let carts = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let currentCart = {
        id: objectDatabase.id,
        products: objectDatabase.products,
      };
      carts.push(currentCart);
      await fs.writeFile(this.path, JSON.stringify(carts));
      console.log("se ha creado un nuevo carrito");
    } catch (error) {
      console.error("error de escritura/lectura");
    }
  };
  getAllCarts = async () => {
    try {
      let carts = JSON.parse(await fs.readFile(this.path, "utf-8"));
      console.log(carts);
    } catch (error) {
      console.error("error de lectura");
    }
  };

  getcartById = async (id) => {
    try {
      let carts = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let findCart = carts.find((cart) => cart.id === id);
      console.log(findCart);
    } catch (error) {
      console.error(`error de lectura` + error);
    }
  };
  //updateCarts

  deleteCart = async (id) => {
    try {
      let carts = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let cartToDelete = carts.find((cart) => cart.id === id);
      if(!cartToDelete){
        console.log("carrito no encontrado");
        return;
      }
      let index = carts.indexOf(cartToDelete)
      carts.splice(index,1);
      await fs.writeFile(this.path, JSON.stringify(carts));
     return "producto eliminado"
    } catch (error) {
      console.error("error de lectura/escritura");
    }
  };
}

////
const manager = new CartManagerFs();
const object = { id: "a01", products: ["manzana", "pera", "sandia"] };

//manager.writeCart(object);
manager.getAllCarts();
