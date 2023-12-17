import { db } from '../../../app'
import { stories } from '../../../../db/schemas'
import { eq } from 'drizzle-orm'
import { insertStorySchema } from '../../../../db/schemas'
import type { Story } from '../../../../db/schemas'

export const getAllStories = async () => {
    return await db.select().from(stories)
}

export const getStoryById = async (story: number) => {
    try {
        const storyArray = await db
            .select()
            .from(stories)
            .where(eq(stories.id, story))
        return storyArray
    } catch (error) {
        console.log(error)
    }
}

export const createStory = async (story: Story) => {
    try {
        const validated_story = insertStorySchema.parse(story)
        return await db.insert(stories).values(validated_story)
    } catch (error) {
        console.log(error)
    }
}

export const updateStoryById = async (storyId: number, attributes: Story) => {
    try {
        return await db
            .update(stories)
            .set(attributes)
            .where(eq(stories.id, storyId))
    } catch (error) {
        console.log(error)
    }
}

export const deleteStoryById = async (storyId: number) => {
    try {
        return await db.delete(stories).where(eq(stories.id, storyId))
    } catch (error) {
        console.log(error)
    }
}
