import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface CategoryPostProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams(
  params: any
): Promise<CategoryPostProps["params"][]> {
  return allPosts.map((post) => {
    const [category, slug] = post.slugAsParams.split("/");
    return { category, slug };
  });
}

export default async function PostPage(postProps: CategoryPostProps) {
  const post = await getPostFromParams(postProps);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 py-6">
      <div></div>
      <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
        {" "}
        <article className="py-6 prose dark:prose-invert">
          <h1 className="mb-2">{post.title}</h1>
          {post.description && (
            <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
              {post.description}
            </p>
          )}
          <hr className="my-4" />
          <Mdx code={post.body.code} />
        </article>
      </div>

      <div></div>
    </div>
  );
}

async function getPostFromParams(postProps: CategoryPostProps) {
  const post = allPosts.find((post) => {
    return (
      post.slugAsParams ===
      `${postProps.params.category}/${postProps.params.slug}`
    );
  });

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata(
  postProps: CategoryPostProps
): Promise<Metadata> {
  const post = await getPostFromParams(postProps);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}
