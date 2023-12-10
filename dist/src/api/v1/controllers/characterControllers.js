"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacterById = exports.updateCharacterById = exports.createCharacter = exports.getCharacterById = exports.getAllCharacters = void 0;
const getAllCharacters = (req, res) => {
    res.send('get all characters');
};
exports.getAllCharacters = getAllCharacters;
const getCharacterById = (req, res) => {
    res.send('get a character');
};
exports.getCharacterById = getCharacterById;
const createCharacter = (req, res) => {
    res.send('create a character');
};
exports.createCharacter = createCharacter;
const updateCharacterById = (req, res) => {
    res.send('update a character');
};
exports.updateCharacterById = updateCharacterById;
const deleteCharacterById = (req, res) => {
    res.send('delete a character');
};
exports.deleteCharacterById = deleteCharacterById;
