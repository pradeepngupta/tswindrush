import { SiteFooter } from '@/app/components/footer'
import { SiteHeader } from '@/app/components/header'

export default function AboutPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1 container mx-auto px-4 py-8">
				<div className="prose dark:prose-invert prose-headings:scroll-mt-8 max-w-none">
					<h1>About TSWinDRush</h1>

					<p className="lead">
						TSWinDRush is a modern web development stack that combines
						TypeScript, Tailwind CSS, and Next.js to provide a robust foundation
						for building scalable web applications.
					</p>

					<h2>Why TSWinDRush?</h2>
					<ul>
						<li>
							Built with TypeScript for better developer experience and type
							safety
						</li>
						<li>Utilizes Tailwind CSS for rapid UI development</li>
						<li>
							Powered by Next.js 13+ with App Router for optimal performance
						</li>
						<li>Includes modern tooling and best practices out of the box</li>
					</ul>

					<h2>Core Features</h2>
					<ul>
						<li>Next.js 13+ with App Router</li>
						<li>TypeScript for type safety</li>
						<li>Tailwind CSS for styling</li>
						<li>ESLint & Prettier for code quality</li>
						<li>Jest & React Testing Library for testing</li>
						<li>Husky for Git hooks</li>
					</ul>

					<h2>Our Mission</h2>
					<p>
						We aim to provide developers with a modern, type-safe, and
						performant development stack that enables them to build
						production-ready applications quickly and efficiently.
					</p>

					<h2>Getting Started</h2>
					<p>
						To start using TSWinDRush, you can create a new project using our
						CLI:
					</p>
					<pre>
						<code>npx create-tswindrush-app my-app</code>
					</pre>

					<h2>Contributing</h2>
					<p>
						We welcome contributions from the community! Whether it&apos;s bug
						fixes, feature additions, or documentation improvements, please feel
						free to submit a pull request.
					</p>

					<h2>License</h2>
					<p>
						TSWinDRush is open-source software licensed under the MIT license.
					</p>
				</div>
			</main>
			<SiteFooter />
		</div>
	)
}
