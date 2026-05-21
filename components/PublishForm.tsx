"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { apiUrl } from "@/lib/api";

const publishSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title must be 255 characters or fewer"),
  content: z.string().min(30, "Content should be at least 30 characters"),
  tag_ids: z.array(z.number()).min(1, "Please choose at least one tag"),
});

type PublishFormValues = z.infer<typeof publishSchema>;

type TagOption = {
  id: number;
  name: string;
};

const tagOptions: TagOption[] = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Philosophy" },
  { id: 3, name: "Politics-Left" },
  { id: 4, name: "Politics-Right" },
  { id: 5, name: "Fitness" },
  { id: 6, name: "Relaxation" },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function PublishForm() {
  const [submissionState, setSubmissionState] = useState<"idle" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PublishFormValues>({
    defaultValues: { title: "", content: "", tag_ids: [] },
  });

  const selectedTags = watch("tag_ids") || [];

  const toggleTag = (tagId: number) => {
    const current = selectedTags ?? [];
    const next = current.includes(tagId)
      ? current.filter((id) => id !== tagId)
      : [...current, tagId];
    setValue("tag_ids", next, { shouldValidate: true });
  };

  const onSubmit = async (payload: PublishFormValues) => {
    const result = publishSchema.safeParse(payload);
    if (!result.success) {
      setSubmissionState("error");
      setSubmissionMessage(result.error.errors.map((error) => error.message).join(" "));
      toast.error("Please fix the form fields before publishing.");
      return;
    }

    const articlePayload = {
      author_id: 1,
      title: result.data.title,
      slug: slugify(result.data.title),
      content: result.data.content,
      tag_ids: result.data.tag_ids,
    };

    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl("/articles"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articlePayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to publish article");
      }

      setSubmissionState("success");
      setSubmissionMessage("Article submitted successfully.");
      toast.success("Success: Article published to Pivot backend.");
      reset();
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage("Unable to submit the article. Please try again.");
      toast.error("Publishing failed. Check your network or backend service.");
      console.error("Publish article error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Author Workspace</p>
        <h1 className="text-3xl font-semibold text-slate-950">Publish new thought leadership</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Compose a fresh article for Pivot. Use tags to guide the diversity-routing engine and generate a clean article payload.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-1">
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Title
            <Input type="text" placeholder="The future of blended narratives" {...register("title")} />
            {errors.title ? <p className="text-xs text-red-600">{errors.title.message}</p> : null}
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-slate-900">
          Content
          <Textarea placeholder="Write your article with clear voice and strong takeaways..." {...register("content")} />
          {errors.content ? <p className="text-xs text-red-600">{errors.content.message}</p> : null}
        </label>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-medium text-slate-900">Tags</label>
            <p className="text-sm text-slate-500">Select one or more topics</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {tagOptions.map((tag) => {
              const selected = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selected
                      ? "border-slate-900 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {tag.name}
                </button>
              );
            })}
          </div>
          {errors.tag_ids ? <p className="text-xs text-red-600">{errors.tag_ids.message}</p> : null}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-slate-600">
            <p>Publishing as <span className="font-semibold">tech_guru</span></p>
            <p className="text-xs text-slate-500">Author ID: 1</p>
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Publishing…" : "Publish Article"}
          </Button>
        </div>

        {submissionState !== "idle" ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            {submissionMessage}
          </div>
        ) : null}
      </form>
    </section>
  );
}
