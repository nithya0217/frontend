'use client';

export default function RightSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-80 flex-col gap-8 overflow-y-auto border-l border-gray-200 bg-white px-6 py-8 lg:flex">
      {/* Staff Picks Section */}
      <section>
        <h3 className="mb-4 font-lora text-lg font-bold text-black">
          Staff Picks
        </h3>
        <div className="space-y-6">
          <StaffPickItem
            author="Sarah Chen"
            title="Why Minimalism Changed My Life"
            reads="450K"
          />
          <StaffPickItem
            author="James Wilson"
            title="The Future of Artificial Intelligence"
            reads="823K"
          />
          <StaffPickItem
            author="Emma Rodriguez"
            title="Building Better Habits: A Science-Based Approach"
            reads="356K"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Recommended Topics Section */}
      <section>
        <h3 className="mb-4 font-lora text-lg font-bold text-black">
          Recommended Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Technology',
            'Design',
            'Writing',
            'Business',
            'Self',
            'Startups',
            'Politics',
            'Climate',
            'Culture',
            'Education',
          ].map((topic) => (
            <button
              key={topic}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-500 hover:bg-gray-50"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Who to Follow Section */}
      <section>
        <h3 className="mb-4 font-lora text-lg font-bold text-black">
          Who to Follow
        </h3>
        <div className="space-y-4">
          <FollowCard
            name="Dr. Marcus Johnson"
            username="@drmarcus"
            bio="AI researcher & author"
          />
          <FollowCard
            name="Lisa Zhang"
            username="@lisadesigns"
            bio="Product designer & entrepreneur"
          />
          <FollowCard
            name="David Kim"
            username="@davidkim"
            bio="Software engineer & open source advocate"
          />
          <FollowCard
            name="Anna Thompson"
            username="@annathinks"
            bio="Writer & digital strategist"
          />
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-gray-200 pt-6">
        <nav className="space-y-3 text-sm text-gray-600">
          <a href="#" className="block hover:text-gray-900">
            Help
          </a>
          <a href="#" className="block hover:text-gray-900">
            About
          </a>
          <a href="#" className="block hover:text-gray-900">
            Terms
          </a>
          <a href="#" className="block hover:text-gray-900">
            Privacy
          </a>
        </nav>
      </div>
    </aside>
  );
}

interface StaffPickItemProps {
  author: string;
  title: string;
  reads: string;
}

function StaffPickItem({ author, title, reads }: StaffPickItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-700">{author}</span> in Picks
      </p>
      <a
        href="#"
        className="font-lora text-base font-bold leading-snug text-black hover:text-gray-700"
      >
        {title}
      </a>
      <p className="text-xs text-gray-500">{reads} reads</p>
    </div>
  );
}

interface FollowCardProps {
  name: string;
  username: string;
  bio: string;
}

function FollowCard({ name, username, bio }: FollowCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="font-inter text-sm font-semibold text-black">
            {name}
          </h4>
          <p className="text-xs text-gray-600">{username}</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
      </div>
      <p className="mb-3 max-h-[3rem] overflow-hidden text-xs text-gray-600">{bio}</p>
      <button className="w-full rounded-full border border-gray-300 bg-white py-1.5 text-xs font-semibold text-gray-900 transition-all hover:border-gray-500 hover:bg-gray-50">
        Follow
      </button>
    </div>
  );
}
