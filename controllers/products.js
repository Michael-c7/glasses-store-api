
const Product = require("../models/product")


const getAllProductsStatic = async (req, res) => {
    // throw new Error("testing async errors")
    const search = "ab"
    const products = await Product.find({}).sort("-name price")
    res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {
    const { name, gender, brand, colors, material, sort } = req.query;
    const queryObject = {}
    
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    if (gender) {
        queryObject.gender = { $regex: gender, $options: "i" }
    }

    if (brand) {
        queryObject.brand = { $regex: brand, $options: "i" }
    }

    if (colors) {
        queryObject.colors = { $regex: colors, $options: "i" }
    }

    if (material) {
        queryObject.material = { $regex: material, $options: "i" }
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