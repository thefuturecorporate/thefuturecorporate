"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  category: string[] | null;
  author: string;
  read_time_minutes: number | null;
  published_at: string;
  created_at: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const { data } = await supabase
        .from("blogs")
        .select(
          "id, title, slug, excerpt, cover_image, category, author, read_time_minutes, published_at, created_at"
        )
        .eq("status", "published")
        .eq("site", "thefuturecorporate")
        .eq("deleted", false)
        .order("published_at", { ascending: false });
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
            Practical insights on people development, business systems, and
            growth — from the desk of Avinash Chate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-100 rounded-xl aspect-[16/9]" />
                  <div className="mt-4 space-y-2">
                    <div className="bg-gray-100 rounded h-3 w-1/3" />
                    <div className="bg-gray-100 rounded h-5 w-full" />
                    <div className="bg-gray-100 rounded h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  {/* Cover Image */}
                  {post.cover_image && (
                    <div className="rounded-xl overflow-hidden aspect-[16/9] bg-gray-100 mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-2">
                    {post.category && post.category[0] && (
                      <span className="text-xs font-bold text-gold uppercase tracking-wide">
                        {post.category[0]}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">
                      {new Date(
                        post.published_at || post.created_at
                      ).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {post.read_time_minutes && (
                      <span className="text-xs text-gray-400">
                        {post.read_time_minutes} min read
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <span className="inline-block mt-3 text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                    Read Article &rarr;
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
