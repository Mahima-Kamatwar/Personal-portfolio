import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
   
    image: {
        type: String,
        required: true
    }
  
})

let projectModel = mongoose.model("projects", projectSchema)

export { projectModel }