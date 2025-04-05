import express from "express";
import { Book } from "../models/bookmodel.js";
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishyear
        ){
            return res.status(400).send({message:"Please fill all the fields"});
            
        }
        const newbook={
            title:req.body.title,
            author:req.body.author,
            publishyear:req.body.publishyear,
        };
        const book=await Book.create(newbook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});        
    }
})
router.get("/:id",async (req,res)=>{
    try {

        const{id}=req.params;
        const book=await Book.findById(id);
        return res.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
});
router.get("/",async (req,res)=>{
    try {

               const book=await Book.find({});
        return res.status(200).json({
            count:book.length,
            data:book
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
});
//route for upddate
router.put("/:id",async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishyear
        ){
            return res.status(400).send({message:"Please fill all the fields"});
        }
        const {id}=req.params;
        const result=await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).send({message:"Book not found"});
        }
        return res.status(200).send({message:"Book updated succesfully"});
    }
     catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
});
//route to delete
router.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const result=await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message:"Book not found"});
        }
        return res.status(200).send({message:"Book deleted succesfully"});
    }
     catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
});
export default router;