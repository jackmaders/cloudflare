import { greet } from "@cloudflare/shared";

export default function Home() {
	const message = greet("Next.js 16 User");

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-4xl font-bold tracking-tight">{message}</h1>
		</main>
	);
}
