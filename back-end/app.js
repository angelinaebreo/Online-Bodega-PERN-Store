// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const bodegaController = require('./controllers/bodegaController.js');
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to La Bodega!!");
});

app.use("/bodega", bodegaController);
app.get("*", (req,res) => {
  res.status(404).send("Page not Found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
// const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });


// EXPORT
module.exports = app;
