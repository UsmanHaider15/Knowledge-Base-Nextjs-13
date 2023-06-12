import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import SearchPosts from "./SearchPosts";
import humanify from "@/app/utils/humanify";

const PageNavigation = ({
  paths,
}: {
  paths: { path: string; label: string }[];
}) => {
  return (
    <div className="sm:col-span-1 md:col-span-6 2xl:col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 bg-slate-800 py-2">
        <div></div>
        <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <Link href={"/"}>Home</Link> --{" "}
              {paths.map(({ path, label }) => (
                <Link href={path}>{humanify(label)}</Link>
              ))}
            </div>
            <div>
              <SearchPosts
                posts={allPosts.map((post: any) => ({
                  title: post.title,
                  description: post.description,
                  slug: post.slug,
                }))}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PageNavigation;
