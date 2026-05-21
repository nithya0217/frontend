'use client';

import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold font-lora">Pivot</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Sign In / Write Actions */}
            <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Write
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
