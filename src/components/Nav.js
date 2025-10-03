"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-amber-400 flex justify-between items-center shadow">
      {/* Left: Logo */}
      <Link href="/" className="text-white font-bold text-xl tracking-wide hover:text-amber-200 transition">
        SocialSite
      </Link>

      {/* Center: Show "Add Post" if on /addPost */}
      <div className="flex-1 flex justify-center">
        {pathname === "/add" && (
          <span className="text-white font-semibold text-lg">Add Post</span>
        )}
      </div>

      {/* Right: Show Home link if on /addPost, else show Add Post */}
      <div>
        {pathname === "/add" ? (
          <Link
            href="/"
            className="bg-white text-amber-500 font-semibold px-4 py-2 rounded-full shadow hover:bg-amber-50 hover:text-amber-700 transition"
          >
            Home
          </Link>
        ) : (
          <Link
            href="/add"
            className="bg-white text-amber-500 font-semibold px-4 py-2 rounded-full shadow hover:bg-amber-50 hover:text-amber-700 transition"
          >
            + Add Post
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav