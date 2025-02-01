'use client'

import { Button } from '@/app/components/ui/button'
import { ThemeToggle } from '@/app/components/theme-toggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}
		>
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center space-x-4">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/logo.png"
							alt="TSWinDRush"
							width={32}
							height={32}
							className="w-8 h-8"
						/>
					</Link>
				</div>
				<div className="flex-1"></div>
				<div className="flex items-center space-x-4">
					{/* Desktop Navigation */}
					<nav className="hidden md:flex md:space-x-4">
						<Link
							href="/about"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							About TSWinDRush
						</Link>
						<Link
							href="/docs"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Get Started
						</Link>
					</nav>

					{/* GitHub Star Button */}
					<a
						href="https://github.com/pradeepngupta/tswindrush"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden md:inline-flex"
					>
						<Button variant="outline" size="sm" className="gap-2">
							<span className="icon-github" aria-hidden="true"></span>
							Star on GitHub
						</Button>
					</a>

					{/* Theme Toggle */}
					<ThemeToggle />

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span
							className={`icon-menu ${isMenuOpen ? 'open' : ''}`}
							aria-hidden="true"
						></span>
						<span className="sr-only">Toggle menu</span>
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
						<nav className="container grid gap-6 p-6">
							<Link
								href="/about"
								className="text-lg font-medium transition-colors hover:text-primary"
								onClick={() => setIsMenuOpen(false)}
							>
								About TSWinDRush
							</Link>
							<Link
								href="/docs"
								className="text-lg font-medium transition-colors hover:text-primary"
								onClick={() => setIsMenuOpen(false)}
							>
								Get Started
							</Link>
							<a
								href="https://github.com/pradeepngupta/tswindrush"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg font-medium transition-colors hover:text-primary"
								onClick={() => setIsMenuOpen(false)}
							>
								<Button variant="outline" className="w-full gap-2">
									<span className="icon-github" aria-hidden="true"></span>
									Star on GitHub
								</Button>
							</a>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
