import Link from "next/link";

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
      <main>
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
      </main>
    </div>
  );
}
