import Link from "next/link";

export const metadata = {
  title: "Pivot | Responsive Modern Website",
};

const features = [
  {
    title: "Purposeful layout",
    description: "Design blocks line up on a strict vertical rhythm, giving every section a clear anchor.",
  },
  {
    title: "Balanced spacing",
    description: "Consistent gutters and text spacing make the page feel calm and readable on all devices.",
  },
  {
    title: "Readable typography",
    description: "Clear hierarchy with distinct headings, subheads, and button emphasis for better scanning.",
  },
];

const bentoBlocks = [
  { title: "Marketing", subtitle: "Landing pages with clear action." },
  { title: "Product", subtitle: "Feature rows built for conversion." },
  { title: "Agency", subtitle: "Portfolio sections that feel premium." },
  { title: "Startup", subtitle: "Clean, modern storytelling blocks." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-900">Pivot</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#features" className="transition hover:text-slate-900">Features</Link>
            <Link href="#grid" className="transition hover:text-slate-900">Grid</Link>
            <Link href="#work" className="transition hover:text-slate-900">Work</Link>
            <Link href="#contact" className="transition hover:text-slate-900">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Structured design</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              A modern responsive website with intentional grid-based structure.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Built with clear vertical alignment, consistent spacing, and strong visual hierarchy so content reads beautifully on laptop, tablet, and mobile.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get started
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Learn more
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-100 p-5 text-center">
                <p className="text-2xl font-semibold text-slate-950">120+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Projects</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 text-center">
                <p className="text-2xl font-semibold text-slate-950">24/7</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Support</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 text-center">
                <p className="text-2xl font-semibold text-slate-950">100%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Responsive</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-8 text-white shadow-inner">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Preview</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">A clean visual system for every screen.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Showcase product blocks, feature highlights, and content sections with calm spacing and a polished layout.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Bento grid</p>
                  <p className="mt-3 text-base font-semibold">Modular cards for quick scanning.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Alternating blocks</p>
                  <p className="mt-3 text-base font-semibold">Text and image sections that balance each other.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-16 space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Features</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Structured sections for fast, confident reading.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
              Each feature block is designed with consistent padding, clear alignment, and a precise grid layout that keeps the page tidy and approachable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="grid" className="mt-16 space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {bentoBlocks.map((block) => (
              <div key={block.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{block.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{block.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Case study</p>
                <h3 className="text-3xl font-semibold text-slate-950">Alternating content blocks</h3>
                <p className="text-base leading-7 text-slate-600">
                  Use image and text blocks side by side to create a polished rhythm that guides the reader through the page.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-100 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Design</p>
                    <p className="mt-2 text-sm text-slate-600">Clean sections with clear labels.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Scale</p>
                    <p className="mt-2 text-sm text-slate-600">Responsive grids for every device.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Visual system</p>
              <h3 className="mt-4 text-3xl font-semibold">Blocks that feel grounded and modern.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A strong grid and clear margins mean every card and section sits neatly within a predictable layout, helping users consume content faster.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Aligned</p>
                  <p className="mt-2 text-sm text-slate-300">Left-aligned text makes every paragraph easy to scan.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Balanced</p>
                  <p className="mt-2 text-sm text-slate-300">Consistent spacing keeps the page grounded.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-16 space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">How it works</p>
                <h3 className="text-3xl font-semibold text-slate-950">A responsive homepage that adapts without losing structure.</h3>
                <p className="text-base leading-7 text-slate-600">
                  The layout uses CSS Grid and Flexbox so each block stays aligned and consistent across laptop, tablet, and mobile devices.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-100 p-8">
                <div className="h-64 w-full rounded-[1.5rem] bg-slate-200" />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-sm">
            <div className="space-y-6 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Final call</p>
              <h2 className="text-3xl font-semibold">Start building a crisp, scalable website design today.</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300">
                Use a structured grid, consistent spacing, and clear typography to create a polished UI that feels modern and easy to use.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Start now
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Pivot. All rights reserved.</p>
            <p>Built with responsive grid structure and clean typography.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
