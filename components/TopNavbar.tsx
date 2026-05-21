"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#", label: "Product" },
  { href: "#", label: "Customers" },
  { href: "#", label: "Resources" },
  { href: "#", label: "Company" },
];

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
            P
          </span>
          Pivot
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 lg:inline-flex"
          >
            Contact Sales
          </Link>
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 lg:inline-flex"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-flex"
          >
            Sign Up
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden">
          <div className="space-y-3 border-t border-slate-200 bg-white px-4 py-4 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact Sales
            </Link>
            <Link
              href="/login"
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="block rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

