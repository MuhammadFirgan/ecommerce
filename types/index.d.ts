export type createUserParams = {
    clerkId: String
    email: String
    firstName: String 
    lastName: String 
    photo: String
}

export type CreateShopParams = {
    ownerId: string
    name: string
    profilePhoto?: string
    bannerPhoto?: string
}