# testing-repository1
create a folder public to put images and styles
create folder views and put all the files inside the folder and change it in ejs all your files for ex.index.ejs.

this all the things youve created you have to check to the 
(to check the connection on your sever/structure/dependencies of what you need to install)
in index.js const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")--/engine to show your app-chnge all of this in ejs.
  .get("/", (req, res) => res.render("index"))--/this the path to connec which kind of folder you are going to deploy/
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

