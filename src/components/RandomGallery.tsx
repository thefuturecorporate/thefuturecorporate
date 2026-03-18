"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const STORAGE_BASE =
  "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public";

interface GalleryImage {
  src: string;
  alt: string;
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
  const images: GalleryImage[] = [];

  // Fetch gallery photos
  const { data: gallery } = await supabase.storage
    .from("profile-assets")
    .list("gallery", { limit: 100 });

  if (gallery) {
    for (const file of gallery) {
      if (file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
        images.push({
          src: `${STORAGE_BASE}/profile-assets/gallery/${file.name}`,
          alt: "Avinash Chate — training and speaking events",
        });
      }
    }
  }

  // Fetch presentation images
  const { data: presentations } = await supabase.storage
    .from("presentations")
    .list("images", { limit: 200 });

  if (presentations) {
    for (const file of presentations) {
      if (file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
        images.push({
          src: `${STORAGE_BASE}/presentations/images/${file.name}`,
          alt: "Corporate training presentation",
        });
      }
    }
  }

  return images;
}

export default function RandomGallery({
  count = 6,
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className={`bg-gray-100 rounded-xl animate-pulse ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              />
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`rounded-xl overflow-hidden bg-gray-100 ${
                i === 0 && photos.length > 3
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={i === 0 && photos.length > 3 ? 800 : 400}
                height={i === 0 && photos.length > 3 ? 800 : 300}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
