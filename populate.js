require("dotenv").config()


const connectDb = require("./db/connect")
const Product = require("./models/product")

const jsonProducts = require("./products.json")


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        // delete products that were already their if your gonna replace old products
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("populate works")
        // exists the terminal from the process
        process.exit(0)
    } catch(error) {
        console.log(error)
        // exists the terminal from the process, 1 means exist w/ a failure code
        process.exit(1)

    }
}

start()