"use client";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

type Post = {
  title: string;
  description: string;
  slug: string;
};

const SearchPage = ({ posts }: { posts: Post[] }) => {
  const [fuse, setFuse] = useState<Fuse<Post> | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFuse(new Fuse(posts, { keys: ["title", "description"] }));
  }, []);

  const results =
    query && fuse ? fuse.search(query).map((item) => item.item) : [];

  return (
    <div className="relative text-center py-6 bg-blue-900 text-white dark:bg-slate-900">
      <h2 className="text-3xl pb-4">How can we help?</h2>
      <input
        className="w-full border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:focus:bg-gray-800 dark:focus:border-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Articles..."
      />
      <ul className="mt-2 bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg overflow-hidden absolute left-0 w-full z-10">
        {results.map((post: Post) => (
          <li
            key={post.slug}
            className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            <a
              href={post.slug}
              className="text-lg text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
