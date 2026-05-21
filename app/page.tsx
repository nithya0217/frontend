import Link from "next/link";
import TopNavbar from "@/components/TopNavbar";

export const metadata = {
  title: "Pivot | Diversity Routing Publishing Platform",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Pivot</p>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Content discovery with contrarian routing for richer perspectives.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Explore a platform built around diversity routing, where readers see familiar recommendations and opposing views through a deliberate content engine.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/feed"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Visit Feed
              </Link>
              <Link
                href="/write"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:border-slate-300 sm:w-auto"
              >
                Write a Post
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
