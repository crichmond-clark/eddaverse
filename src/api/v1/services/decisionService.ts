import * as decision from '../database/decisions'

export const getAllDecisions = async () => {
    const decision_objects = await decision.getAllDecisions()
}

export const getDecisionById = async (decisionId: number) => {
    const decision_objects = await decision.getDecisionById(decisionId)
    if (decision_objects) {
        return decision_objects[0]
    }
}

export const createDecision = async (decision: any) => {
    const decision_objects = await decision.createDecision(decision)
}

export const updateDecisionById = async (decisionId: number, decision: any) => {
    const decision_objects = await decision.updateDecisionById(
        decisionId,
        decision
    )
}

export const deleteDecisionById = async (decisionId: number) => {
    const decision_objects = await decision.deleteDecisionById(decisionId)
}
