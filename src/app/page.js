import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-indigo-900 via-purple-700 to-blue-600 text-white shadow min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-amber-600">Social Site</h1>
        <Link
          href="/add"
          className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded shadow"
        >
          + Add Post
        </Link>
      </div>

      {/* Create Post Prompt */}
      <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-700 text-xl">
          U
        </div>
        <Link
          href="/add"
          className="flex-1 bg-amber-50 px-4 py-2 rounded-full text-amber-500 hover:bg-amber-100 transition"
        >
          What&apos;s on your mind?
        </Link>
      </div>

      {/* Posts Feed */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-amber-700">Latest Posts</h2>
        <div className="flex flex-col gap-6">
          {/* Example post (replace with dynamic posts later) */}
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
                A
              </div>
              <span className="font-semibold">Alice</span>
              <span className="text-xs text-gray-400 ml-auto">2 min ago</span>
            </div>
            <p className="text-gray-800">
              No posts yet. Be the first to{" "}
              <Link href="/add" className="text-amber-600 underline">
                add a post
              </Link>
              !
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}




