import { Request, Response } from 'express'
import * as sceneService from '../services/sceneService.js'

export const getAllScenes = (req: Request, res: Response) => {
    const scenes = sceneService.getAllScenes()
    res.send('get all scenes')
}

export const getSceneById = (req: Request, res: Response) => {
    const scene = sceneService.getSceneById()
    res.send('get a scene')
}

export const createScene = (req: Request, res: Response) => {
    const scene = sceneService.createScene()
    res.send('create a scene')
}

export const updateSceneById = (req: Request, res: Response) => {
    const scene = sceneService.updateSceneById()
    res.send('update a scene')
}

export const deleteSceneById = (req: Request, res: Response) => {
    const scene = sceneService.deleteSceneById()
    res.send('delete a scene')
}
