import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export function SiteFooter() {
	return (
		<footer className="border-t bg-background">
			<div className="container flex flex-col gap-8 py-8 md:py-12">
				<div className="flex flex-col gap-6 md:flex-row md:justify-between">
					<div className="space-y-4">
						<h3 className="text-lg font-medium">TSWinDRush</h3>
						<p className="text-sm text-muted-foreground max-w-xs">
							Modern web development stack with TypeScript, Tailwind CSS, and
							Next.js
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
						<div className="space-y-3">
							<h4 className="text-sm font-medium">Resources</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<Link
										href="/docs"
										className="text-muted-foreground hover:text-foreground"
									>
										Documentation
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="text-muted-foreground hover:text-foreground"
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="text-muted-foreground hover:text-foreground"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h4 className="text-sm font-medium">Legal</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<Link
										href="/privacy"
										className="text-muted-foreground hover:text-foreground"
									>
										Privacy
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-muted-foreground hover:text-foreground"
									>
										Terms
									</Link>
								</li>
								<li>
									<Link
										href="/license"
										className="text-muted-foreground hover:text-foreground"
									>
										License
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h4 className="text-sm font-medium">Social</h4>
							<div className="flex space-x-2">
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://github.com/pradeepngupta/tswindrush"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="icon-github" aria-hidden="true"></span>
										<span className="sr-only">GitHub</span>
									</a>
								</Button>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="icon-twitter" aria-hidden="true"></span>
										<span className="sr-only">Twitter</span>
									</a>
								</Button>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="icon-linkedin" aria-hidden="true"></span>
										<span className="sr-only">LinkedIn</span>
									</a>
								</Button>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://facebook.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="icon-facebook" aria-hidden="true"></span>
										<span className="sr-only">Facebook</span>
									</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} TSWinDRush. All rights reserved.
					</p>
					<p className="text-sm text-muted-foreground">
						Made with ❤️ by the TSWinDRush team
					</p>
				</div>
			</div>
		</footer>
	)
}
