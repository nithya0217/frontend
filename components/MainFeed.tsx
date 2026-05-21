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
    <main className="w-full max-w-2xl">
      {/* Welcome Section */}
      <div className="border-b border-gray-200 py-8">
        <h1 className="font-lora text-5xl font-bold text-black">
          Welcome back
        </h1>
        <p className="mt-2 text-base text-gray-600">
          Here's your personalized feed from topics and writers you follow.
        </p>
      </div>

      {/* Articles Feed */}
      <section>
        {articles.map((article, index) => (
          <ArticlePreview key={index} {...article} />
        ))}
      </section>

      {/* Load More */}
      <div className="border-t border-gray-200 py-8 text-center">
        <button className="font-inter text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900">
          Load more stories
        </button>
      </div>
    </main>
  );
}
