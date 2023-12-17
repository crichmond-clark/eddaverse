import { db } from '../../../app'
import { characters } from '../../../../db/schemas'
import { eq } from 'drizzle-orm'
import { insertCharacterSchema } from '../../../../db/schemas'
import type { Character } from '../../../../db/schemas'

export const getAllCharacters = async () => {
    return await db.select().from(characters)
}

export const getCharacterById = async (
    characterIds: number
): Promise<Character[]> => {
    try {
        const character = await db
            .select()
            .from(characters)
            .where(eq(characters.id, characterIds))
        return character
    } catch (error) {
        console.log(error)
    }
    return {} as Character[]
}

export const createCharacter = async (character: Character) => {
    try {
        const validated_character = insertCharacterSchema.parse(character)
        validated_character
    } catch (error) {
        console.log(error)
    }
}

export const updateCharacterById = async (
    characterId: number,
    attributes: Character
): Promise<void> => {
    try {
        await db
            .update(characters)
            .set(attributes)
            .where(eq(characters.id, characterId))
    } catch (error) {
        console.log(error)
    }
    return
}

export const deleteCharacterById = async (
    characterId: number
): Promise<void> => {
    try {
        await db.delete(characters).where(eq(characters.id, characterId))
    } catch (error) {
        console.log(error)
    }
}
