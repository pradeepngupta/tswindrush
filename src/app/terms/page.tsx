import { Layout } from '@/app/components/layout'

export default function TermsPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<div className="prose prose-gray dark:prose-invert max-w-none">
					<h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
					<p className="text-lg text-muted-foreground mb-4">
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<h2>1. Terms</h2>
					<p>
						By accessing TSWinDRush, you agree to be bound by these Terms of
						Service and comply with all applicable laws and regulations.
					</p>

					<h2>2. Use License</h2>
					<p>
						TSWinDRush is open-source software released under the MIT License.
						You are free to use, modify, and distribute the software according
						to the terms of the license.
					</p>

					<h2>3. Disclaimer</h2>
					<p>
						The materials on TSWinDRush&quot;s website are provided on an
						&quot;as is&quot; basis. TSWinDRush makes no warranties, expressed
						or implied, and hereby disclaims and negates all other warranties
						including, without limitation, implied warranties or conditions of
						merchantability, fitness for a particular purpose, or
						non-infringement of intellectual property or other violation of
						rights.
					</p>
				</div>
			</div>
		</Layout>
	)
}
