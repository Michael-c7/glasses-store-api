
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


    if (numericFilters) {
        const operatorMap = {
          ">": "$gt",
          ">=": "$gte",
          "=": "$eq",
          "<": "$lt",
          "<=": "$lte",
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );
        const options = ["price", "rating, reviews"];
        filters = filters.split(",").forEach((item) => {
          const [field, operator, value] = item.split("-");
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });
      }
    
      let result = Product.find(queryObject);
      // sort
      if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
      } else {
        result = result.sort("name");
      }
    
      if (fields) {
        const fieldsList = fields.split(",").join(" ");
        result = result.select(fieldsList);
      }
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip = (page - 1) * limit;
    
      result = result.skip(skip).limit(limit);
      // 23
      // 4 7 7 7 2
    
      const products = await result;
      res.status(200).json({ products, productAmt: products.length });
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}