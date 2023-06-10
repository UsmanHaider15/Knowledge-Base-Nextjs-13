import Link from "next/link";
import SearchPage from "@/components/Search";
import { allPosts } from "@/.contentlayer/generated";

const categories = [
  {
    label: "Getting Started",
    slug: "posts/getting-started/pagination/1",
    description: "Learn how to get started with Next.js",
  },
  {
    label: "Integrations",
    slug: "posts/integrations/pagination/1",
    description:
      "Learn how to integrate Next.js with other frameworks and tools",
  },
  {
    label: "Technical Concepts",
    slug: "posts/technical/pagination/1",
    description:
      "Learn about the technical concepts behind Next.js like SSR, SSG, and more",
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 bg-blue-900 text-white dark:bg-slate-900 py-6">
        <div></div>
        <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <SearchPage
            posts={allPosts.map((post: any) => ({
              title: post.title,
              description: post.description,
              slug: post.slug,
            }))}
          />
        </div>
        <div></div>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4">
        <div></div>
        <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <h1 className="text-4xl text-center">Help Topics</h1>
          <ul>
            {categories.map((category) => (
              <Link href={category.slug}>
                <li key={category.slug} className="py-6">
                  <h1 className="text-3xl underline">{category.label}</h1>
                  {category.description && (
                    <p className="text-xl mt-0">{category.description}</p>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div></div>
      </main>
    </div>
  );
}
