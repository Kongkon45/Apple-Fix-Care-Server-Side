const express = require("express");
const { getAllProduct, getSingleProduct, createProduct, updateProduct, deleteProduct } = require("../controller/topSellingProducts");
const router = express.Router();

router.get("/topSellingProduct", getAllProduct);
router.get("/topSellingProduct/:id", getSingleProduct);
router.post("/topSellingProduct", createProduct);
router.put("/topSellingProduct/:id", updateProduct);
router.delete("topSellingProduct/:id", deleteProduct);

module.exports =  router;