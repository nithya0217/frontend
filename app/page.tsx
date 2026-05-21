'use client';

import Header from '@/components/Header';
import TrendingSection from '@/components/TrendingSection';
import FeedArticleItem, { FeedArticle } from '@/components/FeedArticleItem';
import Sidebar from '@/components/Sidebar';
import { TrendingItem } from '@/components/TrendingSection';

// Trending items data
const trendingItems: TrendingItem[] = [
  {
    rank: '01',
    title: 'The Future of Artificial Intelligence',
    description: 'Exploring how AI is reshaping industries and creating new opportunities for innovation.',
    author: 'Sarah Chen',
    readTime: '8 min read',
  },
  {
    rank: '02',
    title: 'Remote Work: Culture and Productivity',
    description: 'How distributed teams are redefining workplace culture and maintaining productivity.',
    author: 'Marcus Williams',
    readTime: '6 min read',
  },
  {
    rank: '03',
    title: 'Sustainable Tech: Building Tomorrow',
    description: 'Technology companies leading the charge in environmental sustainability and green innovation.',
    author: 'Emma Rodriguez',
    readTime: '7 min read',
  },
];

// Main feed articles
const feedArticles: FeedArticle[] = [
  {
    id: 1,
    title: 'The Psychology of Design: Why Users Click',
    subtitle:
      'Understanding user behavior through psychological principles can transform your design approach and increase engagement.',
    author: 'James Mitchell',
    authorImage: '',
    publishDate: 'May 15, 2024',
    readTime: '12 min read',
    thumbnail: '',
    tags: ['Design', 'Psychology', 'UX'],
  },
  {
    id: 2,
    title: 'Mastering Async JavaScript: Callbacks, Promises, and Beyond',
    subtitle:
      'A deep dive into asynchronous programming patterns that every JavaScript developer should understand.',
    author: 'Alex Thompson',
    authorImage: '',
    publishDate: 'May 13, 2024',
    readTime: '15 min read',
    thumbnail: '',
    tags: ['JavaScript', 'Web Development', 'Programming'],
  },
  {
    id: 3,
    title: 'The Art of Minimalist Marketing',
    subtitle:
      'How leading brands use simplicity and clarity to cut through the noise and connect with their audience.',
    author: 'Lisa Chen',
    authorImage: '',
    publishDate: 'May 12, 2024',
    readTime: '9 min read',
    thumbnail: '',
    tags: ['Marketing', 'Branding', 'Strategy'],
  },
  {
    id: 4,
    title: 'Building Scalable APIs: Architecture Patterns That Work',
    subtitle:
      'Best practices and proven patterns for designing APIs that can handle millions of requests while remaining maintainable.',
    author: 'David Kumar',
    authorImage: '',
    publishDate: 'May 10, 2024',
    readTime: '18 min read',
    thumbnail: '',
    tags: ['Backend', 'API Design', 'Architecture'],
  },
  {
    id: 5,
    title: 'The Rise of Micro-interactions in Modern UI',
    subtitle:
      'Subtle animations and micro-interactions are revolutionizing how users perceive and interact with digital products.',
    author: 'Sofia Patel',
    authorImage: '',
    publishDate: 'May 8, 2024',
    readTime: '10 min read',
    thumbnail: '',
    tags: ['Design', 'Animation', 'User Experience'],
  },
  {
    id: 6,
    title: 'Content Strategy in the Age of Information Overload',
    subtitle:
      'How to create content that stands out, resonates with your audience, and drives meaningful engagement.',
    author: 'Michael Green',
    authorImage: '',
    publishDate: 'May 6, 2024',
    readTime: '11 min read',
    thumbnail: '',
    tags: ['Content', 'Strategy', 'Marketing'],
  },
];

// Staff picks for sidebar
const staffPicks = [
  {
    title: 'Why Great Design Is Humble',
    author: 'By Design Daily',
    readTime: '7 min',
  },
  {
    title: 'The Future of Work Is Here',
    author: 'By Tech Futures',
    readTime: '9 min',
  },
  {
    title: 'Learning in Public: A Developer\'s Guide',
    author: 'By Dev Community',
    readTime: '6 min',
  },
];

// Trending topics
const trendingTags = [
  'Technology',
  'Design',
  'Business',
  'Marketing',
  'Startups',
  'AI',
  'Remote Work',
  'Productivity',
  'Culture',
  'Innovation',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Trending Section */}
      <TrendingSection items={trendingItems} />

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
          {/* Left Column - Feed */}
          <div className="lg:col-span-2">
            {feedArticles.map((article) => (
              <FeedArticleItem key={article.id} article={article} />
            ))}

            {/* Load More */}
            <div className="py-12 text-center">
              <button className="px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                Load More Stories
              </button>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="hidden lg:block">
            <Sidebar staffPicks={staffPicks} trendingTags={trendingTags} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold text-black mb-3">About</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Our story</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Writers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">New</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discover</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Help</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Follow</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Pivot UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
