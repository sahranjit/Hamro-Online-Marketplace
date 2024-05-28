export const createFile = async (req, res) => {
  console.log(req.file);
  console.log(req.files);

  if (req.file) {
    //   ************for single file
    let fileName = req.file.filename;
    let path = { path: `http://localhost:8000/${fileName}` };

    res.status(200).json({
      success: true,
      message: "File uploaded successfully.",
      result: path,
    });
  } else {
    let paths = req.files.map((file) => {
      let fileName = file.filename;
      let path = `http://localhost:8000/${fileName}`;

      return { path: path };
    });

    res.status(200).json({
      success: true,
      message: "File uploaded successfully.",
      result: path,
    });
  }
};
