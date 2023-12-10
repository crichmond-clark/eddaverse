import * as express from 'express'
import {
    getAllDecisions,
    getDecisionById,
    createDecision,
    updateDecisionById,
    deleteDecisionById,
} from '../controllers/decisionControllers'

export const decisionRouter = express.Router()

decisionRouter.get('/', getAllDecisions)
decisionRouter.get('/:storyId', getDecisionById)
decisionRouter.post('/', createDecision)
decisionRouter.patch('/:characterId', updateDecisionById)
decisionRouter.delete('/:characterId', deleteDecisionById)
