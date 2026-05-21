import Link from "next/link";
import TopNavbar from "@/components/TopNavbar";

export const metadata = {
  title: "Pivot | Register, Login, Feed",
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
              Register first, then login, then explore the feed.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Start your journey by creating an account, sign in, and then discover the latest content in the feed.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/register"
                className="rounded-3xl bg-slate-950 px-6 py-5 text-center text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="rounded-3xl bg-slate-100 px-6 py-5 text-center text-base font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Login
              </Link>
              <Link
                href="/feed"
                className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-center text-base font-semibold text-slate-950 transition hover:border-slate-300"
              >
                Feed
              </Link>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-950">Step 1</p>
                Register your account.
              </div>
              <div>
                <p className="font-semibold text-slate-950">Step 2</p>
                Sign in with your credentials.
              </div>
              <div>
                <p className="font-semibold text-slate-950">Step 3</p>
                Browse the feed content.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
