import express from 'express';
import  {PORT,mongodb} from './config.js'
import mongoose from 'mongoose';
import {Book} from  "./models/bookmodel.js"
import bookRoute from "./routes/bookRoute.js"
import cors from 'cors'
const app= express();
app.use(express.json());
    
app.get("/",(req,res)=>{
    console.log(req);
    return res.status(234).send("Hello World");
    
});
app.use(cors()) //for all
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders:["Content-Type"]
// }))

app.use("/books",bookRoute);

mongoose
.connect(mongodb)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
})
.catch((err)=>{
    console.log(err);
});
    
