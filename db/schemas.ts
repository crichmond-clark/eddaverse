import { relations } from 'drizzle-orm'
import { createInsertSchema } from 'drizzle-zod'
import {
    integer,
    timestamp,
    pgTable,
    serial,
    primaryKey,
    varchar,
    text,
    json,
} from 'drizzle-orm/pg-core'

//model tables
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 256 }).notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export const stories = pgTable('stories', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    author: integer('author')
        .references(() => users.id)
        .notNull(),
})

export const storiesRelations = relations(stories, ({ many }) => ({
    characters: many(storiesToCharacters),
}))

export const characters = pgTable('characters', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    traits: varchar('traits', { length: 256 }).notNull(),
    dialogueLines: integer('dialogueLines').notNull().default(0),
})

export const charactersRelations = relations(characters, ({ one, many }) => ({
    story: many(storiesToCharacters),
    scenes: many(storiesToCharacters),
}))

export const scenes = pgTable('scenes', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    narrativeText: integer('words').notNull().default(0),
    decisions: integer('order').notNull(),
    story: integer('story')
        .references(() => stories.id)
        .notNull(),
})

export const scenesRelations = relations(scenes, ({ many }) => ({
    characters: many(storiesToCharacters),
}))

export const decisions = pgTable('decisions', {
    id: serial('id').primaryKey(),
    text: text('text').notNull(),
    options: json('options').notNull(),
    scene: integer('scene')
        .references(() => scenes.id)
        .notNull(),
})

//join tables
export const storiesToCharacters = pgTable(
    'stories_to_characters',
    {
        storyId: integer('story_id')
            .notNull()
            .references(() => stories.id),
        characterId: integer('character_id')
            .notNull()
            .references(() => characters.id),
    },
    (t) => ({
        pk: primaryKey(t.storyId, t.characterId),
    })
)

export const storiesToCharactersRelation = relations(
    storiesToCharacters,
    ({ one }) => ({
        story: one(stories, {
            fields: [storiesToCharacters.storyId],
            references: [stories.id],
        }),
        character: one(characters, {
            fields: [storiesToCharacters.characterId],
            references: [characters.id],
        }),
    })
)

export const scenesToCharacters = pgTable(
    'scenes_to_characters',
    {
        sceneId: integer('scene_id')
            .notNull()
            .references(() => scenes.id),
        characterId: integer('character_id')
            .notNull()
            .references(() => characters.id),
    },
    (t) => ({
        pk: primaryKey(t.sceneId, t.characterId),
    })
)

export const scenesToCharactersRelation = relations(
    scenesToCharacters,
    ({ one }) => ({
        scene: one(scenes, {
            fields: [scenesToCharacters.sceneId],
            references: [scenes.id],
        }),
        character: one(characters, {
            fields: [scenesToCharacters.characterId],
            references: [characters.id],
        }),
    })
)

//zod schemas
export const insertUserSchema = createInsertSchema(users, {
    email: (schema) => schema.email.email(),
})
export const insertStorySchema = createInsertSchema(stories)
export const insertCharactersSchema = createInsertSchema(characters)
export const insertScenesSchema = createInsertSchema(scenes)
export const insertDecisionsSchema = createInsertSchema(decisions)

//types

export type User = typeof users.$inferSelect
export type Story = typeof stories.$inferSelect
export type Character = typeof characters.$inferSelect
export type Scene = typeof scenes.$inferSelect
export type Decision = typeof decisions.$inferSelect
export type StoriesToCharacters = typeof storiesToCharacters.$inferSelect
export type ScenesToCharacters = typeof scenesToCharacters.$inferSelect
