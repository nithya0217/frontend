'use client';

export interface StaffPick {
  title: string;
  author: string;
  readTime: string;
}

interface SidebarProps {
  staffPicks: StaffPick[];
  trendingTags: string[];
}

export default function Sidebar({ staffPicks, trendingTags }: SidebarProps) {
  return (
    <aside className="sticky top-20 h-fit space-y-8 pt-8">
      {/* Staff Picks */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Staff Picks</h3>
        <div className="space-y-6">
          {staffPicks.map((pick, idx) => (
            <div key={idx} className="cursor-pointer group">
              <div className="flex items-start gap-2">
                <span className="text-gray-300 text-2xl font-bold flex-shrink-0 w-6">{idx + 1}.</span>
                <div className="min-w-0">
                  <h4 className="text-sm font-lora font-semibold text-black group-hover:text-gray-700 line-clamp-2 leading-tight transition-colors">
                    {pick.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">{pick.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium text-center"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t border-gray-200 pt-8 text-xs text-gray-500 space-y-2">
        <p>Help</p>
        <p>About</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
    </aside>
  );
}
