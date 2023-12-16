import { Request, Response } from 'express'
import * as userService from '../services/userService.js'

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers()
        return res.json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const user = await userService.getUserById(userId)
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid user id' })
    }
}

export const createUser = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
        }
        const user = await userService.createUser(newUser)
        return res.json({ message: 'User created', user: newUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'User not created' })
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const attributes = req.body.user
        const user = await userService.updateUserById(userId, attributes)
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid user id' })
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const user = await userService.deleteUserById(userId)
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid user id' })
    }
}
