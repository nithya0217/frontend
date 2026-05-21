"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FeedPost } from "@/lib/mockPosts";

const MAX_TAGS = 5;

type PostEditorModalProps = {
  onPostCreate?: (post: FeedPost) => void;
};

export default function PostEditorModal({ onPostCreate }: PostEditorModalProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [tagInput, setTagInput] = React.useState("");
  const [tags, setTags] = React.useState<string[]>([]);
  const [bodyHtml, setBodyHtml] = React.useState("");
  const [errors, setErrors] = React.useState<{ title?: string; tags?: string; body?: string }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const editorRef = React.useRef<HTMLDivElement | null>(null);

  const addTag = () => {
    const rawTag = tagInput.trim();
    if (!rawTag) return;
    const normalizedTag = rawTag.replace(/[^a-zA-Z0-9\- ]+/g, "").trim();
    if (!normalizedTag) return;
    if (tags.includes(normalizedTag)) {
      setTagInput("");
      return;
    }
    if (tags.length >= MAX_TAGS) {
      setErrors((prev) => ({ ...prev, tags: `Up to ${MAX_TAGS} tags are allowed.` }));
      return;
    }
    setTags((current) => [...current, normalizedTag]);
    setTagInput("");
    setErrors((prev) => ({ ...prev, tags: undefined }));
  };

  const removeTag = (tag: string) => {
    setTags((current) => current.filter((existing) => existing !== tag));
  };

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!title.trim()) nextErrors.title = "Title is required.";
    if (!tags.length) nextErrors.tags = "Add at least one tag.";
    if (!bodyHtml.trim() || bodyHtml === "<div><br></div>") nextErrors.body = "Body cannot be empty.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleBodyInput = (event: React.FormEvent<HTMLDivElement>) => {
    setBodyHtml(event.currentTarget.innerHTML);
    setErrors((prev) => ({ ...prev, body: undefined }));
  };

  const handleFormat = (command: "bold" | "italic" | "underline") => {
    document.execCommand(command);
    editorRef.current?.focus();
    setBodyHtml(editorRef.current?.innerHTML ?? "");
  };

  const resetForm = () => {
    setTitle("");
    setTagInput("");
    setTags([]);
    setBodyHtml("");
    setErrors({});
    setStatusMessage(null);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatusMessage("Please fill in all required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const payload = {
      title: title.trim(),
      tags,
      body: bodyHtml,
      author: "current_author",
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to create post");
      }

      const newPost: FeedPost = await response.json();
      onPostCreate?.(newPost);
      setStatusMessage("Post created successfully.");
      resetForm();
      setOpen(false);
    } catch (error) {
      console.error(error);
      setStatusMessage("Unable to create the post. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          Create post
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl focus:outline-none">
          <div className="flex items-center justify-between gap-4 pb-4">
            <div>
              <Dialog.Title className="text-xl font-semibold text-slate-950">New post</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-600">
                Write a title, choose tags, and compose your body in rich text format.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
              >
                Close
              </button>
            </Dialog.Close>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Title
                <Input
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                    setErrors((prev) => ({ ...prev, title: undefined }));
                  }}
                  placeholder="Enter a compelling title"
                />
                {errors.title ? <p className="text-xs text-red-600">{errors.title}</p> : null}
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-900">
                Tags
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(event) => setTagInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addTag();
                      }
                    }}
                    placeholder="Add a tag and press Enter"
                  />
                  <Button type="button" variant="secondary" size="sm" onClick={addTag}>
                    Add
                  </Button>
                </div>
                {tags.length ? (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="text-slate-500 hover:text-slate-900">
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                ) : null}
                {errors.tags ? <p className="text-xs text-red-600">{errors.tags}</p> : null}
              </label>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("bold")}>Bold</Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("italic")}>Italic</Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("underline")}>Underline</Button>
              </div>
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Body
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={handleBodyInput}
                  className="min-h-[220px] rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-900 shadow-sm outline-none transition duration-150 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  style={{ whiteSpace: "pre-wrap" }}
                />
                {errors.body ? <p className="text-xs text-red-600">{errors.body}</p> : null}
              </label>
            </div>

            {statusMessage ? (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {statusMessage}
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">Submissions cannot be empty and require at least one tag.</p>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Posting…" : "Publish post"}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
