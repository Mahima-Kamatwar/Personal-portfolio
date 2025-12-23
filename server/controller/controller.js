import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const getResponse = async (question) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        We are Tech Sync Services who work on MERN stack domain.
        Whatever user asks, reply in short and only related to MERN.
        User's question: ${question}
      `,
    });

    return response.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate AI response");
  }
}


const uploadFile = (req,res) => {
   if(!req.file){
    let result = res.status(400).json({msg: "No file uploaded"})
   }
   return res.status(200).json({success: true, msg: "File uploaded successfully!", file: req.file})
}


export { uploadFile };