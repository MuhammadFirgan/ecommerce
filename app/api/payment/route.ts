
import midtrans from 'midtrans-client';
import { NextResponse } from 'next/server';

let snap = new midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SERVER_KEY,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY
})



export default async function POST(request: Request) {
    const { id, productName, price, quantity } = await request.json()
   let parameter = {
    item_details: {
        name: productName,
        price,
        quantity
    },
    transaction_details: {
        order_id: id,
        gross_amount: price * quantity
    }
   }

   const token = await snap.createTransaction(parameter)
   console.log(token)
   return NextResponse.json({token})
}