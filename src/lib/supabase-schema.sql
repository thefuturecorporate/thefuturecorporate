-- Supabase Schema for The Future Corporate

-- Contact form submissions / Leads
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Editable site content
CREATE TABLE site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default content
INSERT INTO site_content (key, value) VALUES
  ('hero_headline', 'Your team isn''t performing. Your operations are broken. We fix both.'),
  ('hero_subtext', 'The Future Corporate combines people development with systems automation to transform how your business operates — from the inside out.'),
  ('about_text', 'Avinash Bhaskar Chate is a TEDx Speaker, published author, and business transformation consultant with 11+ years of experience building high-performance teams and scalable business systems.');

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Policies: public can insert leads, read published blogs and site content
CREATE POLICY "Anyone can submit leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read published blogs" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Anyone can read site content" ON site_content FOR SELECT USING (true);

-- Admin policies (use service role key for admin operations)
CREATE POLICY "Admin can read all leads" ON leads FOR SELECT USING (true);
CREATE POLICY "Admin can manage blogs" ON blog_posts FOR ALL USING (true);
CREATE POLICY "Admin can manage content" ON site_content FOR ALL USING (true);
