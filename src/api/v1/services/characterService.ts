import * as characters from '../database/characters'

export const getAllCharacters = async () => {
    const character_objects = await characters.getAllCharacters()
    return character_objects
}

export const getCharacterById = async (characterId: number) => {
    const character_objects = await characters.getCharacterById(characterId)
    if (character_objects) {
        return character_objects[0]
    }
}

export const createCharacter = async (character: any) => {
    const character_objects = await characters.createCharacter(character)
    return character_objects
}

export const updateCharacterById = async (
    characterId: number,
    character: any
) => {
    const character_objects = await characters.updateCharacterById(
        characterId,
        character
    )
    return character_objects
}

export const deleteCharacterById = async (characterId: number) => {
    const character_objects = await characters.deleteCharacterById(characterId)
    return character_objects
}
