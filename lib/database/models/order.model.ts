import { Document, model, models, Schema } from "mongoose";

export interface IOrder extends Document {
    createdAt: Date,
    stripeId: String,
    totalAmount: String,
    Products: { _id: string, name: string },
    buyer: { _id: string, firstName: string, lastName: string }
}   

const OrderSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    stripeId: {
        type: String,
        required: true,
        unique: true
    },
    
    totalAmount: {
        type: String,
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Order = models.Order || model('Order', OrderSchema)

export default Order