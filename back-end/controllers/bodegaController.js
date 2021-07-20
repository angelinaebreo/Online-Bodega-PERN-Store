const express = require('express');
const bodega = express.Router();
const { getAll, getItem, newItem } = require("../queries/bodega")

bodega.get("/", async (req, res) => {
    const allItems = await getAll();
    res.json(allBookmarks);
});

//show
bodega.get("/:id", async (req,res) => {
    const {id} = req.params;
    try {
        const item = await getItem(id);
        if (item["id"]) {
            res.json(item);
        }else {
            throw `NO item found at index: ${id}`
        }
    }catch (e){
        res.status(404).json({err: 'not found', message: e});
    }
});

//create 
bodega.post("/", async (req,res) => {
    const item = await newItem(req.body);
    res.json(item);
})
//delete

//update


module.exports = bodega;