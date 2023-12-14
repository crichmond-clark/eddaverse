import * as scenes from '../database/scenes'

export const getAllScenes = async () => {
    const scene_objects = await scenes.getAllScenes()
}

export const getSceneById = async (scenesId: number) => {
    const scene_objects = await scenes.getSceneById(scenesId)
}

export const createScene = async (scenes: any) => {
    const scenes_objects = await scenes.createScene(scenes)
}

export const updateSceneById = async (scenesId: number, scenes: any) => {
    const scene_objects = await scenes.updateSceneById(scenesId, scenes)
}

export const deleteSceneById = async (scenesId: number) => {
    const scene_objects = await scenes.deleteSceneById(scenesId)
}
