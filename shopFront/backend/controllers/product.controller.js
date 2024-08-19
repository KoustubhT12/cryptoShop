import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async(req,res)=>{

    try{ 
        const products = await Product.find({});
        res.status(200).json({success:true , data:products })

    }
    catch(e){
        console.log("error in fetching the product", e.message);
        res.status(500).json({success:false , message:"Server error"});
    }
}

export const addProduct = async (req,res)=>{

    const product = req.body; // data sent by user

    const existingPRo = await Product.findOne({name:product.name});  // to check existing pro or not 
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"Please provide all fields"});
    }
    else if(existingPRo){
        return res.status(400).json({success:false,message:"Product already Exists"});
    }
      
      
    const newProduct = new Product(product)

    try { 
        await newProduct.save();
        return res.status(201).json({success:true,data:newProduct});
    }
    catch(e){
            console.log("Error in createProduct :", error.message)
            return res.status(500).json({success:false,message:"server error"});
    }
};

export const updatePro = async (req,res)=> { 
    const {id} = req.params; 
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log("Id not found"); // for debugging 
        return res.status(200).json({success:false , message:`ID not found for any Product in the database`});
    }
    try{ 
     const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
     res.status(200).json({success:true,data:updatedProduct});
    }
    catch(e){
        res.status(400).json({success:false,message:`error in updating product ${e.message}`})
    }
};

export const deletePro = async (req,res)=>{
    const {id}  = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){ 
        return res.status(404).json({success:false , message:`Prodcut not found`});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});
    }
    catch(e){
        console.log("error in deleting product ",e.message)
        res.status(500).json({success:false,message:"Server error"});
    }

}