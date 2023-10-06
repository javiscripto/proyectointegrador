


import { Router } from "express";
import { productModel } from "../models/products.model";

const router=Router();

//get
router.get("/", async(req, res)=>{
    try {
        let products= await productModel.find();
        res.send({result:"success",payload:products})
       
       
    } catch (error) {
        console.error(error)
    }
});

//get by id
router.get("/:pid",async(req,res)=>{
    let {pid}=req.params;
    try {
        let productFind= await productModel.findById({_id:pid})
        res.send({result:"success",payload:productFind})
    } catch (error) {
        console.error(error)
    }

})




//post
router.post("/", async(req, res)=>{
    let {title, description, code, price,status,stock,cat}= req.body
    if(!title||!description||!code||!price||!status||!stock||!cat){
        res.send({status:"error", error:"faltan datos"})
    }
    let result= await productModel.create({title, description, code,price,status,stock,cat});
    res.send({result:"success", payload:result})
})



//put 
router.put("/:pid", async(req, res)=>{
    let {pid}=req.params;

    let prodToUpdate=req.body;
    if(!prodToUpdate.title||!prodToUpdate.description||!prodToUpdate.code||!prodToUpdate.price||!prodToUpdate.status||!prodToUpdate.stock||!prodToUpdate.cat){
        res.send({status:"error", error:"no hay datos en parametros"})
    }

    let result= await productModel.updateOne({_id:pid},prodToUpdate);
    res.send({result:"success", payload:result})
})

//delete 

//implementar la logica de la ruta delete
router.delete("/:pid", async(req, res)=>{
    let {pid}= req.params;
    let result = await productModel.deleteOne({_id:pid});
    res.send({result:"success",payload: result})
})


export default router;