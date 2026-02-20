import {
	getCloudflareContext,
} from "@opennextjs/cloudflare";
import { sqliteD1Adapter } from "@payloadcms/db-d1-sqlite";
import { buildConfig } from "payload";

const cloudflare = await getCloudflareContext({ async: true });

export default buildConfig({
	secret: process.env.PAYLOAD_SECRET || "super-secret-local-key",
	admin: {
		user: "users",
	},
	collections: [
		{
			slug: "users",
			auth: true,
			fields: [],
		},
	],
	db: sqliteD1Adapter({
		binding: cloudflare.env.payload_db,
	}),
});
