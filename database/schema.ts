import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const quizzes = sqliteTable('quizzes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('quiz title').notNull().default(`default title`),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
});

export type Quizz = typeof quizzes.$inferSelect;

export const questions = sqliteTable('questions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  content: text('content').notNull().default('empty question'),
  media: text('text', { mode: 'json' }).$type<{ path: string }>(),
  isFreeForm: integer('is_free_form').default(0),
  quizId: integer('quiz_id').notNull().references(() => quizzes.id),
});

export type Question = typeof questions.$inferSelect;

export const answers = sqliteTable('answers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  content: text('content').notNull().default('empty answer'),
  correct: integer('completed', {mode: 'boolean'}).notNull().default(false),
  questionId: integer('question_id').notNull().references(() => questions.id),
});

export type Answer = typeof questions.$inferSelect;

export const freeFormSubmissions = sqliteTable('free_form_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  questionId: integer('question_id').notNull().references(() => questions.id),
  userSubmittedContent: text('content').notNull().default('empty answer'),
});

export type FreeFormSubmission = typeof freeFormSubmissions.$inferSelect;