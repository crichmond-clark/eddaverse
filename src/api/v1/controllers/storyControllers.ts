import { Request, Response } from 'express'
import * as storyService from '../services/storyService.js'

export const getAllStories = (req: Request, res: Response) => {
    try {
        const stories = storyService.getAllStories()
        return res.json(stories)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Stories not found' })
    }
}

export const getStoryById = (req: Request, res: Response) => {
    try {
        const storyId = parseInt(req.params.storyId)
        const story = storyService.getStoryById(storyId)
        return res.json(story)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid story id' })
    }
}

export const createStory = (req: Request, res: Response) => {
    try {
        const newStory = req.body.story
        const story = storyService.createStory(newStory)
        return res.json(story)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Story not created' })
    }
}

export const updateStoryById = (req: Request, res: Response) => {
    try {
        const storyId = parseInt(req.params.storyId)
        const attributes = req.body.story
        const story = storyService.updateStoryById(storyId, attributes)
        return res.json(story)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid story id' })
    }
}

export const deleteStoryById = (req: Request, res: Response) => {
    try {
        const storyId = parseInt(req.params.storyId)
        const story = storyService.deleteStoryById(storyId)
        return res.json(story)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid story id' })
    }
}
