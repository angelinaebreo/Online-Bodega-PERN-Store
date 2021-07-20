// DEPENDENCIES
const cors = require("cors");
const express = require("express");
<<<<<<< HEAD
const bodegaController = require('./controllers/bodegaController.js');
=======
const productsController = require("./controllers/productsController")

>>>>>>> c86590cd3e6c1a3845de562d889f78fac6bfd65b
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to La Bodega!!");
});

<<<<<<< HEAD
app.use("/bodega", bodegaController);
app.get("*", (req,res) => {
  res.status(404).send("Page not Found");
});
=======
/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

app.get("/", (req, res) => {
  res.send("Welcome to online bodega")
})

app.use("/products", productsController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})
>>>>>>> c86590cd3e6c1a3845de562d889f78fac6bfd65b

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
