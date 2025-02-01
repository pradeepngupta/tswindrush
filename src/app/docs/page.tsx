import { Layout } from '@/app/components/layout'

export default function DocsPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<div className="prose prose-gray dark:prose-invert max-w-none">
					<h1 className="text-3xl font-bold mb-4">Documentation</h1>

					<h2>Getting Started</h2>
					<p>
						To create a new project with TSWinDRush, run one of the following
						commands:
					</p>

					<pre>
						<code>
							npx create-tswindrush-app my-app # or yarn create tswindrush-app
							my-app
						</code>
					</pre>

					<h2>Project Structure</h2>
					<pre>
						<code>
							my-app/ ├── app/ │ ├── layout.tsx │ └── page.tsx ├── components/ │
							└── ui/ ├── lib/ ├── styles/ ├── public/ ├── tests/ ├──
							.eslintrc.js ├── .prettierrc ├── jest.config.js ├── next.config.js
							├── package.json ├── tailwind.config.js └── tsconfig.json
						</code>
					</pre>

					<h2>Features</h2>
					<h3>TypeScript Configuration</h3>
					<p>
						TSWinDRush comes with a pre-configured TypeScript setup that
						includes:
					</p>
					<ul>
						<li>Strict mode enabled</li>
						<li>Path aliases configured</li>
						<li>Latest TypeScript features enabled</li>
					</ul>

					<h3>Tailwind CSS Setup</h3>
					<p>
						The project includes a customized Tailwind CSS configuration with:
					</p>
					<ul>
						<li>Custom color palette</li>
						<li>Extended theme configuration</li>
						<li>Common plugins pre-installed</li>
					</ul>

					<h3>Next.js Features</h3>
					<p>Utilizing Next.js 15+ features including:</p>
					<ul>
						<li>App Router</li>
						<li>Server Components</li>
						<li>Route Handlers</li>
						<li>Metadata API</li>
					</ul>
				</div>
			</div>
		</Layout>
	)
}
