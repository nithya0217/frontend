"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const users = [
  { id: 3, handle: "reader_one", role: "Reader" },
  { id: 1, handle: "tech_guru", role: "Author" },
];

export default function TopNavbar() {
  const [activeUserId, setActiveUserId] = useState<number>(() => {
    if (typeof window === "undefined") {
      return 3;
    }

    const stored = window.localStorage.getItem("pivot-active-user");
    return stored ? Number(stored) : 3;
  });

  useEffect(() => {
    window.localStorage.setItem("pivot-active-user", String(activeUserId));
  }, [activeUserId]);

  const activeUser = users.find((user) => user.id === activeUserId) ?? users[0];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
            Pivot
          </Link>
          <nav className="hidden items-center gap-4 text-sm text-slate-700 sm:flex">
            <Link href="/feed" className="transition hover:text-slate-950">
              Feed
            </Link>
            <Link href="/explore" className="transition hover:text-slate-950">
              Explore
            </Link>
            <Link href="/login" className="transition hover:text-slate-950">
              Login
            </Link>
            <Link href="/register" className="transition hover:text-slate-950">
              Register
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
            Active: <span className="font-semibold text-slate-950">{activeUser.role}</span>
          </div>
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
            {users.map((user) => (
              <button
                key={user.id}
                type="button"
                onClick={() => setActiveUserId(user.id)}
                className={`rounded-full px-3 py-1 transition ${
                  activeUserId === user.id
                    ? "bg-slate-950 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {user.role}
              </button>
            ))}
          </div>
          <Link
            href="/write"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Write a Post
          </Link>
        </div>
      </div>
    </header>
  );
}

