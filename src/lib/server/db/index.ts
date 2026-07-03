import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DATABASE_URL } from '$env/static/private';
import * as companySchema from './schema/company';
import * as userSchema from './schema/user';


const schema = {
	...companySchema,
  ...userSchema
};

// contoh: "local.db" atau "./data/basa.db"
const client = createClient({ url: DATABASE_URL });

export const db = drizzle(client, { schema });
