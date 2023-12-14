import * as users from '../database/users.js'

export const getAllUsers = async () => {
    const user_objects = await users.getAllUsers()
    return user_objects
}

export const getUserById = async (userId: number) => {
    const user_objects = await users.getUserById(userId)
    return user_objects
}

export const createUser = async (user: any) => {
    const user_objects = await users.createUser(user)
    return user_objects
}

export const updateUserById = async (userId: number, user: any) => {
    const user_objects = await users.updateUserById(userId, user)
    return user_objects
}

export const deleteUserById = async (userId: number) => {
    const user_objects = await users.deleteUserById(userId)
    return user_objects
}
