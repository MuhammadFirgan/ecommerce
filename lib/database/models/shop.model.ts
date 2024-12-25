import { Document, model, models, Schema } from "mongoose";

export interface IShop extends Document {
    _id: string
    // ownerId: { _id: string, firstName: string, lastName: string }
    name: string
}

const shopSchema = new Schema({
    // ownerId: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true, unique: true },
    profilePhoto: { type: String },
    bannerPhoto: { type: String }
})

const Shop = models.Shop || model('Shop', shopSchema)

export default Shop