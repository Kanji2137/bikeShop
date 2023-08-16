const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        price: {
            type: Number,
            required: true,
        },
        image_link: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;