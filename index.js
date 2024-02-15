import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running at ${port} port`);
});

app.get("/", (req, res) => {
    res.send(`<h1>Hello, I am port ${port}</h1>`);
});

app.get("/about", (req, res) => {
    res.send(`<h1>Hello, this is about page of port ${port}</h1>`);
});

app.get("/contact", (req, res) => {
    res.send(`<h1>Hello, thanks for contacting port ${port}</h1>`);
});