"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface ContentItem {
  id: string;
  key: string;
  value: string;
  updated_at: string;
}

const contentLabels: Record<string, string> = {
  hero_headline: "Hero Headline",
  hero_subtext: "Hero Subtext",
  about_text: "About Section Text",
};

export default function AdminContent() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  async function loadContent() {
    const { data } = await supabase.from("site_content").select("*");
    if (data) {
      setItems(data);
      const values: Record<string, string> = {};
      data.forEach((item: ContentItem) => {
        values[item.key] = item.value;
      });
      setEditValues(values);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadContent();
  }, []);

  async function handleSave(key: string) {
    setSaving(key);
    await supabase
      .from("site_content")
      .upsert(
        { key, value: editValues[key], updated_at: new Date().toISOString() },
        { onConflict: "key" }
      );
    setSaving(null);
    loadContent();
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  // Include default keys if not in database yet
  const allKeys = Object.keys(contentLabels);
  const existingKeys = items.map((i) => i.key);
  const displayKeys = Array.from(new Set([...existingKeys, ...allKeys]));

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-dark mb-6">Content Editor</h1>
      <p className="text-gray-500 mb-8">
        Edit the dynamic content displayed on your website. Changes will reflect on the live site.
      </p>

      <div className="space-y-6">
        {displayKeys.map((key) => (
          <div key={key} className="bg-white rounded-xl p-6 border border-gray-100">
            <label className="block text-sm font-semibold text-navy-dark mb-2">
              {contentLabels[key] || key}
            </label>
            <textarea
              value={editValues[key] || ""}
              onChange={(e) =>
                setEditValues({ ...editValues, [key]: e.target.value })
              }
              rows={key === "hero_headline" ? 2 : 4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-navy"
            />
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => handleSave(key)}
                disabled={saving === key}
                className="bg-navy hover:bg-navy-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
              >
                {saving === key ? "Saving..." : "Save"}
              </button>
              {items.find((i) => i.key === key)?.updated_at && (
                <span className="text-xs text-gray-400">
                  Last updated:{" "}
                  {new Date(
                    items.find((i) => i.key === key)!.updated_at
                  ).toLocaleDateString("en-IN")}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
