import { Request, Response } from 'express'
import * as decisionService from '../services/decisionService.js'

export const getAllDecisions = (req: Request, res: Response) => {
    try {
        const decisions = decisionService.getAllDecisions()
        return res.json(decisions)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Decisions not found' })
    }
}

export const getDecisionById = (req: Request, res: Response) => {
    try {
        const decisionId = parseInt(req.params.decisionId)
        const decision = decisionService.getDecisionById(decisionId)
        return res.json(decision)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid decision id' })
    }
}

export const createDecision = (req: Request, res: Response) => {
    try {
        const newDecision = req.body.decision
        const decision = decisionService.createDecision(newDecision)
        return res.json(decision)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Decision not created' })
    }
}

export const updateDecisionById = (req: Request, res: Response) => {
    try {
        const decisionId = parseInt(req.params.decisionId)
        const attributes = req.body.decision
        const decision = decisionService.updateDecisionById(
            decisionId,
            attributes
        )
        return res.json(decision)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid decision id' })
    }
}

export const deleteDecisionById = (req: Request, res: Response) => {
    try {
        const decisionId = parseInt(req.params.decisionId)
        const decision = decisionService.deleteDecisionById(decisionId)
        return res.json(decision)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'invalid decision id' })
    }
}
