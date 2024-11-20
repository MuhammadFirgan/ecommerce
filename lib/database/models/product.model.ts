import { Document, model, models, Schema } from "mongoose";

interface IReview {
    user: { _id: string, firstName: string, lastName: string }; 
    rating: number;
    comment?: string;
  }
  
  
  interface IRatings {
    average: number;
    reviews: IReview[];
  }
  
 
  export interface IProduct {
    _id?: String; 
    name: string;
    price: number;
    description: string;
    category: { _id: string, name: string }; 
    image?: string; 
    ratings: IRatings;
  }

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true, min: 0 },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    stock: { type: String, required: true, min: 0 },
    image: { type: String },
    retings: {
        average: {
            type: String,
            default: 0,
            min: 0,
            max: 5
        },
        reviews: {
            user: { type: String, required: true, ref: "User" },
            rating: { type: String, min: 0, max: 5 },
            comment: { type: String }
        }
    }
})

const Product = models.Product || model('Product', ProductSchema)

export default Product