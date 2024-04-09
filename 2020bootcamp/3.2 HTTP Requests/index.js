import express from "express";
const app = express();
const port = 3000;
const homepage = 

//default endpoint
app.get("/", (req, res) => {
    res.send("<h1> Hello World </h1>");
});

// about me
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

// contact me
app.get("/contact", (req, res) => {
    res.send("<h1>How to contact Me</h1>");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});