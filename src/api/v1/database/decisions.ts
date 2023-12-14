import { db } from '../../../app'
import { decisions } from '../../../../db/schemas'
import { eq } from 'drizzle-orm'
import type { Decision } from '../../../../db/schemas'

export const getAllDecisions = async () => {
    return await db.select().from(decisions)
}

export const getDecisionById = async (decisionId: number) => {
    try {
        return await db
            .select()
            .from(decisions)
            .where(eq(decisions.id, decisionId))
    } catch (error) {
        console.log(error)
    }
}

export const createDecision = async (decision: Decision) => {
    try {
        return await db.insert(decisions).values(decision)
    } catch (error) {
        console.log(error)
    }
}

export const updateDecisionById = async (
    decisionId: number,
    attributes: Decision
) => {
    try {
        return await db
            .update(decisions)
            .set(attributes)
            .where(eq(decisions.id, decisionId))
    } catch (error) {
        console.log(error)
    }
}

export const deleteDecisionById = async (decisionId: number) => {
    try {
        return await db.delete(decisions).where(eq(decisions.id, decisionId))
    } catch (error) {
        console.log(error)
    }
}
