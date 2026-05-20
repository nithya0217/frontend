import TopNavbar from "../../components/TopNavbar";
import FeedContainer from "../../components/FeedContainer";

export const metadata = {
  title: "Feed - Pivot",
};

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Feed</h1>
        <FeedContainer />
      </main>
    </div>
  );
}
