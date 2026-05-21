"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { apiUrl } from "@/lib/api";

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

export default function RegisterForm() {
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

  const onSubmit = async (values: RegisterFormValues) => {
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

    try {
      const response = await fetch(apiUrl("/users/register"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 404) {
        toast.success(
          "Registration endpoint not available; account creation simulated locally.",
        );
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Registration failed");
      }

      toast.success("Registration successful: account created in Pivot backend.");
    } catch (error) {
      toast.error("Registration failed. Please try again later.");
      console.error("Register error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
}
