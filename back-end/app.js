// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productsController = require("./controllers/productsController.js");
// const products = require("./controllers/productsController.js");
const reviews = require("./controllers/reviewsController.js");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to La Bodega!!");
});

app.use("/products", productsController);
app.use("/reviews", reviews)
app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})


//  const db = require("./db/dbConfig.js");


// EXPORT
module.exports = app;