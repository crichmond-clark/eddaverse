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
export const users = pgTable('user', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
})

export const accounts = pgTable(
    'account',
    {
        userId: text('userId')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        type: text('type').notNull(),
        provider: text('provider').notNull(),
        providerAccountId: text('providerAccountId').notNull(),
    },
    (account) => ({
        compoundKey: primaryKey(account.provider, account.providerAccountId),
    })
)

export const sessions = pgTable('session', {
    sessionToken: text('sessionToken').notNull().primaryKey(),
    userId: text('userId')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable(
    'verificationToken',
    {
        identifier: text('identifier').notNull(),
        token: text('token').notNull(),
        expires: timestamp('expires', { mode: 'date' }).notNull(),
    },
    (vt) => ({
        compoundKey: primaryKey(vt.identifier, vt.token),
    })
)

export const stories = pgTable('story', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    author: text('author')
        .references(() => users.id)
        .notNull(),
})

export const storiesRelations = relations(stories, ({ many }) => ({
    characters: many(storiesToCharacters),
}))

export const characters = pgTable('character', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    traits: json('traits').notNull().default([]),
})

export const charactersRelations = relations(characters, ({ one, many }) => ({
    story: many(storiesToCharacters),
    scenes: many(storiesToCharacters),
}))

export const scenes = pgTable('scene', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    narrativeText: text('narrativeText').notNull(),
    story: integer('story')
        .references(() => stories.id, { onDelete: 'cascade' })
        .notNull(),
})

export const scenesRelations = relations(scenes, ({ many }) => ({
    characters: many(storiesToCharacters),
}))

export const decisions = pgTable('decision', {
    id: serial('id').primaryKey(),
    text: text('text').notNull(),
    options: json('options').notNull(),
    nextScene: integer('nextScene')
        .references(() => scenes.id)
        .notNull(),
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
export const insertCharacterSchema = createInsertSchema(characters)
export const insertSceneSchema = createInsertSchema(scenes)
export const insertDecisionSchema = createInsertSchema(decisions)

//types

export type User = typeof users.$inferSelect
export type Story = typeof stories.$inferSelect
export type Character = typeof characters.$inferSelect
export type Scene = typeof scenes.$inferSelect
export type Decision = typeof decisions.$inferSelect
export type StoriesToCharacters = typeof storiesToCharacters.$inferSelect
export type ScenesToCharacters = typeof scenesToCharacters.$inferSelect
