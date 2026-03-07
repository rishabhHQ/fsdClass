const express = require('express');
const app = express();                  // creating instance

// get
app.get("/", (req,resp) => {
    resp.send("Basic Express Js Example");
});
app.get("/about", (req,resp) => {
    resp.send("This is about page");
});
app.listen(3300);