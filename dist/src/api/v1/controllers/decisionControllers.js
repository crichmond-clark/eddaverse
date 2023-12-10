"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDecisionById = exports.updateDecisionById = exports.createDecision = exports.getDecisionById = exports.getAllDecisions = void 0;
const getAllDecisions = (req, res) => {
    res.send('get all decisions');
};
exports.getAllDecisions = getAllDecisions;
const getDecisionById = (req, res) => {
    res.send('get a decision');
};
exports.getDecisionById = getDecisionById;
const createDecision = (req, res) => {
    res.send('create a decision');
};
exports.createDecision = createDecision;
const updateDecisionById = (req, res) => {
    res.send('update a decision');
};
exports.updateDecisionById = updateDecisionById;
const deleteDecisionById = (req, res) => {
    res.send('delete a decision');
};
exports.deleteDecisionById = deleteDecisionById;
