'use client';

import ArticlePreview from './ArticlePreview';

export default function MainFeed() {
  const articles = [
    {
      publication: 'The Startup',
      author: 'Sarah Chen',
      date: 'Mar 15, 2025',
      title: 'How I Built a Million-Dollar Side Project in 6 Months',
      subtitle:
        'The real story behind the overnight success — it took three years of preparation and countless failures.',
      readingTime: '7 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*abc123.jpg',
      tags: ['Entrepreneurship', 'Technology'],
    },
    {
      publication: 'Better Humans',
      author: 'James Wilson',
      date: 'Mar 14, 2025',
      title: 'The Minimalist Approach to Productivity That Actually Works',
      subtitle:
        'Stop trying to optimize every minute. Sometimes doing less is the key to doing more.',
      readingTime: '5 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*def456.jpg',
      tags: ['Productivity', 'Lifestyle'],
    },
    {
      publication: 'TDS (Towards Data Science)',
      author: 'Emma Rodriguez',
      date: 'Mar 13, 2025',
      title: 'Mastering Machine Learning: The Fundamentals You Need to Know',
      subtitle:
        'A comprehensive guide to understanding the core concepts that every ML engineer should master.',
      readingTime: '12 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*ghi789.jpg',
      tags: ['AI/ML', 'Data Science'],
    },
    {
      publication: 'Design & Code',
      author: 'Michael Lee',
      date: 'Mar 12, 2025',
      title: 'Why Your UI Isn\'t Converting Users (And How to Fix It)',
      subtitle:
        'Common design mistakes that are silently killing your conversion rates — and the science behind better design.',
      readingTime: '8 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*jkl012.jpg',
      tags: ['UX/UI', 'Design'],
    },
    {
      publication: 'OneZero',
      author: 'Lisa Zhang',
      date: 'Mar 11, 2025',
      title: 'The Future of Remote Work: What Happens When Offices Become Optional',
      subtitle:
        'As companies embrace hybrid models, we\'re discovering what actually matters in how we work.',
      readingTime: '6 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*mno345.jpg',
      tags: ['Work Culture', 'Technology'],
    },
    {
      publication: 'Harvard Business Review',
      author: 'David Kim',
      date: 'Mar 10, 2025',
      title: 'Building Teams That Actually Collaborate Across Time Zones',
      subtitle:
        'The hidden factors that separate great distributed teams from dysfunctional ones.',
      readingTime: '9 min read',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*pqr678.jpg',
      tags: ['Leadership', 'Management'],
    },
  ];

  return (
    <main className="w-full max-w-5xl">
      {/* Featured / Header Section (matches screenshot layout) */}
      <header className="py-12">
        <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          The Best Website Layouts for User Experience and Conversions
        </h1>
      </header>

      {/* Two-column area: left ad / spacer, main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: ad / promo (similar to screenshot) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="rounded-lg bg-slate-50 p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white font-bold">C</div>
            </div>
            <h3 className="text-center font-semibold text-slate-900">Make your website better. Instantly.</h3>
            <div className="mt-6 text-center">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium">Free 30-Day Trial</button>
            </div>
          </div>
        </aside>

        {/* Main article column */}
        <section className="lg:col-span-6 prose prose-slate">
          {/* Author row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div>
              <div className="font-medium text-slate-800">Rob Wells</div>
              <div className="text-sm text-gray-500">May 19, 2022</div>
            </div>
          </div>

          {/* Disclosure box */}
          <div className="rounded-md bg-slate-100 p-4 mb-6 text-sm text-slate-700">
            <strong>Disclosure:</strong> Our content is reader-supported, which means we earn commissions from links on Crazy Egg. Commissions do not affect our editorial evaluations or opinions.
          </div>

          {/* Feature image */}
          <div className="mb-6 overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&q=80&auto=format&fit=crop" alt="feature" className="w-full h-64 object-cover rounded-lg" />
          </div>

          {/* Lead paragraph */}
          <article className="text-base text-slate-700 leading-7">
            <p className="mb-4">Good layout matters: it helps users scan, understand, and act. In this article we explore high-performing website layouts with examples and practical tips for improving conversions.</p>
            <p className="mb-4">(This is a sample featured article to demonstrate the layout. The feed of additional stories appears below.)</p>
          </article>

          {/* Divider */}
          <hr className="my-8" />

          {/* Articles Feed */}
          <section>
            {articles.map((article, index) => (
              <ArticlePreview key={index} {...article} />
            ))}
          </section>
        </section>

        {/* Right column: trending / recommendations */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="rounded-lg p-6 bg-white border border-gray-100 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Recommended</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>10 UX patterns that convert</li>
              <li>Design systems: getting started</li>
              <li>Writing headlines that sell</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
