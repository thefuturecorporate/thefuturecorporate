import BlogDetail from "./BlogDetail";

export function generateStaticParams() {
  // Return a dummy param so Next.js static export generates this page
  // The actual content loads client-side from Supabase based on the URL
  return [{ slug: ["_"] }];
}

export default function BlogSlugPage() {
  return <BlogDetail />;
}
