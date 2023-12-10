import * as express from 'express'

import {
    getAllStories,
    getStoryById,
    createStory,
    updateStoryById,
    deleteStoryById,
} from '../controllers/storyControllers'

export const storyRouter = express.Router()

storyRouter.get('/', getAllStories)
storyRouter.get('/:storyId', getStoryById)
storyRouter.post('/', createStory)
storyRouter.patch('/:characterId', updateStoryById)
storyRouter.delete('/:characterId', deleteStoryById)
