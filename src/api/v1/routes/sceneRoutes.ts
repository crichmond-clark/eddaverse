import * as express from 'express'

import {
    getAllScenes,
    getSceneById,
    createScene,
    updateSceneById,
    deleteSceneById,
} from '../controllers/sceneControllers'

export const sceneRouter = express.Router()

sceneRouter.get('/', getAllScenes)
sceneRouter.get('/:storyId', getSceneById)
sceneRouter.post('/', createScene)
sceneRouter.patch('/:characterId', updateSceneById)
sceneRouter.delete('/:characterId', deleteSceneById)
