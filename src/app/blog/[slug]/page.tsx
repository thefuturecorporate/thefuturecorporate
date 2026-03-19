import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const runtime = "edge";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

function getSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = getSupabase();
  const { data } = await supabase
    .from("blogs")
    .select("title, excerpt, cover_image, meta_title, meta_description")
    .eq("slug", slug)
    .eq("site", "thefuturecorporate")
    .eq("status", "published")
    .single();

  if (!data) return { title: "Blog — The Future Corporate" };

  const title = data.meta_title || `${data.title} — The Future Corporate`;
  const description = data.meta_description || data.excerpt || "";
  const image =
    data.cover_image ||
    "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://thefuturecorporate.com/blog/${slug}`,
      siteName: "The Future Corporate",
      images: [{ url: image, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = getSupabase();
  const { data: post } = await supabase
    .from("blogs")
    .select(
      "id, title, slug, excerpt, content, cover_image, category, tags, author, read_time_minutes, published_at, created_at"
    )
    .eq("slug", slug)
    .eq("site", "thefuturecorporate")
    .eq("status", "published")
    .eq("deleted", false)
    .single();

  if (!post) notFound();

  const publishDate = new Date(
    post.published_at || post.created_at
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-navy-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.category &&
              post.category.map((cat: string) => (
                <span
                  key={cat}
                  className="text-xs font-bold text-gold uppercase tracking-wide bg-gold/10 px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>{publishDate}</span>
            {post.read_time_minutes && (
              <>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{post.read_time_minutes} min read</span>
              </>
            )}
          </div>
        </div>
      </section>

      {post.cover_image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[21/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-dark mb-4">
            Want to solve these challenges in your organization?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Whether it&apos;s people development, AI-powered systems, or
            both — let&apos;s have an honest conversation about what your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/918793630001?text=Hi%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20how%20you%20can%20help%20my%20business."
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Talk to Us on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="text-navy font-semibold hover:text-gold transition-colors"
          >
            &larr; View All Articles
          </Link>
        </div>
      </section>
    </>
  );
}
