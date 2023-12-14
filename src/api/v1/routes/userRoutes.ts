import * as express from 'express'

import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} from '../controllers/userControllers'

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.post('/', createUser)
userRouter.patch('/:characterId', updateUserById)
userRouter.delete('/:characterId', deleteUserById)
