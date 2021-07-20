const express = require('express');
const bodega = express.Router();
const { getAll, getItem, newItem } = require("../queries/bodega")