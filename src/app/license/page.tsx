import { SiteFooter } from '@/app/components/footer'
import { SiteHeader } from '@/app/components/header'

export default function LicensePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1 container mx-auto px-4 py-8">
				<div className="prose dark:prose-invert prose-headings:scroll-mt-8 max-w-none">
					<div className="container mx-auto px-4 py-8">
						<div className="prose prose-gray dark:prose-invert max-w-none">
							<h1 className="text-3xl font-bold mb-4">License</h1>

							<h2>MIT License</h2>
							<p className="text-sm text-muted-foreground mb-4">
								Copyright (c) {new Date().getFullYear()} TSWinDRush
							</p>

							<p>
								Permission is hereby granted, free of charge, to any person
								obtaining a copy of this software and associated documentation
								files (the &quot;Software&quot;), to deal in the Software
								without restriction, including without limitation the rights to
								use, copy, modify, merge, publish, distribute, sublicense,
								and/or sell copies of the Software, and to permit persons to
								whom the Software is furnished to do so, subject to the
								following conditions:
							</p>

							<p>
								The above copyright notice and this permission notice shall be
								included in all copies or substantial portions of the Software.
							</p>

							<p className="text-sm">
								THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
								ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
								WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
								AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
								HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
								WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
								FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
								OTHER DEALINGS IN THE SOFTWARE.
							</p>
						</div>
					</div>
				</div>
			</main>
			<SiteFooter />
		</div>
	)
}
