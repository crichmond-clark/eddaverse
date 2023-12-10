import * as express from 'express'

import {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacterById,
    deleteCharacterById,
} from '../controllers/characterControllers'

export const characterRouter = express.Router()

characterRouter.get('/', getAllCharacters)
characterRouter.get('/:storyId', getCharacterById)
characterRouter.post('/', createCharacter)
characterRouter.patch('/:characterId', updateCharacterById)
characterRouter.delete('/:characterId', deleteCharacterById)
