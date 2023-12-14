import { Request, Response } from 'express'
import * as sceneService from '../services/sceneService.js'

export const getAllScenes = (req: Request, res: Response) => {
    try {
        const scenes = sceneService.getAllScenes()
        return res.json(scenes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Scenes not found' })
    }
}

export const getSceneById = (req: Request, res: Response) => {
    try {
        const sceneId = parseInt(req.params.sceneId)
        const scene = sceneService.getSceneById(sceneId)
        return res.json(scene)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid scene id' })
    }
}

export const createScene = (req: Request, res: Response) => {
    try {
        const newScene = req.body.scene
        const scene = sceneService.createScene(newScene)
        return res.json(scene)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Scene not created' })
    }
}

export const updateSceneById = (req: Request, res: Response) => {
    try {
        const sceneId = parseInt(req.params.sceneId)
        const attributes = req.body.scene
        const scene = sceneService.updateSceneById(sceneId, attributes)
        return res.json(scene)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid scene id' })
    }
}

export const deleteSceneById = (req: Request, res: Response) => {
    try {
        const sceneId = parseInt(req.params.sceneId)
        const scene = sceneService.deleteSceneById(sceneId)
        return res.json(scene)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid scene id' })
    }
}
