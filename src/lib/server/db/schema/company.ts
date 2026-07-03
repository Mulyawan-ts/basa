import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const companies = sqliteTable('company', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),

	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),

	// Enum di-emulasi pakai text, validasi nilai dilakukan di Valibot schema
	subscriptionTier: text('subscription_tier', {
		enum: ['starter', 'growth', 'business']
	})
		.notNull()
		.default('starter'),

	maxAssets: integer('max_assets').notNull().default(15),

	address: text('address'),
	phone: text('phone'),
	taxId: text('tax_id'),

	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(unixepoch())`),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(unixepoch())`)
		.$onUpdate(() => new Date())
});
