import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    const picturePath =
      new Date().toISOString().replace(/:/g, "_") + file.originalname;
    req.body.picturePath = picturePath;
    cb(null, picturePath);
  },
});

export const upload = multer({ storage });
