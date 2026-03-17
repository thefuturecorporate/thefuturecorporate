"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  created_at: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activePost, setActivePost] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

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
          {loading ? (
            <p className="text-center text-gray-500">Loading posts...</p>
          ) : posts.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActivePost(activePost === post.id ? null : post.id)
                    }
                    className="w-full text-left p-8 hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm text-gray-400 mb-2">
                      {new Date(post.created_at).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-xl font-bold text-navy-dark mb-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-block mt-3 text-navy font-semibold text-sm">
                      {activePost === post.id ? "Close" : "Read More"} &rarr;
                    </span>
                  </button>
                  {activePost === post.id && (
                    <div className="px-8 pb-8 border-t border-gray-200 pt-6">
                      <div
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>
                  )}
                </article>
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
