const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

//DATA PARSING AND VIEW ENGINE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine", 'ejs');

// PAGES
app.get("/", (req, res) =>{res.render("home");})


//SERVER
app.listen(3000, () => console.log("Press X to Start"))