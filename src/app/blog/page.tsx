import { Layout } from '@/app/components/layout'

export default function BlogPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<div className="prose prose-gray dark:prose-invert max-w-none">
					<h1 className="text-3xl font-bold mb-4">Blog</h1>
					<p className="text-lg text-muted-foreground">
						Stay updated with the latest news, tutorials, and insights about
						TSWinDRush and modern web development.
					</p>
					<div className="mt-8">
						<p className="text-muted-foreground">
							No blog posts yet. Check back soon!
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}
