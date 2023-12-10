"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDecisionsSchema = exports.insertScenesSchema = exports.insertCharactersSchema = exports.insertStorySchema = exports.insertUserSchema = exports.scenesToCharactersRelation = exports.scenesToCharacters = exports.storiesToCharactersRelation = exports.storiesToCharacters = exports.decisions = exports.scenesRelations = exports.scenes = exports.charactersRelations = exports.characters = exports.storiesRelations = exports.stories = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const drizzle_zod_1 = require("drizzle-zod");
const pg_core_1 = require("drizzle-orm/pg-core");
//model tables
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.varchar)('email', { length: 256 }).notNull(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)('createdAt').notNull().defaultNow(),
});
exports.stories = (0, pg_core_1.pgTable)('stories', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.varchar)('title', { length: 256 }).notNull(),
    author: (0, pg_core_1.integer)('author')
        .references(() => exports.users.id)
        .notNull(),
});
exports.storiesRelations = (0, drizzle_orm_1.relations)(exports.stories, ({ many }) => ({
    characters: many(exports.storiesToCharacters),
}));
exports.characters = (0, pg_core_1.pgTable)('characters', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    traits: (0, pg_core_1.varchar)('traits', { length: 256 }).notNull(),
    dialogueLines: (0, pg_core_1.integer)('dialogueLines').notNull().default(0),
});
exports.charactersRelations = (0, drizzle_orm_1.relations)(exports.characters, ({ many }) => ({
    story: many(exports.storiesToCharacters),
    scenes: many(exports.storiesToCharacters),
}));
exports.scenes = (0, pg_core_1.pgTable)('scenes', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.varchar)('title', { length: 256 }).notNull(),
    narrativeText: (0, pg_core_1.integer)('words').notNull().default(0),
    decisions: (0, pg_core_1.integer)('order').notNull(),
    story: (0, pg_core_1.integer)('story')
        .references(() => exports.stories.id)
        .notNull(),
});
exports.scenesRelations = (0, drizzle_orm_1.relations)(exports.scenes, ({ many }) => ({
    characters: many(exports.storiesToCharacters),
}));
exports.decisions = (0, pg_core_1.pgTable)('decisions', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    text: (0, pg_core_1.text)('text').notNull(),
    options: (0, pg_core_1.json)('options').notNull(),
    scene: (0, pg_core_1.integer)('scene')
        .references(() => exports.scenes.id)
        .notNull(),
});
//join tables
exports.storiesToCharacters = (0, pg_core_1.pgTable)('stories_to_characters', {
    storyId: (0, pg_core_1.integer)('story_id')
        .notNull()
        .references(() => exports.stories.id),
    characterId: (0, pg_core_1.integer)('character_id')
        .notNull()
        .references(() => exports.characters.id),
}, (t) => ({
    pk: (0, pg_core_1.primaryKey)(t.storyId, t.characterId),
}));
exports.storiesToCharactersRelation = (0, drizzle_orm_1.relations)(exports.storiesToCharacters, ({ one }) => ({
    story: one(exports.stories, {
        fields: [exports.storiesToCharacters.storyId],
        references: [exports.stories.id],
    }),
    character: one(exports.characters, {
        fields: [exports.storiesToCharacters.characterId],
        references: [exports.characters.id],
    }),
}));
exports.scenesToCharacters = (0, pg_core_1.pgTable)('scenes_to_characters', {
    sceneId: (0, pg_core_1.integer)('scene_id')
        .notNull()
        .references(() => exports.scenes.id),
    characterId: (0, pg_core_1.integer)('character_id')
        .notNull()
        .references(() => exports.characters.id),
}, (t) => ({
    pk: (0, pg_core_1.primaryKey)(t.sceneId, t.characterId),
}));
exports.scenesToCharactersRelation = (0, drizzle_orm_1.relations)(exports.scenesToCharacters, ({ one }) => ({
    scene: one(exports.scenes, {
        fields: [exports.scenesToCharacters.sceneId],
        references: [exports.scenes.id],
    }),
    character: one(exports.characters, {
        fields: [exports.scenesToCharacters.characterId],
        references: [exports.characters.id],
    }),
}));
//zod schemas
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users, {
    email: (schema) => schema.email.email(),
});
exports.insertStorySchema = (0, drizzle_zod_1.createInsertSchema)(exports.stories);
exports.insertCharactersSchema = (0, drizzle_zod_1.createInsertSchema)(exports.characters);
exports.insertScenesSchema = (0, drizzle_zod_1.createInsertSchema)(exports.scenes);
exports.insertDecisionsSchema = (0, drizzle_zod_1.createInsertSchema)(exports.decisions);
