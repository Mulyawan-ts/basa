import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { companies } from './company';

export const users = sqliteTable('user', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),

	// WAJIB: user selalu terikat company, gak boleh null
	companyId: text('company_id')
		.notNull()
		.references(() => companies.id, { onDelete: 'cascade' }),

	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),

	role: text('role', { enum: ['admin', 'teknisi'] })
		.notNull()
		.default('teknisi'),

	// SQLite gak punya boolean native, disimpan sebagai integer (0/1)
	isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),

	invitedBy: text('invited_by'),

	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(unixepoch())`),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(unixepoch())`)
		.$onUpdate(() => new Date())
});