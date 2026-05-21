'use client';

import LeftSidebar from './LeftSidebar';
import MainFeed from './MainFeed';
import RightSidebar from './RightSidebar';

/**
 * MediumLayout Component
 *
 * A responsive, pixel-perfect clone of the Medium homepage layout.
 * Features a three-column layout with:
 * - Sticky left sidebar navigation (hidden on mobile, visible on desktop)
 * - Centered main content area with article feed
 * - Right sidebar with recommendations and recommendations (hidden on tablet, visible on desktop)
 *
 * The layout gracefully adapts to different screen sizes:
 * - Mobile: Full-width feed with hamburger menu
 * - Tablet: Full-width feed without sidebars
 * - Desktop: Three-column layout with all sidebars
 */
export default function MediumLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - Sticky Navigation */}
      <LeftSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col items-center lg:ml-64">
        {/* Top Navbar for Mobile */}
        <TopNavbar />

        {/* Content Container */}
        <div className="flex w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
          {/* Main Feed */}
          <MainFeed />

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

/**
 * TopNavbar Component
 *
 * Mobile-optimized navigation bar that appears above the main content
 * on small screens. Hidden on larger screens where the left sidebar is available.
 */
function TopNavbar() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white lg:hidden">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="font-lora text-xl font-bold text-black">M</h1>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
