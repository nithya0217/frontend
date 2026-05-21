import TopNavbar from "@/components/TopNavbar";
import PublishForm from "@/components/PublishForm";

export const metadata = {
  title: "Write - Pivot",
};

export default function WritePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Author mode</p>
          <h1 className="text-4xl font-semibold text-slate-950">Publish your next insight</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Use the author dashboard to share new content and seed the platform with strong signals for the diversity engine.
          </p>
        </div>
        <PublishForm />
      </main>
    </div>
  );
}
