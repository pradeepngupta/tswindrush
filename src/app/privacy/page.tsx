import { SiteFooter } from '@/app/components/footer'
import { SiteHeader } from '@/app/components/header'

export default function PrivacyPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1 container mx-auto px-4 py-8">
				<div className="prose dark:prose-invert prose-headings:scroll-mt-8 max-w-none">
					<div className="container mx-auto px-4 py-8">
						<div className="prose prose-gray dark:prose-invert max-w-none">
							<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
							<p className="text-lg text-muted-foreground mb-4">
								Last updated: {new Date().toLocaleDateString()}
							</p>

							<h2>Information Collection and Use</h2>
							<p>
								TSWinDRush is committed to protecting your privacy. This Privacy
								Policy explains how we collect, use, and safeguard your
								information when you use our website and services.
							</p>

							<h2>Data Collection</h2>
							<p>
								We collect only the necessary information required to provide
								you with our services. This may include:
							</p>
							<ul>
								<li>Contact information (if provided)</li>
								<li>Usage data and analytics</li>
								<li>Technical information about your device and browser</li>
							</ul>

							<h2>Contact Us</h2>
							<p>
								If you have any questions about this Privacy Policy, please
								contact us.
							</p>
						</div>
					</div>
				</div>
			</main>
			<SiteFooter />
		</div>
	)
}
