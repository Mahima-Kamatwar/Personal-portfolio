import multer from "multer"
import path from "path"


const storage = multer.diskStorage({
    // 'destination' tells multer where to store uploaded files 
    destination: (req, file, cb) => {
        cb(null, "/server/uploads");
    },

    filename: (req, file, cb) => {
        const uploadPath = Date.now() + file.originalname
        cb(null, uploadPath)
    }
})


// Create multer instance with storage settings
const upload = multer({ storage })

export { upload }

// Exporting 'upload' so we can use it in routes for uploading files