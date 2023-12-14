import { db } from '../../../app'
import { scenes } from '../../../../db/schemas'
import { eq } from 'drizzle-orm'
import type { Scene } from '../../../../db/schemas'

export const getAllScenes = async () => {
    return await db.select().from(scenes)
}

export const getSceneById = async (scene: number) => {
    try {
        return await db.select().from(scenes).where(eq(scenes.id, scene))
    } catch (error) {
        console.log(error)
    }
}

export const createScene = async (scene: Scene) => {
    try {
        return await db.insert(scenes).values(scene)
    } catch (error) {
        console.log(error)
    }
}

export const updateSceneById = async (sceneId: number, attributes: Scene) => {
    try {
        return await db
            .update(scenes)
            .set(attributes)
            .where(eq(scenes.id, sceneId))
    } catch (error) {
        console.log(error)
    }
}

export const deleteSceneById = async (sceneId: number) => {
    try {
        return await db.delete(scenes).where(eq(scenes.id, sceneId))
    } catch (error) {
        console.log(error)
    }
}
