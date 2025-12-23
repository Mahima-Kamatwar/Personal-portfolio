import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: {
      type: [String], // ["React", "Node", "MongoDB"]
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    githubLink: {
      type: String,
    },

    liveLink: {
      type: String,
    },
  },
  { timestamps: true }
)

export const projectModel = mongoose.model("Project", projectSchema)
