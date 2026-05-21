import TopNavbar from "@/components/TopNavbar";
import LoginForm from "./login-form";

export const metadata = {
  title: "Login - Pivot",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="mx-auto max-w-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Login</p>
            <h1 className="text-4xl font-semibold text-slate-950">Sign in to Pivot</h1>
            <p className="text-sm leading-6 text-slate-600">
              Enter your credentials to access the reading and authoring workspace.
            </p>
          </div>

          <LoginForm />
        </div>
      </main>
    </div>
  );
}
