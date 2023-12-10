import { Request, Response } from 'express'

export const getAllStories = (req: Request, res: Response) => {
    res.send('get all stories')
}

export const getStoryById = (req: Request, res: Response) => {
    res.send('get a story')
}

export const createStory = (req: Request, res: Response) => {
    res.send('create a story')
}

export const updateStoryById = (req: Request, res: Response) => {
    res.send('update a story')
}

export const deleteStoryById = (req: Request, res: Response) => {
    res.send('delete a story')
}
