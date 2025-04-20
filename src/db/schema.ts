// drizzle/schema.ts
import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
  decimal,
} from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Investment opportunities table
export const investments = pgTable("investments", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).default('100.00').notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  expectedReturn: decimal("expected_return", { precision: 5, scale: 2 }).default('10.00').notNull(), // Annual return rate in percentage
  riskLevel: varchar("risk_level", { length: 50 }).default('moderate').notNull(),
});

// User investments table (junction table)
export const userInvestments = pgTable("user_investments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  investmentId: integer("investment_id").references(() => investments.id).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  investedAt: timestamp('invested_at').defaultNow(),
  currentValue: decimal("current_value", { precision: 10, scale: 2 }), // Current value of the investment
  lastValuationDate: timestamp('last_valuation_date').defaultNow(), // Date of last value update
  totalReturn: decimal("total_return", { precision: 5, scale: 2 }), // Total return percentage
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  investments: many(userInvestments),
}));

export const investmentsRelations = relations(investments, ({ many }) => ({
  userInvestments: many(userInvestments),
}));

export const userInvestmentsRelations = relations(userInvestments, ({ one }) => ({
  user: one(users, {
    fields: [userInvestments.userId],
    references: [users.id],
  }),
  investment: one(investments, {
    fields: [userInvestments.investmentId],
    references: [investments.id],
  }),
}));