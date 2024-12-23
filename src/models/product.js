import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productShema = new Schema ({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    status: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        default: []
    }
})

productSchema.plugin(mongoosePaginate) 
const productModel = model("products", productShema)
export default productModel