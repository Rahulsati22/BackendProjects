const express = require("express");
const path = 8000;
const PDFMerger = require("pdf-merger-js");
var merger = new PDFMerger();
const path2 = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const app = express();
app.use("/static", express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path2.join(__dirname + "/views/index.html"));
});
app.post("/merge", upload.array("pdfs"), function (req, res, next) {
  let time = Date.now();
  (async () => {
    for (let i = 0; i < req.files.length; i++) {
      await merger.add(req.files[i].path);
    }
    await merger.save(`public/merged-${time}.pdf`);
    res.redirect(`http://localhost:8000/static/merged-${time}.pdf`);
  })();
});
app.listen(path, function () {
  console.log(`successfully running on port ${path}`);
});
