import { db } from '../../../app'
import { users } from '../../../../db/schemas'
import { eq } from 'drizzle-orm'
import { insertUserSchema } from '../../../../db/schemas'
import type { User } from '../../../../db/schemas'

export const getAllUsers = async () => {
    return await db.select().from(users)
}

export const getUserById = async (userIds: string): Promise<User[]> => {
    try {
        const userArray = await db
            .select()
            .from(users)
            .where(eq(users.id, userIds))
        return userArray
    } catch (error) {
        console.log(error)
    }
    return {} as User[]
}

export const createUser = async (user: User) => {
    try {
        const validated_user = insertUserSchema.parse(user)
        return await db.insert(users).values(validated_user)
    } catch (error) {
        console.log(error)
    }
}

export const updateUserById = async (
    userId: string,
    attributes: User
): Promise<void> => {
    try {
        await db.update(users).set(attributes).where(eq(users.id, userId))
    } catch (error) {
        console.log(error)
    }
    return
}

export const deleteUserById = async (userId: string): Promise<void> => {
    try {
        await db.delete(users).where(eq(users.id, userId))
    } catch (error) {
        console.log(error)
    }
}
