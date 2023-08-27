const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "product name must be provided"],
    },
    image: {
        type: String,
        required: [true, "Image path must be provided"],
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    productCode: {
        type: String,
        required: [true, "productCode must be provided"],
    },
    description: {
        type: String,
        description: "These glasses are the perfect accessory for anyone looking for stylish and functional eyewear. The frames are made of durable, lightweight material and come in a variety of colors to suit your personal style. The lenses are made of high-quality, scratch-resistant material and provide 100% UV protection. The glasses also feature an adjustable nose piece and temple arms for a comfortable fit. Whether you're reading, working, or just out and about, these glasses will help you see clearly and look great.",
    },
    rating: {
        type: Number,
        required: [true, "rating must be provided"],
    },
    reviews: {
        type: Number,
        required: [true, "reviews must be provided"],
    },
    gender: {
        type: String,
        required: [true, "gender must be provided"],
    },
    brand: {
        type: String,
        required: [true, "brand must be provided"],
        enum: {
            values: ['muse', "ottoto", "persol", "coach", "ray-ban", "oakley"],
            message:"{VALUE} is not supported",
        }
    },
    colors: {
        type: String,
        required: [true, "colors must be provided"],
    },
    material: {
        type: String,
        required: [true, "material must be provided"],
    },
})

/*
Example of what this data will look like in json format

        "name": "alter",
        "image": "./images/alter.jpg",
        "price": "$35.00",
        "productCode": "d8cb37de-3baa-4d74-b4ba-1a19894ac3c6",
        "description": "These glasses are the perfect accessory for anyone looking for stylish and functional eyewear. The frames are made of durable, lightweight material and come in a variety of colors to suit your personal style. The lenses are made of high-quality, scratch-resistant material and provide 100% UV protection. The glasses also feature an adjustable nose piece and temple arms for a comfortable fit. Whether you're reading, working, or just out and about, these glasses will help you see clearly and look great.",
        "rating": 4,
        "reviews": 25.0,
        "gender": "male",
        "brand": "ray-ban",
        "colors": "orange,black",
        "material": "plastic"
*/

module.exports = mongoose.model("Product", productsSchema)