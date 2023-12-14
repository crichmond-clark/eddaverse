import { Request, Response } from 'express'
import * as characterService from '../services/characterService.js'

export const getAllCharacters = (req: Request, res: Response) => {
    try {
        const characters = characterService.getAllCharacters()
        return res.json(characters)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}

export const getCharacterById = async (req: Request, res: Response) => {
    try {
        const characterId = parseInt(req.params.characterId)
        const character = await characterService.getCharacterById(characterId)
        return res.json(character)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid character id' })
    }
}

export const createCharacter = async (req: Request, res: Response) => {
    try {
        const newCharacter = req.body.character
        const character = await characterService.createCharacter(newCharacter)
        return res.status(200)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Character not created' })
    }
}

export const updateCharacterById = async (req: Request, res: Response) => {
    try {
        const characterId = parseInt(req.params.characterId)
        const attributes = req.body.character
        const character = await characterService.updateCharacterById(
            characterId,
            attributes
        )
        return res.json(character)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid character id' })
    }
}

export const deleteCharacterById = async (req: Request, res: Response) => {
    try {
        const characterId = parseInt(req.params.characterId)
        const character =
            await characterService.deleteCharacterById(characterId)
        return res.json(character)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid character id' })
    }
}
