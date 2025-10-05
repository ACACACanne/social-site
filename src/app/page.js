'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      setPosts(storedPosts);
    };

    loadPosts();

    // listen for changes from other tabs
    window.addEventListener('storage', loadPosts);
    return () => window.removeEventListener('storage', loadPosts);
  }, []);

  // Remove post by index
  const handleRemove = (indexToRemove) => {
    const updatedPosts = posts.filter((_, idx) => idx !== indexToRemove);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-indigo-900 via-purple-700 to-blue-600 text-white shadow min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-amber-600">Your Exprience Site.</h1>
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
        <h2 className="text-lg font-semibold mb-4">Latest Posts</h2>
        <div className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white/10 rounded-lg shadow p-5 border border-blue-400 relative">
              {/* Remove (X) Button */}
              <button
                onClick={() => handleRemove(index)}
                className="absolute top-3 right-3 text-blue-200 hover:text-red-400 text-lg font-bold focus:outline-none transition-colors rounded-full hover:bg-red-100/40"
                aria-label="Remove post"
                title="Remove post"
              >
                ×
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center font-bold text-blue-900">
                  {post.userName.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold">{post.userName}</span>
                <span className="text-xs text-blue-200 ml-auto">Just now</span>
              </div>
              <p className="text-blue-100 mb-2">{post.content}</p>
              {/* Show images if present */}
              {Array.isArray(post.images) && post.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {post.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`Post image ${imgIdx + 1}`}
                      className="w-full h-48 object-cover rounded border border-blue-200 bg-white"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}