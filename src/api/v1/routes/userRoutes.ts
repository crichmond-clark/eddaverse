import * as express from 'express'

import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    authenticateUser,
} from '../controllers/userControllers'

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.get('/authenticate', authenticateUser)
userRouter.post('/', createUser)
userRouter.patch('/:characterId', updateUserById)
userRouter.delete('/:characterId', deleteUserById)
