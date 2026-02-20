import { buildConfig } from 'payload';
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'super-secret-local-key',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
  ],
  db: sqliteD1Adapter({
    binding: process.env.DB || 'DB', 
  }),
});