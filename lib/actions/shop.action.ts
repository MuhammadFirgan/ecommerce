'use server'

import { CreateShopParams } from "@/types";
import { dbConnect } from "../database";
import Shop from "../database/models/shop.model";

export async function createShop(shop: CreateShopParams) {
    try {
        await dbConnect()

        const newShop = await Shop.create(shop)

        return JSON.parse(JSON.stringify(newShop))
    } catch (error) {
        console.log(error)
    }
}