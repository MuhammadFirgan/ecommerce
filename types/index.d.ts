export type createUserParams = {
    clerkId: string
    email: string
    firstName: string 
    lastName: string 
    photo: string
}

export type CreateShopParams = {
    ownerId: string
    name: string
    profilePhoto?: string
    bannerPhoto?: string
}