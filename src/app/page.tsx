import { SiteHeader } from '@/app/components/header'
import { SiteFooter } from '@/app/components/footer'
import { ContactForm } from '@/app/components/contact-form'
import { Button } from '@/app/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { metadata } from './metadata'

export { metadata }

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />

			<main className="flex-1">
				{/* Hero Section */}
				<section className="container flex flex-col-reverse items-center gap-8 pb-8 pt-6 md:flex-row md:gap-16 md:py-16">
					<div className="flex flex-col items-start gap-4 md:w-1/2">
						<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
							Build Modern Web Apps Faster
						</h1>
						<p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
							TSWinDRush is your complete toolkit for building modern web
							applications with TypeScript, Tailwind CSS, and Next.js.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row">
							<Link href="/docs">
								<Button size="lg" className="gap-2">
									Get Started{' '}
									<span className="icon-arrow-right" aria-hidden="true"></span>
								</Button>
							</Link>
							<a
								href="https://github.com/pradeepngupta/tswindrush"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" variant="outline">
									View on GitHub
								</Button>
							</a>
						</div>
					</div>
					<div className="md:w-1/2">
						<Image
							src="/placeholder.svg?height=400&width=400"
							alt="Hero Image"
							width={400}
							height={400}
							priority
							className="rounded-lg"
						/>
					</div>
				</section>

				{/* Features Section */}
				<section className="container py-16">
					<h2 className="mb-8 text-3xl font-bold tracking-tight">
						Key Features
					</h2>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="flex items-start gap-4">
								<span
									className="icon-check-circle mt-1 text-primary"
									aria-hidden="true"
								></span>
								<div>
									<h3 className="font-semibold">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Contact Section */}
				<section className="container py-16">
					<div className="mx-auto max-w-2xl space-y-8">
						<div className="space-y-2 text-center">
							<h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
							<p className="text-muted-foreground">
								Have questions? We&apos;d love to hear from you.
							</p>
						</div>
						<ContactForm />
					</div>
				</section>
			</main>

			<SiteFooter />
		</div>
	)
}

const features = [
	{
		title: 'TypeScript First',
		description:
			'Built with TypeScript for better developer experience and type safety.',
	},
	{
		title: 'Modern Stack',
		description:
			'Next.js 13+ with App Router, Tailwind CSS, and modern tooling.',
	},
	{
		title: 'Performance Focused',
		description:
			'Optimized for Core Web Vitals and lightning-fast performance.',
	},
	{
		title: 'Developer Experience',
		description: 'ESLint, Prettier, and Husky pre-configured for code quality.',
	},
	{
		title: 'Testing Ready',
		description: 'Jest and Playwright configured for unit and E2E testing.',
	},
	{
		title: 'SEO Optimized',
		description: 'Built-in SEO features with dynamic sitemap and robots.txt.',
	},
]
