import { Request, Response } from 'express'

export const getAllScenes = (req: Request, res: Response) => {
    res.send('get all scenes')
}

export const getSceneById = (req: Request, res: Response) => {
    res.send('get a scene')
}

export const createScene = (req: Request, res: Response) => {
    res.send('create a scene')
}

export const updateSceneById = (req: Request, res: Response) => {
    res.send('update a scene')
}

export const deleteSceneById = (req: Request, res: Response) => {
    res.send('delete a scene')
}
