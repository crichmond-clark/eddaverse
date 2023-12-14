import { Request, Response } from 'express'
import * as decisionService from '../services/decisionService.js'

export const getAllDecisions = (req: Request, res: Response) => {
    const decisions = decisionService.getAllDecisions()
    res.send('get all decisions')
}

export const getDecisionById = (req: Request, res: Response) => {
    const decision = decisionService.getDecisionById()
    res.send('get a decision')
}

export const createDecision = (req: Request, res: Response) => {
    const decision = decisionService.createDecision()
    res.send('create a decision')
}

export const updateDecisionById = (req: Request, res: Response) => {
    const decision = decisionService.updateDecisionById()
    res.send('update a decision')
}

export const deleteDecisionById = (req: Request, res: Response) => {
    const decision = decisionService.deleteDecisionById()
    res.send('delete a decision')
}
