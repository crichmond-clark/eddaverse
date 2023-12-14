import { Request, Response } from 'express'
import * as characterService from '../services/characterService.js'

export const getAllCharacters = (req: Request, res: Response) => {
    const characters = characterService.getAllCharacters()
    res.send('get all characters')
}

export const getCharacterById = (req: Request, res: Response) => {
    const character = characterService.getCharacterById()
    res.send('get a character')
}

export const createCharacter = (req: Request, res: Response) => {
    const character = characterService.createCharacter()
    res.send('create a character')
}

export const updateCharacterById = (req: Request, res: Response) => {
    const character = characterService.updateCharacterById()
    res.send('update a character')
}

export const deleteCharacterById = (req: Request, res: Response) => {
    const character = characterService.deleteCharacterById()
    res.send('delete a character')
}
