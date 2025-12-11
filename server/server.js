import express from "express"
import dotenv from "dotenv"
// import { GoogleGenAI } from "@google/genai";
import {router} from "./router/router.js"
dotenv.config({ path: "./config.env" })
const port = process.env.PORT 

const app = express();
app.use(express.json());


// const genAI = new GoogleGenAI( {apiKey: process.env.GEMINI_API_KEY})
// async function callAI(question){
//     try{
//          const response = await genAI.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents:`You are a friendly MERN developer guide. 
// Explain solutions clearly, give only relevant info, and avoid long paragraphs. 
// Keep your reply under 3 lines. 
// User asks: ${question}`


//   });
//   console.log(response.text);
// }catch(err){
//     console.log("error while calling gemini",err)
// }
//     }
// callAI()

app.get("/api",router)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})