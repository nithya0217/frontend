import TopNavbar from "@/components/TopNavbar";

export const metadata = {
  title: "Explore - Pivot",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore</p>
            <h1 className="text-4xl font-semibold text-slate-950">How the Diversity Routing Engine works</h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Pivot's contrarian routing layer surfaces content from opposite tag domains to stretch reader perspectives. The platform intentionally flips the target interest signal — for example, a technology reader sees philosophy content when the Diversity Feed is active.
            </p>
            <div className="grid gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Algorithmic routing rule</p>
              <p>
                If the reader is on <span className="font-semibold">My Discovery Feed</span>, Pivot shows typical interest articles such as <span className="font-semibold">Technology</span>. If the reader switches to <span className="font-semibold">Diversity Feed</span>, Pivot delivers opposite content such as <span className="font-semibold">Philosophy</span>.
              </p>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Use the feed to test the contrarian routing rule and switch to the author workspace to seed new content with relevant tags.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
