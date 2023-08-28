
const Product = require("../models/product")


const getAllProductsStatic = async (req, res) => {
    // throw new Error("testing async errors")
    const products = await Product.find({ gender:"male", colors:"black"})
    res.status(200).json({ msg: products })
}

const getAllProducts = async (req, res) => {
    console.log(req.query)
    const products = await Product.find(req.query)
    res.status(200).json({ products })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}