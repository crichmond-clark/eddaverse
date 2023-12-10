import { Request, Response } from 'express'

export const getAllCharacters = (req: Request, res: Response) => {
    res.send('get all characters')
}

export const getCharacterById = (req: Request, res: Response) => {
    res.send('get a character')
}

export const createCharacter = (req: Request, res: Response) => {
    res.send('create a character')
}

export const updateCharacterById = (req: Request, res: Response) => {
    res.send('update a character')
}

export const deleteCharacterById = (req: Request, res: Response) => {
    res.send('delete a character')
}
