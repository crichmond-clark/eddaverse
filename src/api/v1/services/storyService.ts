import * as stories from '../database/stories'

export const getAllStories = async () => {
    const story_objects = await stories.getAllStories()
}

export const getStoryById = async (storiesId: number) => {
    const story_objects = await stories.getStoryById(storiesId)
    if (story_objects) {
        return story_objects[0]
    }
}

export const createStory = async (stories: any) => {
    const story_objects = await stories.createStory(stories)
}

export const updateStoryById = async (storiesId: number, stories: any) => {
    const story_objects = await stories.updateStoryById(storiesId, stories)
}

export const deleteStoryById = async (storiesId: number) => {
    const story_objects = await stories.deleteStoryById(storiesId)
}
