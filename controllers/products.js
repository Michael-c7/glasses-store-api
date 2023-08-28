
const Product = require("../models/product")


const getAllProductsStatic = async (req, res) => {
    // throw new Error("testing async errors")
    const search = "ab"
    const products = await Product.find({}).sort("-name price")
    res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {
    const { name, sort } = req.query;
    const queryObject = {}
    
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    let result = Product.find(queryObject)

    if(sort) {
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
        // products = products.sort()
        console.log(sort)
    } else {
        result = result.sort("name")
    }
    
    // console.log(queryObject)
    const products = await result
    // const products = await Product.find(req.query)
    // const products = await Product.find({
    //     name: { $regex: name, $options: "i" }
    //  })
    res.status(200).json({ products })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}