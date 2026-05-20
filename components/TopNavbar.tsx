"use client";

import Link from "next/link";

export default function TopNavbar() {
	return (
		<header className="w-full border-b bg-white/60 backdrop-blur-sm">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
				<Link href="/" className="text-xl font-bold">
					Pivot
				</Link>
				<nav className="flex items-center gap-4">
					<Link href="/feed" className="text-sm hover:underline">
						Feed
					</Link>
					<Link href="/write" className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
						Write a Post
					</Link>
				</nav>
			</div>
		</header>
	);
}

