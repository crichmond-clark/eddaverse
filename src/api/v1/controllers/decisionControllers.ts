import { Request, Response } from 'express'

export const getAllDecisions = (req: Request, res: Response) => {
    res.send('get all decisions')
}

export const getDecisionById = (req: Request, res: Response) => {
    res.send('get a decision')
}

export const createDecision = (req: Request, res: Response) => {
    res.send('create a decision')
}

export const updateDecisionById = (req: Request, res: Response) => {
    res.send('update a decision')
}

export const deleteDecisionById = (req: Request, res: Response) => {
    res.send('delete a decision')
}
