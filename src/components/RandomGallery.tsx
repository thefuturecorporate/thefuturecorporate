"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface GalleryImage {
  src: string;
  caption: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function fetchImages(): Promise<GalleryImage[]> {
  const { data } = await supabase
    .from("profile_gallery")
    .select("image_url, caption")
    .eq("is_visible", true);

  if (!data) return [];

  return data
    .filter((row) => row.image_url)
    .map((row) => ({
      src: row.image_url,
      caption: row.caption || "",
    }));
}

export default function RandomGallery({
  count = 4,
  title = "In Action",
  subtitle,
  className = "",
}: {
  count?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages().then((all) => {
      setPhotos(shuffle(all).slice(0, count));
      setLoading(false);
    });
  }, [count]);

  if (loading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-dark mb-8 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i}>
                <div className="bg-gray-100 rounded-xl animate-pulse aspect-[4/3]" />
                <div className="bg-gray-100 rounded h-3 mt-3 w-3/4 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (photos.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {photos.map((photo, i) => (
            <div key={photo.src}>
              <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption || "Avinash Chate — corporate training"}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              {photo.caption && (
                <p className="text-xs text-gray-400 mt-2 leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
