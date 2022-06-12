const express = require("express");
const app = express()
const path = require("path")


if (process.env.NODE_ENV === "production") {
    // Set static folder
    console.log(path.resolve(__dirname, "../frondend", "build"));
    app.use(express.static(path.resolve(__dirname, "../frondend", "build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frondend", "build", "index.html"));
    });
  }


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
console.log('started');
});