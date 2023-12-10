"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStoryById = exports.updateStoryById = exports.createStory = exports.getStoryById = exports.getAllStories = void 0;
const getAllStories = (req, res) => {
    res.send('get all stories');
};
exports.getAllStories = getAllStories;
const getStoryById = (req, res) => {
    res.send('get a story');
};
exports.getStoryById = getStoryById;
const createStory = (req, res) => {
    res.send('create a story');
};
exports.createStory = createStory;
const updateStoryById = (req, res) => {
    res.send('update a story');
};
exports.updateStoryById = updateStoryById;
const deleteStoryById = (req, res) => {
    res.send('delete a story');
};
exports.deleteStoryById = deleteStoryById;
