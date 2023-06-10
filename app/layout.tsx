import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import SearchPage from "@/components/Search";
import { allPosts } from "@/.contentlayer/generated";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Knowledge Base",
  description: "Knowledge Base built with Next.js and Contentlayer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4">
            <div></div>
            <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
              <header>
                <div className="flex items-center justify-between">
                  <ModeToggle />
                  <nav className="ml-auto text-sm font-medium space-x-6">
                    <Link href="/">Home</Link>
                  </nav>
                </div>
              </header>
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
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4">
              <div></div>
              <main className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
                {children}
              </main>
              <div></div>
            </div>
            <footer className="border-t border-gray-900 dark:border-gray-200 p-4 w-full">
              <div className="container mx-auto text-center">
                <p className="mb-3">Copyright © 2023 Knowledge Base Basic</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
