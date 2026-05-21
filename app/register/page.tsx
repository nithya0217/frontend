import TopNavbar from "@/components/TopNavbar";
import RegisterForm from "./register-form";

export const metadata = {
  title: "Register - Pivot",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="min-h-[calc(100vh-88px)] flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Register</p>
            <h1 className="text-4xl font-semibold text-slate-950">Create a Pivot account</h1>
            <p className="text-sm leading-6 text-slate-600">
              Set up your reader identity and save personalized preferences for the diversity routing experience.
            </p>
          </div>

          <RegisterForm />
        </div>
      </main>
    </div>
  );
}
