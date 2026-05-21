'use client';

import {
  Home,
  Search,
  BookmarkIcon,
  PenTool,
  Bell,
} from 'lucide-react';

export default function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-gray-200 bg-white lg:flex">
      {/* Logo/Branding Section */}
      <div className="flex items-center justify-center border-b border-gray-200 px-6 py-8">
        <h1 className="font-lora text-2xl font-bold text-black">M</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-1 flex-col gap-8 px-4 py-8">
        {/* Primary Navigation */}
        <div className="space-y-6">
          <NavItem
            icon={<Home size={24} />}
            label="Home"
            href="#"
            isActive
          />
          <NavItem
            icon={<Search size={24} />}
            label="Explore"
            href="#"
          />
          <NavItem
            icon={<BookmarkIcon size={24} />}
            label="Reading List"
            href="#"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Secondary Navigation */}
        <div className="space-y-6">
          <NavItem
            icon={<PenTool size={24} />}
            label="Write"
            href="#"
          />
          <NavItem
            icon={<Bell size={24} />}
            label="Notifications"
            href="#"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />
      </nav>

      {/* User Profile Section */}
      <div className="border-t border-gray-200 px-4 py-6">
        <button className="flex w-full items-center gap-3 rounded-full p-2 transition-colors hover:bg-gray-50">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
          <div className="flex flex-col items-start text-sm">
            <span className="font-semibold text-black">You</span>
            <span className="text-xs text-gray-500">Profile</span>
          </div>
        </button>
      </div>
    </aside>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

function NavItem({ icon, label, href, isActive = false }: NavItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-colors ${
        isActive
          ? 'text-black'
          : 'text-gray-700 hover:text-black'
      }`}
    >
      <span className={isActive ? 'text-black' : 'text-gray-600'}>{icon}</span>
      <span className="font-inter text-sm font-medium">{label}</span>
    </a>
  );
}
