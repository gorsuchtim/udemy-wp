const express = require("express");
const app = express();

/*
Define a route that will send some content to the browser using .get() and send it two args
The first argument defines the URL that we'll react to and the 2nd arg is a function 
that function is invoked when the user goes to this URL
*/
app.get("/", function (req, res) {
  res.send("Some dummy content");
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
