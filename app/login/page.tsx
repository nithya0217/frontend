"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopNavbar from "@/components/TopNavbar";
import Link from "next/link";
import { toast } from "sonner";
import { apiUrl } from "@/lib/api";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const metadata = {
  title: "Login - Pivot",
};

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const result = loginSchema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach(({ path, message }) => {
        if (path[0]) {
          setError(path[0] as keyof LoginFormValues, { message });
        }
      });
      return;
    }

    setIsSubmitting(true);
    const payload = {
      email: result.data.email,
      password: result.data.password,
    };

    try {
      const response = await fetch(apiUrl("/auth/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }

      toast.success("Login successful: authenticated with Pivot backend.");
    } catch (error) {
      toast.error("Login failed. Check your credentials or backend service.");
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-sm font-medium text-slate-900">
              Email
              <Input type="email" className="mt-2" {...register("email")} />
              {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
            </label>

            <label className="block text-sm font-medium text-slate-900">
              Password
              <Input type="password" className="mt-2" {...register("password")} />
              {errors.password ? <p className="mt-2 text-xs text-red-600">{errors.password.message}</p> : null}
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Need an account? <Link href="/register" className="font-semibold text-slate-950 hover:underline">Register</Link>
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Signing in…" : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
