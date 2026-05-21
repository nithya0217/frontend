"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopNavbar from "@/components/TopNavbar";
import Link from "next/link";
import { toast } from "sonner";

const registerSchema = z
  .object({
    username: z.string().min(2, "Username is required"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const metadata = {
  title: "Register - Pivot",
};

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    const result = registerSchema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach(({ path, message }) => {
        if (path[0]) {
          setError(path[0] as keyof RegisterFormValues, { message });
        }
      });
      return;
    }

    setIsSubmitting(true);
    const payload = {
      username: result.data.username,
      email: result.data.email,
      password: result.data.password,
    };

    console.log("POST /api/auth/register", payload);
    toast.success("Registration successful: account creation simulated.");
    setTimeout(() => setIsSubmitting(false), 400);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />
      <main className="mx-auto max-w-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Register</p>
            <h1 className="text-4xl font-semibold text-slate-950">Create a Pivot account</h1>
            <p className="text-sm leading-6 text-slate-600">
              Set up your reader identity and save personalized preferences for the diversity routing experience.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-sm font-medium text-slate-900">
              Username
              <Input type="text" className="mt-2" {...register("username")} />
              {errors.username ? <p className="mt-2 text-xs text-red-600">{errors.username.message}</p> : null}
            </label>

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

            <label className="block text-sm font-medium text-slate-900">
              Confirm Password
              <Input type="password" className="mt-2" {...register("confirmPassword")} />
              {errors.confirmPassword ? (
                <p className="mt-2 text-xs text-red-600">{errors.confirmPassword.message}</p>
              ) : null}
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Already have an account? <Link href="/login" className="font-semibold text-slate-950 hover:underline">Login</Link>
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Registering…" : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
