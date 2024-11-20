import { Document, model, models, Schema } from "mongoose";

export interface ICart extends Document {
    quantity: String
    user: {
        _id: String
    },
    items: {
        _id: String,
        name: String,
        price: String
    },
    totalAmount: { type: String }
}

const CartSchema = new Schema({
    quantity: {
        type: String
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    items: { type: Schema.Types.ObjectId, ref: 'Product' },
    totalAmount: { type: String }
})

const Cart = models.Cart || model('Cart', CartSchema)

export default Cart