import Link from "next/link";
import SearchPage from "@/components/Search";
import { allPosts } from "@/.contentlayer/generated";

const categories = [
  {
    label: "Getting Started",
    slug: "posts/getting-started/pagination/1",
    description: "Learn how to get started with Next.js",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-gettingstarted-1.png",
  },
  {
    label: "Integrations",
    slug: "posts/integrations/pagination/1",
    description: "Link Mind Map Pro to WordPress and Slack",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-integration.png",
  },
  {
    label: "Tool Guides",
    slug: "posts/technical/pagination/1",
    description: "How to streamline workflow with integrated tools",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-tools.png",
  },
  {
    label: "Task Management Guide",
    slug: "posts/getting-started/pagination/1",
    description: "Learn to stay on track and enhance productivity",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-task.png",
  },
  {
    label: "Team Guides",
    slug: "posts/integrations/pagination/1",
    description: "Information about collaborating and chatting with your team",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-team.png",
  },
  {
    label: "Admin Guide",
    slug: "posts/technical/pagination/1",
    description: "Documentation about managing settings and users",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-admin.png",
  },
  {
    label: "What's New",
    slug: "posts/technical/pagination/1",
    description: "The latest features and updates at your fingertips",
    image_url:
      "https://help.mindmappro.com/wp-content/uploads/2019/01/icon-admin.png",
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 bg-zinc-200 dark:bg-zinc-900 py-6">
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

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 pt-10">
        <div></div>
        <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <div className="grid grid-cols-3">
            <div className="md:col-span-2 col-span-3">
              <h2
                className="px-0 pt-0 pb-2 mx-0 mt-0 mb-5 font-sans text-xl leading-9 normal-case border-b border-solid border-neutral-200 md:mx-0 md:mt-0 md:mb-8"
                style={{ fontWeight: "bold" }}
              >
                Help Topics
              </h2>
              <ul
                className="flex p-0 m-0 sm:-mx-3"
                style={{ flexFlow: "row wrap", listStyle: "none" }}
              >
                {categories.map((category) => (
                  <li
                    className="w-full text-left basis-auto sm:w-1/2 sm:px-2 sm:py-0"
                    style={{ listStyle: "outside none none" }}
                    key={category.slug}
                  >
                    <div
                      className="flex h-full"
                      style={{ listStyle: "outside none none" }}
                    >
                      <Link
                        className="flex py-6 px-2 w-full h-full bg-transparent border-b border-solid cursor-pointer border-neutral-200 hover:outline-0"
                        href={category.slug}
                      >
                        <div
                          className="flex items-center my-0 mr-5 ml-0 text-center"
                          style={{
                            flexBasis: 35,
                            minWidth: 35,
                            listStyle: "outside none none",
                          }}
                        >
                          <img
                            src={category.image_url}
                            className="block my-0 mx-auto border-none"
                            alt=""
                            style={{
                              transition: "all 0.3s ease-in-out 0s",
                              maxWidth: 35,
                              maxHeight: 35,
                              listStyle: "outside none none",
                            }}
                          />
                        </div>
                        <div
                          className="flex flex-wrap items-center w-full"
                          style={{ listStyle: "outside none none" }}
                        >
                          <h2
                            className="self-end m-0 w-full font-sans text-lg leading-tight normal-case"
                            style={{
                              fontWeight: "bold",
                              listStyle: "outside none none",
                            }}
                          >
                            {category.label}
                          </h2>
                          <div
                            className="self-start mx-0 mt-2 mb-0 text-sm leading-5 text-zinc-500"
                            style={{ listStyle: "outside none none" }}
                          >
                            {category.description}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="md:col-span-1 col-span-3">
              <section
                id="text-3"
                className="block p-8 mx-0 mt-0 mb-5 text-sm rounded bg-zinc-200 dark:bg-zinc-900"
                style={{ lineHeight: "1.4" }}
              >
                <h3
                  className="mx-0 mt-0 mb-4 font-sans normal-case"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  Get started at nextjstemplatestore.com
                </h3>
                <div className="leading-5">
                  <p className="m-0">
                    Visit&nbsp;
                    <a
                      href="https://www.nextjstemplatestore.com"
                      target="_blank"
                      rel="noopener"
                      className="bg-transparent cursor-pointer hover:outline-0"
                      style={{ textDecoration: "underline" }}
                    >
                      nextjstemplatestore.com
                    </a>
                    .
                  </p>
                </div>
              </section>
              <section
                id="ht-kb-articles-widget-1"
                className="block p-8 mx-0 mt-0 mb-5 text-sm rounded bg-zinc-200 dark:bg-zinc-900"
                style={{ lineHeight: "1.4" }}
              >
                <h3
                  className="mx-0 mt-0 mb-4 font-sans normal-case"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  Popular Articles
                </h3>
                <ul className="p-0 m-0 leading-5" style={{ listStyle: "none" }}>
                  <li
                    className="relative mx-0 mt-0 mb-2 text-left"
                    style={{
                      lineHeight: "1.3",
                      listStyle: "outside none none",
                    }}
                  >
                    <a
                      className="py-0 pr-6 pl-0 break-words bg-transparent cursor-pointer hover:outline-0"
                      href="https://help.mindmappro.com/knowledge-base/advanced-swot/"
                      style={{
                        textDecoration: "none",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        listStyle: "outside none none",
                      }}
                    >
                      Advanced SWOT analysis
                    </a>
                  </li>
                  <li
                    className="relative mx-0 mt-0 mb-2 text-left"
                    style={{
                      lineHeight: "1.3",
                      listStyle: "outside none none",
                    }}
                  >
                    <a
                      className="py-0 pr-6 pl-0 break-words bg-transparent cursor-pointer hover:outline-0"
                      href="https://help.mindmappro.com/knowledge-base/manage-team/"
                      style={{
                        textDecoration: "none",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        listStyle: "outside none none",
                      }}
                    >
                      Create and manage teams
                    </a>
                  </li>
                  <li
                    className="relative mx-0 mt-0 mb-2 text-left"
                    style={{
                      lineHeight: "1.3",
                      listStyle: "outside none none",
                    }}
                  >
                    <a
                      className="py-0 pr-6 pl-0 break-words bg-transparent cursor-pointer hover:outline-0"
                      href="https://help.mindmappro.com/knowledge-base/wordpress-sitemap/"
                      style={{
                        textDecoration: "none",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        listStyle: "outside none none",
                      }}
                    >
                      WordPress sitemap
                    </a>
                  </li>
                  <li
                    className="relative mx-0 mt-0 mb-2 text-left"
                    style={{
                      lineHeight: "1.3",
                      listStyle: "outside none none",
                    }}
                  >
                    <a
                      className="py-0 pr-6 pl-0 break-words bg-transparent cursor-pointer hover:outline-0"
                      href="https://help.mindmappro.com/knowledge-base/media/"
                      style={{
                        textDecoration: "none",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        listStyle: "outside none none",
                      }}
                    >
                      Add images and files
                    </a>
                  </li>
                  <li
                    className="relative m-0 text-left"
                    style={{
                      lineHeight: "1.3",
                      listStyle: "outside none none",
                    }}
                  >
                    <a
                      className="py-0 pr-6 pl-0 break-words bg-transparent cursor-pointer hover:outline-0"
                      href="https://help.mindmappro.com/knowledge-base/tasks/"
                      style={{
                        textDecoration: "none",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        listStyle: "outside none none",
                      }}
                    >
                      Add and edit tasks
                    </a>
                  </li>
                </ul>
              </section>
              <section
                id="ht-kb-exit-widget-1"
                className="block p-8 m-0 text-sm rounded bg-zinc-200 dark:bg-zinc-900"
                style={{ lineHeight: "1.4" }}
              >
                <h3
                  className="mx-0 mt-0 mb-4 font-sans normal-case"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  Need support?
                </h3>
                <div className="mx-0 mt-0 mb-3 leading-5">
                  Can't find the answer you're looking for? We're here to help!
                </div>
                <a
                  className="inline-block py-3 px-4 text-xs font-semibold leading-none text-white uppercase bg-cyan-800 cursor-pointer hover:outline-0"
                  data-ht-kb-exit-href="?hkb-redirect&nonce=6e1f05e2d1&redirect=http%3A%2F%2Fhelp.mindmappro.com%2Fsubmit-a-ticket%2F&otype=&oid=&source=widget"
                  href="?hkb-redirect&nonce=6e1f05e2d1&redirect=http%3A%2F%2Fhelp.mindmappro.com%2Fsubmit-a-ticket%2F&otype=&oid=&source=widget"
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
      </main>
    </div>
  );
}
