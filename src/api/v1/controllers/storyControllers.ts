import { Request, Response } from 'express'
import * as storyService from '../services/storyService.js'

export const getAllStories = (req: Request, res: Response) => {
    const stories = storyService.getAllStories()
    res.send('get all stories')
}

export const getStoryById = (req: Request, res: Response) => {
    const story = storyService.getStoryById()
    res.send('get a story')
}

export const createStory = (req: Request, res: Response) => {
    const story = storyService.createStory()
    res.send('create a story')
}

export const updateStoryById = (req: Request, res: Response) => {
    const story = storyService.updateStoryById()
    res.send('update a story')
}

export const deleteStoryById = (req: Request, res: Response) => {
    const story = storyService.deleteStoryById()
    res.send('delete a story')
}
