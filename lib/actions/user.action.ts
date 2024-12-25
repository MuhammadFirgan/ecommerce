'use server'
import { createUserParams } from "@/types";
import { dbConnect } from "../database";
import User from "../database/models/user.model";



export default async function createUser(user: createUserParams) {
  try {
    await dbConnect()

    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))

  } catch (error) {
    console.log(error)
  }
}
