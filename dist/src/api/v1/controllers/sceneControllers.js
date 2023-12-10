"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSceneById = exports.updateSceneById = exports.createScene = exports.getSceneById = exports.getAllScenes = void 0;
const getAllScenes = (req, res) => {
    res.send('get all scenes');
};
exports.getAllScenes = getAllScenes;
const getSceneById = (req, res) => {
    res.send('get a scene');
};
exports.getSceneById = getSceneById;
const createScene = (req, res) => {
    res.send('create a scene');
};
exports.createScene = createScene;
const updateSceneById = (req, res) => {
    res.send('update a scene');
};
exports.updateSceneById = updateSceneById;
const deleteSceneById = (req, res) => {
    res.send('delete a scene');
};
exports.deleteSceneById = deleteSceneById;
