import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    pageNum: string;
  };
}

const POSTS_PER_PAGE = 4;

function getPostsForPage(posts: any, pageNumber: any, postsPerPage: any) {
  // Calculate start and end index
  let start = (pageNumber - 1) * postsPerPage;
  let end = pageNumber * postsPerPage;

  // Slice the posts array to get posts for the given page
  let postsForPage = posts.slice(start, end);

  return postsForPage;
}

async function getPostFromParams(params: PageProps["params"]) {
  const filteredPosts = allPosts.filter((post) =>
    post.slugAsParams.startsWith(params.category)
  );
  // write a function that takes posts and page number and posts per page and returns the posts for that page
  const posts = getPostsForPage(filteredPosts, params.pageNum, POSTS_PER_PAGE);

  if (!posts) {
    null;
  }

  return posts;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  let posts = allPosts.map((post) => post.slugAsParams);
  return mapPostsToPages(posts, 2);
}

export default async function Page({ params }: PageProps) {
  const posts = await getPostFromParams(params);
  const totalPages = Math.ceil(
    allPosts.filter((post) => post.slugAsParams.startsWith(params.category))
      .length / POSTS_PER_PAGE
  );

  if (!posts) {
    notFound();
  }

  return (
    <div className="py-8">
      <ul>
        {" "}
        {posts.map((post: any) => (
          <Link href={post.slug} key={post.title}>
            <li key={post.title} className="py-6">
              <h1 className="text-3xl underline">{post.title}</h1>
              {post.description && (
                <p className="text-xl mt-0">{post.description}</p>
              )}
            </li>
          </Link>
        ))}
      </ul>

      <div>
        {parseInt(params.pageNum) !== 1 && (
          <button
            type="button"
            className="border dark:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white border-gray-500 hover:border-gray-700 hover:text-gray-700 text-gray-500  font-bold py-2 px-4 rounded"
          >
            <Link
              href={`posts/${params.category}/pagination/${
                parseInt(params.pageNum) - 1
              }`}
            >
              Prev
            </Link>{" "}
          </button>
        )}
        {parseInt(params.pageNum) < totalPages && (
          <button className="border dark:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white border-gray-500 hover:border-gray-700 hover:text-gray-700 text-gray-500  font-bold py-2 px-4 rounded">
            <Link
              href={`posts/${params.category}/pagination/${
                parseInt(params.pageNum) + 1
              }`}
            >
              Next
            </Link>{" "}
          </button>
        )}
      </div>
    </div>
  );
}

function mapPostsToPages(
  posts: string[],
  postsPerPage: number
): PageProps["params"][] {
  let result: PageProps["params"][] = [];
  let categoryPageCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    let category = post.split("/")[0];
    if (!categoryPageCounts[category]) {
      categoryPageCounts[category] = 0;
    }
    if (categoryPageCounts[category] % postsPerPage === 0) {
      result.push({
        category: category,
        pageNum: `${categoryPageCounts[category] / postsPerPage + 1}`,
      });
    }
    categoryPageCounts[category]++;
  });

  return result;
}
