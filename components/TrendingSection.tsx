'use client';

export interface TrendingItem {
  rank: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
}

interface TrendingCardProps {
  item: TrendingItem;
}

function TrendingCard({ item }: TrendingCardProps) {
  return (
    <div className="pb-6 px-4">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.rank}</span>
      <h3 className="text-lg font-bold font-lora text-black mt-2 leading-tight hover:text-gray-700 cursor-pointer transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">{item.author}</span>
        <span className="text-xs text-gray-500">{item.readTime}</span>
      </div>
    </div>
  );
}

interface TrendingListProps {
  items: TrendingItem[];
}

export default function TrendingList({ items }: TrendingListProps) {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-base font-semibold text-gray-900 mb-8">Trending on Pivot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <TrendingCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
