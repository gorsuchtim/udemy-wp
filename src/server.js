const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

/*
Create a route to handle requests for all types of static files
All requests that start with /static will go directly to our dist folder.
*/
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

/*
/*
This is the same setup that we have in the branch feature/UW-001_node-express-spa for the single page application
But here we need to handle serving up multiple pages... hello-world.html and kiwi.html instead of just a single index.html

We need an app.get() call to create a route for each page we need to serve up
*/
app.get("/hello-world/", function (req, res) {
  // use path to define absolute path to the file
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  // fs.readFileSync will asyncronously read content of file and return as a JS string
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  // send the content to the browser
  res.send(contentFromHtmlFile);
});
app.get("/kiwi/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/kiwi.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

/*
Start a webserver and tell it to listen on a port so that the application
can start listening and reacting to incoming connections

A common pattern for node js applications is to use 3000 for the port
The 2nd arg is a function invoked right after the app starts
*/
app.listen(3000, function () {
  console.log("Application is running on http://localhost:3000/");
});
