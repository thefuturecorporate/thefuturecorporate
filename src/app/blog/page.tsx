import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Blog — The Future Corporate",
  description: "Insights on people development, systems automation, and business transformation.",
};

export const revalidate = 60;

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  created_at: string;
}

async function getPosts(): Promise<BlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Insights & Ideas
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Thoughts on people, systems, and the future of business — from the desk of Avinash Chate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all"
                >
                  <p className="text-sm text-gray-400 mb-3">
                    {new Date(post.created_at).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl font-bold text-navy-dark group-hover:text-gold transition-colors mb-3">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="inline-block mt-4 text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Blog posts coming soon. Stay tuned.
              </p>
              <Link
                href="https://wa.me/918793630001"
                target="_blank"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-md font-semibold mt-6 transition-colors"
              >
                Follow us for updates
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
