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
