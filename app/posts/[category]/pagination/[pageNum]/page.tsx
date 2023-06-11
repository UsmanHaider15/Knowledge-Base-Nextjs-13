import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import Link from "next/link";
import SearchPage from "@/components/Search";

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
    <div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 bg-blue-900 text-white dark:bg-slate-900 py-6">
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
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 pt-10">
        <div></div>
        <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <div className="grid grid-cols-3">
            <div className="md:col-span-2 col-span-3">
              <ul
                className="table clear-both p-0 m-0"
                style={{ content: '""', listStyle: "none" }}
              >
                {posts.map((post: any) => (
                  <Link href={post.slug} key={post.title}>
                    <li
                      className="px-0 pt-0 pb-5 mx-0 mt-0 mb-5 text-left border-b border-solid border-neutral-200"
                      style={{ listStyle: "outside none none" }}
                    >
                      <article
                        id="post-54"
                        className="block"
                        itemType="https://schema.org/CreativeWork"
                        style={{ listStyle: "outside none none" }}
                      >
                        <a
                          className="block text-cyan-800 bg-transparent cursor-pointer hover:text-cyan-800 hover:outline-0"
                          href="https://help.mindmappro.com/knowledge-base/what-is-mind-doodle/"
                          style={{
                            textDecoration: "none",
                            listStyle: "outside none none",
                          }}
                        >
                          <h2
                            className="m-0 font-sans text-base leading-normal normal-case text-zinc-800"
                            itemProp="headline"
                            style={{
                              fontWeight: "bold",
                              listStyle: "outside none none",
                            }}
                          >
                            {post.title}
                          </h2>
                          <div
                            className="mx-0 mt-2 mb-0 text-sm leading-normal"
                            style={{ listStyle: "outside none none" }}
                          >
                            {post.description}
                          </div>
                        </a>
                      </article>
                    </li>
                  </Link>
                ))}
              </ul>
              <div
                className="table clear-both mx-0 mt-0 mb-5 leading-7 text-zinc-600"
                style={{ content: '""' }}
              >
                {parseInt(params.pageNum) !== 1 && (
                  <span className="text-zinc-600">
                    <Link
                      href={`posts/${params.category}/pagination/${
                        parseInt(params.pageNum) - 1
                      }`}
                      className="inline-block py-2 px-4 text-sm leading-none rounded-sm cursor-pointer bg-zinc-100 hover:bg-gray-200 hover:text-cyan-800 hover:outline-0"
                      style={{
                        textDecoration: "none",
                        transition: "all 0.1s ease-in-out 0s",
                      }}
                    >
                      Prev
                    </Link>
                  </span>
                )}
                {parseInt(params.pageNum) < totalPages && (
                  <span className="text-zinc-600">
                    <Link
                      href={`posts/${params.category}/pagination/${
                        parseInt(params.pageNum) + 1
                      }`}
                      className="inline-block py-2 px-4 my-0 mr-0 ml-1 text-sm leading-none rounded-sm cursor-pointer bg-zinc-100 hover:bg-gray-200 hover:text-cyan-800 hover:outline-0"
                      style={{
                        textDecoration: "none",
                        transition: "all 0.1s ease-in-out 0s",
                        content: '">"',
                      }}
                    >
                      Next
                    </Link>
                  </span>
                )}
              </div>
            </div>
            <aside className="md:col-span-1 col-span-3">
              <section
                id="text-2"
                className="block p-8 mx-0 mt-0 mb-5 text-sm rounded bg-zinc-100"
                style={{ lineHeight: "1.4" }}
              >
                <h3
                  className="mx-0 mt-0 mb-4 font-sans normal-case text-zinc-800"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  Get started at MindMapPro.com
                </h3>
                <div className="leading-5">
                  <p className="m-0">
                    Visit
                    <a
                      href="https://www.MindMapPro.com"
                      target="_blank"
                      rel="noopener"
                      className="text-cyan-800 bg-transparent cursor-pointer hover:text-cyan-800 hover:outline-0"
                      style={{ textDecoration: "underline" }}
                    >
                      MindMapPro.com
                    </a>
                    .
                  </p>
                </div>
              </section>
              <section
                id="ht-kb-exit-widget-2"
                className="block p-8 m-0 text-sm rounded bg-zinc-100"
                style={{ lineHeight: "1.4" }}
              >
                <h3
                  className="mx-0 mt-0 mb-4 font-sans normal-case text-zinc-800"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  Need support?
                </h3>
                <div className="mx-0 mt-0 mb-3 leading-5">
                  Can't find the answer you're looking for? We're here to help!
                </div>
                <a
                  className="inline-block py-3 px-4 text-xs font-semibold leading-none text-white uppercase bg-cyan-800 cursor-pointer hover:text-cyan-800 hover:outline-0"
                  data-ht-kb-exit-href="?hkb-redirect&nonce=99a1d1ae9e&redirect=http%3A%2F%2Fhelp.MindMapPro.com%2Fsubmit-a-ticket%2F&otype=ht_kb_category&oid=3&source=widget"
                  href="?hkb-redirect&nonce=99a1d1ae9e&redirect=http%3A%2F%2Fhelp.MindMapPro.com%2Fsubmit-a-ticket%2F&otype=ht_kb_category&oid=3&source=widget"
                  target="_blank"
                  rel="nofollow"
                  style={{
                    textDecoration: "none",
                    borderRadius: 99,
                    transition: "background 0.3s ease-in-out 0s",
                  }}
                >
                  CONTACT SUPPORT
                </a>
              </section>
            </aside>
          </div>
        </div>
        <div></div>
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
