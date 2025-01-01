import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Get file extension (e.g., .jpg, .png)
    const newFileName = `user-upload-${uniqueSuffix}${ext}`;
    cb(null, newFileName);
  },
});

export const upload = multer({
  storage,
});
