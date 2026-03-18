export interface Solution {
  slug: string;
  title: string;
  category:
    | "AI Portals"
    | "CRM & Sales"
    | "HR & Operations"
    | "Communication"
    | "Data & Analytics"
    | "Industry Solutions"
    | "Website & Digital";
  hook: string;
  problem: string[];
  diagnosis: string;
  solution: {
    overview: string;
    features: string[];
    timeline: string;
    techStack: string;
    idealFor: string;
    outcomes: string[];
  };
  featured?: boolean;
}

export const solutions: Solution[] = [
  // ─── AI PORTALS ───────────────────────────────────────────────────────

  {
    slug: "ai-business-portal",
    title: "AI-Powered Business Portal",
    category: "AI Portals",
    hook: "Your entire business — clients, team, operations — managed from one intelligent portal",
    featured: true,
    problem: [
      "Your business runs on 15 different tools — a spreadsheet here, a WhatsApp group there, a shared Google Drive nobody maintains, and email threads that go back months. Every piece of critical information lives in someone's head or someone's phone.",
      "Client interactions are scattered across platforms. Sales conversations happen on WhatsApp, documents are emailed, invoices are generated manually, and nobody can tell you the complete history of any client relationship without spending an hour digging through messages.",
      "Your team wastes 2-3 hours daily on tasks that should take minutes — updating reports, copying data between systems, following up on pending items, and answering questions that an intelligent system could handle instantly.",
      "Decision-making is paralyzed because real-time data doesn't exist. By the time you compile a report, the numbers are already outdated, and the opportunity has passed.",
    ],
    diagnosis:
      "Most Indian businesses — especially in the ₹1 Cr to ₹50 Cr revenue range — operate with technology that was designed for the previous decade. They've accumulated tools organically: a billing software they bought 5 years ago, WhatsApp Business for client communication, Excel for everything else, and maybe a basic website that nobody updates.\n\nThe problem isn't that these tools don't work individually. They do. The problem is that they don't talk to each other. Your billing system doesn't know what your sales team promised. Your HR records don't connect to your project management. Your client communication happens in a black box that dies when an employee leaves.\n\nThis fragmentation creates what we call 'operational debt' — the accumulated cost of disconnected systems. It shows up as duplicated effort, missed follow-ups, lost client history, slow decision-making, and a chronic inability to scale without proportionally increasing headcount. AI changes this equation entirely. A single intelligent portal can replace 10 disconnected tools, automate 60% of repetitive work, and give you real-time visibility into every aspect of your business.",
    solution: {
      overview:
        "We build a custom AI-powered business portal that becomes the single source of truth for your entire operation. It integrates client management, team collaboration, automated workflows, intelligent reporting, and AI assistants — all in one platform that your team actually wants to use.",
      features: [
        "AI-powered client management with complete relationship history",
        "Smart dashboard with real-time KPIs and automated alerts",
        "Integrated document management with AI search and tagging",
        "Automated workflow engine for approvals, follow-ups, and escalations",
        "AI chatbot for instant client queries and internal FAQ",
        "Role-based access control with activity tracking",
        "Mobile-responsive design — works perfectly on phones and tablets",
        "Integration with WhatsApp, email, payment gateways, and accounting software",
        "AI-generated reports and business insights",
        "Multi-language support (English, Hindi, Marathi, and more)",
      ],
      timeline: "6-10 weeks from kickoff to launch",
      techStack: "Next.js, Supabase, Cloudflare, OpenAI/Claude API, WhatsApp Business API",
      idealFor: "SMEs, training institutes, professional service firms, and growing businesses with 10-200 employees who are ready to consolidate their operations into one intelligent platform.",
      outcomes: [
        "60-70% reduction in time spent on manual data entry and report generation",
        "Complete client relationship history accessible in seconds, not hours",
        "Automated follow-ups eliminate missed opportunities and dropped leads",
        "Real-time dashboards replace weekly Excel report compilation",
        "AI assistant handles 40-50% of routine client queries without human intervention",
        "Single platform replaces 5-10 disconnected tools, reducing software costs",
      ],
    },
  },

  {
    slug: "ai-client-portal",
    title: "AI Client Self-Service Portal",
    category: "AI Portals",
    hook: "Give your clients 24/7 access to their account, documents, and support — powered by AI",
    problem: [
      "Your clients call or WhatsApp your team for every small query — 'What's the status of my order?', 'Can you resend the invoice?', 'When is my next appointment?' — consuming hours of your team's time that should be spent on high-value work.",
      "Document sharing is a nightmare. Clients lose emails with attachments, can't find their contracts, request the same documents repeatedly, and your team spends time being a human file server instead of doing actual work.",
      "There's no transparency. Clients can't track their project status, pending payments, or upcoming milestones without reaching out to your team. This creates anxiety on their side and interruption on yours.",
      "Client onboarding takes days or weeks because it involves manual document collection, back-and-forth emails, and multiple touchpoints that could be streamlined into a single digital experience.",
    ],
    diagnosis:
      "In a world where people can track their Zomato delivery in real-time, your clients still have to call you to check their order status. The gap between the digital experience they get from consumer brands and the experience they get from B2B service providers is growing — and it's silently eroding their trust and satisfaction.\n\nThe root cause isn't negligence. Most businesses genuinely want to serve their clients well. But they're trapped in a reactive loop: every client interaction requires human involvement, and as the client base grows, the team can't scale fast enough to maintain response quality. Important clients get prioritized, smaller ones get delayed, and everyone feels underserved.\n\nAn AI-powered client portal breaks this cycle by giving clients direct access to everything they need — documents, status updates, invoices, support — while using AI to handle routine queries instantly. Your team is freed to focus on relationship building and complex problem-solving instead of being an information relay.",
    solution: {
      overview:
        "A branded, secure client portal where your clients can log in, view their account details, access documents, track project status, raise support tickets, and get instant answers from an AI assistant — all without calling or messaging your team.",
      features: [
        "Branded login experience with your company's identity",
        "Client dashboard showing active projects, pending items, and key dates",
        "Secure document vault — contracts, invoices, reports all in one place",
        "AI-powered support chatbot trained on your business knowledge",
        "Real-time project status tracking with milestone updates",
        "Online payment integration (Razorpay/Stripe)",
        "Digital onboarding workflow with e-signatures",
        "Automated email/WhatsApp notifications for status changes",
        "Feedback collection and satisfaction scoring",
        "Admin panel for your team to manage all client accounts",
      ],
      timeline: "4-6 weeks from kickoff to launch",
      techStack: "Next.js, Supabase, Cloudflare Pages, Claude/OpenAI API, Razorpay",
      idealFor: "Professional service firms, consultancies, training companies, law firms, CA firms, real estate agencies, and any B2B business with 50+ active clients.",
      outcomes: [
        "50-60% reduction in routine client queries reaching your team",
        "Client satisfaction improves as they get instant access to information",
        "Document sharing becomes self-service — no more email attachments",
        "Client onboarding time reduced from days to hours",
        "24/7 availability without hiring night-shift staff",
        "Professional, branded experience that differentiates you from competitors",
      ],
    },
  },

  {
    slug: "ai-knowledge-base",
    title: "AI Knowledge Base & Internal Wiki",
    category: "AI Portals",
    hook: "Turn your company's scattered knowledge into an AI-searchable, always-updated internal brain",
    problem: [
      "When key employees leave, critical knowledge walks out the door with them. SOPs exist in people's heads, not in any system. Every departure creates a knowledge vacuum that takes months to fill — if it ever gets filled at all.",
      "New employees take 3-6 months to become productive because there's no centralized knowledge system. They learn by asking colleagues, reading scattered documents, and making mistakes that could have been prevented.",
      "The same questions get asked and answered dozens of times. 'How do we process a refund?', 'What's our leave policy?', 'How do I submit an expense claim?' — your senior team spends hours repeating information instead of creating value.",
      "Documents are everywhere — Google Drive, local folders, email attachments, WhatsApp messages — and nobody can find anything when they need it. Critical SOPs contradict each other because multiple versions exist.",
    ],
    diagnosis:
      "Knowledge management is the most overlooked operational capability in growing businesses. When you have 10 people, everyone knows everything. When you grow to 50 or 100, the informal knowledge-sharing that worked before breaks down completely.\n\nMost companies attempt to solve this with shared drives or basic wikis, but these quickly become digital graveyards — documents are uploaded once and never updated, search is terrible, and nobody trusts the content because they don't know when it was last reviewed.\n\nAI transforms this equation. Instead of static documents that nobody reads, you get a living, intelligent knowledge system that understands natural language queries, surfaces the right information instantly, and even identifies gaps in your documentation. When someone asks 'How do I handle a client complaint about billing?', the AI doesn't just find a document — it synthesizes the answer from your SOPs, past cases, and best practices.",
    solution: {
      overview:
        "We build an AI-powered internal knowledge base that captures, organizes, and makes your company's collective knowledge instantly accessible to every team member. Think of it as your company's brain — always available, always up-to-date, and intelligent enough to understand context.",
      features: [
        "AI-powered search that understands natural language questions",
        "Automatic categorization and tagging of uploaded documents",
        "Version control with change tracking and approval workflows",
        "AI-generated summaries of long documents and SOPs",
        "Department-wise knowledge organization with access controls",
        "Interactive FAQ bot that answers from your knowledge base",
        "Onboarding pathways for new employees by role",
        "Knowledge gap detection — AI identifies what's missing",
        "Integration with Slack/Teams/WhatsApp for instant access",
        "Analytics on what's being searched, read, and what's outdated",
      ],
      timeline: "3-5 weeks for initial setup and AI training",
      techStack: "Next.js, Supabase, Vector embeddings, Claude/OpenAI API, Cloudflare",
      idealFor: "Companies with 30+ employees, growing teams with high attrition, organizations going through rapid scaling, and businesses where knowledge retention is critical.",
      outcomes: [
        "New employee onboarding time reduced by 40-60%",
        "Repetitive internal queries handled by AI, freeing senior staff",
        "Knowledge retention survives employee turnover",
        "SOPs become living documents instead of static files",
        "Search finds answers in seconds instead of hours of digging",
        "Compliance and audit readiness improves with documented processes",
      ],
    },
  },

  // ─── CRM & SALES ─────────────────────────────────────────────────────

  {
    slug: "ai-crm-sales-funnel",
    title: "AI CRM & Sales Funnel System",
    category: "CRM & Sales",
    hook: "Stop losing leads. An AI-powered CRM that captures, nurtures, and converts — on autopilot",
    featured: true,
    problem: [
      "Leads come in from 5 different sources — website, WhatsApp, social media, referrals, events — and there's no single system tracking them. Some get followed up, some don't, and you have no idea which leads converted or why.",
      "Your sales team follows up when they remember, not when the data tells them to. Hot leads go cold because nobody contacted them within the critical first 2 hours. Warm leads get bombarded with calls at the wrong time.",
      "You can't answer basic questions: 'How many leads did we get this month?', 'What's our conversion rate?', 'Which source generates the best leads?', 'How long does our sales cycle take?' — because the data doesn't exist in one place.",
      "Sales forecasting is guesswork. Your revenue projections are based on gut feeling and optimistic assumptions because you don't have pipeline visibility or historical conversion data.",
    ],
    diagnosis:
      "Indian businesses lose an estimated 30-40% of potential revenue because of broken lead management. The lead comes in, someone saves it in their phone contacts, maybe adds it to a spreadsheet, follows up once or twice, and if it doesn't convert immediately, it disappears into the void.\n\nThe problem is structural, not personal. Without a system that automatically captures leads, assigns them, tracks follow-ups, and surfaces the right lead at the right time, even the best salespeople will drop the ball. They're not lazy — they're overwhelmed.\n\nAI takes this further by scoring leads based on behavior patterns, suggesting optimal follow-up timing, drafting personalized messages, and predicting which leads are most likely to convert. It transforms your sales team from reactive order-takers into proactive, data-driven closers.",
    solution: {
      overview:
        "A complete AI-powered CRM and sales funnel system that captures leads from every channel, scores them using AI, automates follow-up sequences, tracks your entire pipeline, and gives you real-time visibility into sales performance — all customized to how Indian businesses actually sell.",
      features: [
        "Multi-channel lead capture (website forms, WhatsApp, social media, manual entry)",
        "AI lead scoring — automatically prioritizes hot, warm, and cold leads",
        "Automated follow-up sequences via WhatsApp and email",
        "Visual sales pipeline with drag-and-drop deal stages",
        "AI-drafted follow-up messages personalized to each lead",
        "Smart reminders — AI tells your team who to call and when",
        "Proposal and quotation generator with templates",
        "Revenue dashboard with forecasting and trend analysis",
        "Team performance tracking with individual metrics",
        "Integration with WhatsApp Business, email, and payment gateways",
      ],
      timeline: "4-6 weeks for full CRM deployment",
      techStack: "Next.js, Supabase, WhatsApp Business API, Claude/OpenAI API, Razorpay",
      idealFor: "Sales-driven businesses, training companies, real estate firms, B2B service providers, and any business generating 50+ leads per month that wants to stop leaking revenue.",
      outcomes: [
        "Zero lead leakage — every inquiry is captured and tracked",
        "Lead response time drops from hours/days to minutes with automation",
        "30-50% improvement in lead-to-conversion rate with AI nurturing",
        "Complete pipeline visibility replaces guesswork forecasting",
        "Sales team productivity increases as AI handles routine follow-ups",
        "Management gets real-time dashboards instead of monthly reports",
      ],
    },
  },

  {
    slug: "ai-lead-capture-landing",
    title: "AI Lead Capture & Landing Pages",
    category: "CRM & Sales",
    hook: "High-converting landing pages with AI chatbot that captures and qualifies leads 24/7",
    problem: [
      "Your website gets traffic but doesn't convert. Visitors land, browse for 30 seconds, and leave without taking any action because there's no compelling reason to engage or share their contact information.",
      "You're running ads (Google, Meta, Instagram) but sending traffic to a generic homepage that wasn't designed to convert. Your cost-per-lead is 3-5x higher than it should be because the landing experience is broken.",
      "There's no one to engage visitors in real-time. Someone visits at 11 PM, has a question, finds no immediate answer, and goes to your competitor who has a chatbot or live response system.",
      "Lead qualification is manual. Your team spends time calling every inquiry, including people who were just browsing, not ready to buy, or looking for something you don't offer.",
    ],
    diagnosis:
      "The average website converts at 2-3%. That means for every 100 people who visit your site, 97 leave without doing anything. Most businesses accept this as normal. It's not — it's a system failure.\n\nThe issue is that generic websites are designed to inform, not to convert. A landing page, by contrast, has one job: get the visitor to take a specific action. When you combine a conversion-optimized landing page with an AI chatbot that engages visitors in real-time, qualifies them, answers their questions, and captures their information — your conversion rate can jump to 8-15%.\n\nThe AI doesn't sleep, doesn't get tired, and doesn't miss opportunities. It engages every visitor with a personalized conversation, understands their needs, and either captures their information or routes them to your sales team with full context.",
    solution: {
      overview:
        "We create high-converting landing pages for each of your services or campaigns, equipped with an AI chatbot that engages visitors in real-time, answers questions, qualifies leads, and captures contact information — feeding directly into your CRM.",
      features: [
        "Custom landing pages designed for maximum conversion",
        "AI chatbot trained on your services, pricing, and FAQs",
        "Real-time lead capture with instant WhatsApp/email notification",
        "A/B testing capability to optimize conversion rates",
        "Lead qualification scoring based on chatbot conversation",
        "UTM tracking for campaign performance measurement",
        "Mobile-optimized design (60%+ of Indian traffic is mobile)",
        "Integration with Google Ads, Meta Ads, and LinkedIn Ads",
        "Automated lead routing to the right team member",
        "Analytics dashboard showing traffic, engagement, and conversion metrics",
      ],
      timeline: "2-3 weeks per landing page set",
      techStack: "Next.js, Tailwind CSS, Supabase, Claude/OpenAI API, WhatsApp API",
      idealFor: "Businesses running paid advertising campaigns, service companies that need more qualified leads, training companies promoting specific programs, and anyone whose website isn't converting traffic into inquiries.",
      outcomes: [
        "Landing page conversion rate of 8-15% vs 2-3% for generic websites",
        "AI chatbot captures leads 24/7 including nights and weekends",
        "Cost-per-lead drops 40-60% with better conversion rates",
        "Lead quality improves as AI pre-qualifies before human follow-up",
        "Complete visibility into which campaigns and channels perform best",
        "Sales team receives warm, qualified leads with full conversation context",
      ],
    },
  },

  {
    slug: "ai-proposal-quotation",
    title: "AI Proposal & Quotation Generator",
    category: "CRM & Sales",
    hook: "Generate professional, customized proposals in minutes — not days — using AI",
    problem: [
      "Creating a proposal takes your team 2-5 days. They start from a template, manually customize it, go back and forth on pricing, and by the time it reaches the client, the momentum is lost and the competitor has already responded.",
      "Proposals are inconsistent. Every team member creates them differently — different formats, different pricing structures, different terms. There's no brand consistency and no way to ensure all relevant information is included.",
      "You have no idea what happens after you send a proposal. Did the client open it? Which sections did they spend time on? Did they share it with their team? You're flying blind in the most critical stage of the sales process.",
      "Pricing errors in proposals cost you money. Either you underquote and lose margin, or you overquote and lose the deal. There's no system ensuring pricing accuracy across your team.",
    ],
    diagnosis:
      "The proposal is where deals are won or lost, yet most businesses treat it as an administrative task rather than a strategic asset. They invest in marketing, advertising, and sales meetings, but when it comes to the final document that the client uses to make their decision, they default to generic templates and manual effort.\n\nThe delay alone is a deal-killer. Research shows that the first vendor to submit a proposal wins 50% of the time — not because they're the best, but because they're the fastest. Speed signals competence and seriousness.\n\nAI can generate a professional, customized proposal in minutes by pulling from your service catalog, pricing rules, past proposals, and client-specific information. It ensures consistency, accuracy, and speed — three things that are impossible with manual processes.",
    solution: {
      overview:
        "An AI-powered proposal and quotation system that generates professional, branded, customized proposals in minutes. Feed it the client requirements, and it produces a ready-to-send document with accurate pricing, relevant case studies, and tailored messaging.",
      features: [
        "AI-generated proposals customized to client requirements",
        "Branded templates with your company identity and design",
        "Dynamic pricing engine with rules, discounts, and bundles",
        "Service catalog integration — drag and drop services into proposals",
        "Proposal tracking — know when clients open and read your proposals",
        "E-signature integration for instant deal closure",
        "Version history and collaboration for team review",
        "Automated follow-up reminders for unsigned proposals",
        "Proposal analytics — win rate, average deal size, time-to-close",
        "PDF and web-link delivery options",
      ],
      timeline: "3-4 weeks for complete system setup",
      techStack: "Next.js, Supabase, Claude/OpenAI API, React-PDF, Cloudflare",
      idealFor: "B2B service companies, IT firms, training companies, consultancies, agencies, and any business that sends more than 10 proposals per month.",
      outcomes: [
        "Proposal creation time drops from days to minutes",
        "100% brand consistency across all proposals",
        "Pricing accuracy ensures no margin leakage or overquoting",
        "Proposal tracking gives visibility into client engagement",
        "Faster response time increases win rate by 20-30%",
        "Historical data enables smarter pricing and better forecasting",
      ],
    },
  },

  // ─── HR & OPERATIONS ─────────────────────────────────────────────────

  {
    slug: "ai-hr-automation",
    title: "AI HR & Payroll Automation",
    category: "HR & Operations",
    hook: "Automate attendance, leave, payroll, and compliance — let your HR team focus on people, not paperwork",
    featured: true,
    problem: [
      "Your HR team spends 60-70% of their time on administrative tasks — processing leave requests, calculating attendance, running payroll, and managing compliance paperwork — leaving almost no time for actual people development.",
      "Payroll errors happen every month. Someone's overtime wasn't calculated, a deduction was wrong, tax calculations are off, and the HR team spends days reconciling instead of the system getting it right automatically.",
      "Leave management is chaos. Employees request leave on WhatsApp, managers approve verbally, and nobody has an accurate picture of who's available when. Project planning suffers because resource availability is a mystery.",
      "Employee records are scattered across Excel files, paper files, and email threads. Finding a single employee's complete history — joining date, salary changes, leave history, performance reviews — requires checking multiple sources.",
    ],
    diagnosis:
      "HR in most Indian companies is stuck in a paradox: they're told their role is strategic — talent development, culture building, employee experience — but they spend 80% of their time on transactional activities that a well-designed system could handle automatically.\n\nThe root cause is that HR processes were designed for a world of paper forms and manual registers. Even when companies 'digitize' by moving to Excel, they're just creating electronic versions of manual processes. The logic, the workflows, the calculations — they're still being done by humans, one by one, every single day.\n\nAI-powered HR automation doesn't just digitize your processes — it intelligently automates them. Leave requests flow through digital workflows with automatic balance checking. Payroll runs itself based on attendance data with perfect compliance. Employee queries about their leave balance, salary slips, or company policies get instant AI-powered answers. The HR team is finally free to do what they were hired to do: build a great workplace.",
    solution: {
      overview:
        "A comprehensive AI-powered HR management system that automates attendance tracking, leave management, payroll processing, and compliance — while giving employees self-service access to their information and HR an intelligent command center.",
      features: [
        "Biometric/app-based attendance tracking with geo-fencing",
        "Digital leave management with automated approval workflows",
        "AI-powered payroll engine with automatic tax calculations (India-compliant)",
        "Employee self-service portal for pay slips, leave balance, and documents",
        "AI HR chatbot for policy queries and common HR questions",
        "Performance review system with 360-degree feedback",
        "Document management — offer letters, contracts, certificates all in one place",
        "Compliance tracking — PF, ESI, PT, TDS all automated",
        "Onboarding workflow for new joiners with checklist tracking",
        "Analytics dashboard — attrition trends, attendance patterns, cost analysis",
      ],
      timeline: "6-8 weeks for complete HR suite deployment",
      techStack: "Next.js, Supabase, Cloudflare Workers, Claude/OpenAI API, WhatsApp API",
      idealFor: "Companies with 30-500 employees, growing businesses adding headcount, organizations with multi-location teams, and any company whose HR team is drowning in paperwork.",
      outcomes: [
        "Payroll processing time reduced from days to hours with zero errors",
        "HR administrative workload reduced by 60-70%",
        "Employee self-service eliminates 80% of routine HR queries",
        "Complete compliance automation — no missed filings or penalties",
        "Leave and attendance data is real-time and accurate",
        "HR shifts from administrative function to strategic people partner",
      ],
    },
  },

  {
    slug: "ai-employee-onboarding",
    title: "AI Employee Onboarding System",
    category: "HR & Operations",
    hook: "Transform chaotic first days into seamless, impressive onboarding experiences",
    problem: [
      "New employees show up on day one to find their desk isn't ready, their email isn't set up, their manager is in a meeting, and nobody seems to know they were joining today. First impressions are being destroyed before the work even begins.",
      "The onboarding process takes 2-4 weeks of manual effort from HR, IT, and the hiring manager. Documents are collected piecemeal, training is ad-hoc, and there's no standard process ensuring every new hire gets the same experience.",
      "Early attrition (0-90 days) is high because new employees feel lost, unsupported, and disconnected. They accepted the job because of the interview experience, but the post-joining experience tells a very different story.",
      "There's no way to track onboarding completion. Did the new hire complete their compliance training? Did they meet their team? Were their documents verified? Nobody knows without manually checking with multiple people.",
    ],
    diagnosis:
      "The first 90 days of employment are the highest-risk period for attrition. Studies consistently show that employees who have a structured, positive onboarding experience are 69% more likely to stay for 3 years. Yet most companies treat onboarding as a one-day HR formality — fill out forms, collect documents, here's your desk, good luck.\n\nThe real onboarding challenge is coordination. It involves HR (documents, policies, benefits), IT (email, systems access, devices), the manager (goals, expectations, team introductions), and the team (culture, informal knowledge, relationships). Without a system orchestrating these parallel tracks, things fall through the cracks — and the new employee notices.\n\nAn AI-powered onboarding system automates the coordination, tracks completion, and even provides the new employee with an AI buddy they can ask questions to without feeling embarrassed. It transforms what was a chaotic administrative process into a smooth, impressive experience that makes new hires feel they made the right decision.",
    solution: {
      overview:
        "A digital onboarding platform that orchestrates the entire new-hire journey — from offer acceptance to 90-day integration. Automated workflows, digital document collection, AI-powered buddy support, and real-time progress tracking for HR and managers.",
      features: [
        "Pre-joining digital workflow — documents, bank details, emergency contacts",
        "Day-one automated setup — system access, email, welcome kit coordination",
        "Onboarding journey with milestones and checklists by role",
        "AI onboarding buddy — answers questions about company, policies, and processes",
        "Manager dashboard showing new hire progress and pending actions",
        "Automated training schedule with video/document library",
        "Digital document verification and storage",
        "30-60-90 day check-in templates with feedback collection",
        "Team introduction coordination and meeting scheduling",
        "Completion analytics and onboarding experience scoring",
      ],
      timeline: "3-4 weeks for system setup and customization",
      techStack: "Next.js, Supabase, Claude/OpenAI API, Email/WhatsApp notifications",
      idealFor: "Companies hiring more than 5 people per month, businesses with multi-location onboarding needs, and organizations experiencing high early-stage attrition.",
      outcomes: [
        "Onboarding completion rate reaches 95%+ with automated tracking",
        "New employee time-to-productivity reduced by 40%",
        "Early attrition (0-90 days) drops significantly with better experience",
        "HR coordination time per new hire reduced from 8+ hours to under 2 hours",
        "100% compliance — no missing documents or incomplete verifications",
        "New hires feel supported and informed from day one",
      ],
    },
  },

  {
    slug: "ai-operations-dashboard",
    title: "AI Operations Command Center",
    category: "HR & Operations",
    hook: "See your entire business in real-time — revenue, team, clients, operations — one dashboard",
    problem: [
      "You ask for a business update and it takes 3-5 days to compile. By the time you see the numbers, they're already old. You're making decisions based on last month's data in a market that changes daily.",
      "Every department has their own reporting format. Sales sends an Excel, HR sends a PDF, finance sends a different Excel, and operations sends a WhatsApp message. Consolidating everything into a coherent picture is a weekly nightmare.",
      "You can't drill down into the data. The report says revenue is down 10%, but you can't instantly see which clients, which products, which team members, or which regions are driving the decline. Investigation takes another round of requests.",
      "KPIs aren't tracked consistently. What gets measured one month is forgotten the next. There's no system holding teams accountable to the metrics that actually matter for business growth.",
    ],
    diagnosis:
      "The biggest competitive disadvantage for SMEs isn't capital or talent — it's the speed of information. Large enterprises invest crores in business intelligence tools and data warehouses. Small and mid-size businesses make do with spreadsheets and monthly reviews.\n\nThis information gap translates directly into slower decisions, missed opportunities, and reactive management. When you can't see a problem developing in real-time, you can only respond after it's become a crisis. When you can't identify a trend as it's emerging, your competitors who can will capture the opportunity first.\n\nAn AI-powered operations dashboard changes the game by pulling data from all your systems — sales, finance, HR, operations — into one real-time command center. AI doesn't just display data — it spots anomalies, predicts trends, and surfaces the insights that matter. It's like having a business analyst who works 24/7 and never misses a signal.",
    solution: {
      overview:
        "A real-time business intelligence dashboard that aggregates data from all your systems and presents it in a visual, actionable format. AI-powered insights identify trends, anomalies, and opportunities that human analysis would miss or take days to discover.",
      features: [
        "Real-time revenue and sales pipeline dashboard",
        "Team performance scorecards with individual and department KPIs",
        "Client health monitoring with churn risk indicators",
        "Financial overview — cash flow, expenses, profitability by segment",
        "AI-powered anomaly detection and early warning alerts",
        "Drill-down capability — click any metric to see underlying details",
        "Automated daily/weekly digest emails with key highlights",
        "Goal tracking with visual progress indicators",
        "Comparative analytics — month-over-month, year-over-year",
        "Custom report builder for board presentations and reviews",
      ],
      timeline: "4-6 weeks including data integration",
      techStack: "Next.js, Supabase, Recharts/D3.js, Claude/OpenAI API, Cloudflare Workers",
      idealFor: "Business owners and CEOs who want real-time visibility, companies with 3+ departments, growing businesses that have outgrown spreadsheet-based reporting.",
      outcomes: [
        "Decision-making speed improves from days to minutes with real-time data",
        "Weekly report compilation eliminated — dashboard is always current",
        "AI surfaces insights that would take analysts days to discover",
        "Team accountability improves with visible, real-time KPIs",
        "Management reviews become productive discussions, not data presentations",
        "Early warning system prevents small issues from becoming crises",
      ],
    },
  },

  // ─── COMMUNICATION ────────────────────────────────────────────────────

  {
    slug: "ai-whatsapp-automation",
    title: "AI WhatsApp & Email Automation",
    category: "Communication",
    hook: "Automate customer conversations, follow-ups, and campaigns through WhatsApp and email",
    featured: true,
    problem: [
      "Your team manually sends every WhatsApp message and email. Follow-up messages, payment reminders, appointment confirmations, status updates — all typed and sent one by one, consuming hours that could be spent on actual business.",
      "Communication is inconsistent. Different team members send different messages for the same situation. Some clients get timely responses, others wait hours or days. There's no standard, and the experience varies wildly.",
      "You have no way to send personalized bulk communications. When you want to announce a new service, share an update, or nurture your contact database, you're stuck with generic blast messages that feel impersonal and get ignored.",
      "There's no tracking. You don't know which messages were delivered, read, or acted upon. Campaign performance is a black box, and you can't optimize what you can't measure.",
    ],
    diagnosis:
      "WhatsApp is India's business communication channel. Over 400 million Indians use it daily, and for most small and medium businesses, it's the primary channel for client communication. Yet most businesses use it the same way they use personal messaging — manually, reactively, and without any system or automation.\n\nThe result is a communication bottleneck. As your business grows from 50 to 500 to 5000 client interactions per month, manual messaging doesn't scale. You either hire more people (expensive and inconsistent) or response quality drops (lost clients and reputation damage).\n\nAI-powered automation solves this by handling the routine — appointment reminders, payment follow-ups, order updates, FAQs — while escalating complex queries to your team with full context. It's not about replacing human communication; it's about ensuring every client gets a timely, relevant response while your team focuses on conversations that genuinely need human expertise.",
    solution: {
      overview:
        "An intelligent communication automation system that handles WhatsApp and email workflows at scale — from automated follow-up sequences and payment reminders to AI-powered responses and targeted campaigns — while keeping conversations personal and relevant.",
      features: [
        "WhatsApp Business API integration with AI-powered auto-responses",
        "Automated drip sequences for lead nurturing",
        "Smart payment reminders with escalation logic",
        "AI chatbot for handling FAQ and routine queries on WhatsApp",
        "Personalized bulk messaging with dynamic fields",
        "Email automation with templates and scheduling",
        "Campaign analytics — delivery, open, response, and conversion rates",
        "Conversation routing — AI handles routine, humans handle complex",
        "Template management with multi-language support",
        "Trigger-based messages — actions that automatically send communications",
      ],
      timeline: "3-5 weeks for complete automation setup",
      techStack: "WhatsApp Business API, Supabase, Claude/OpenAI API, Email APIs, Cloudflare Workers",
      idealFor: "Any business with 100+ client interactions per month, e-commerce businesses, training institutes, service providers, and companies that rely on WhatsApp for client communication.",
      outcomes: [
        "80% of routine messages automated — team focuses on high-value conversations",
        "Response time drops to seconds for common queries with AI chatbot",
        "Payment collection improves with systematic automated reminders",
        "Lead nurturing happens on autopilot — no more forgotten follow-ups",
        "Complete communication analytics replace guesswork",
        "Consistent, professional communication regardless of who's handling it",
      ],
    },
  },

  {
    slug: "ai-chatbot-customer-support",
    title: "AI Customer Support Chatbot",
    category: "Communication",
    hook: "An AI support agent that knows your business inside out — available 24/7 on your website and WhatsApp",
    problem: [
      "Your support team handles the same 20-30 questions over and over. 'What are your timings?', 'How much does this cost?', 'Can I reschedule?', 'What documents do I need?' — each answer takes 5-10 minutes of human time that adds up to hours daily.",
      "Support is only available during business hours. Queries that come in after 6 PM, on weekends, or during holidays go unanswered until the next business day — by which time the customer has found an alternative or lost interest.",
      "There's no consistent quality. Experienced team members give great answers; new ones give incomplete or incorrect information. The customer experience depends on who picks up the phone, which is a terrible way to run support.",
      "You can't scale support without hiring more people. Every new batch of customers means proportionally more support queries, creating a linear cost problem that eats into your margins as you grow.",
    ],
    diagnosis:
      "Customer support in most businesses follows an outdated model: a human must be involved in every interaction, regardless of complexity. A query about office timings receives the same level of human attention as a complex complaint — and both have to wait in the same queue.\n\nThis model worked when businesses had 50 customers. At 500 or 5000, it breaks. The math simply doesn't work — you can't hire enough people to handle every routine query personally while maintaining quality and keeping costs reasonable.\n\nAI chatbots trained on your specific business knowledge can handle 60-80% of customer queries instantly and accurately. They don't get tired, don't have bad days, don't forget information, and don't put customers on hold. For the 20-40% of queries that genuinely need human attention, the AI collects context and routes them to the right person — so the human interaction starts productive instead of starting with 'Let me understand your issue.'",
    solution: {
      overview:
        "A custom AI chatbot trained on your business knowledge, deployed on your website and WhatsApp, that handles customer queries instantly, collects leads, routes complex issues to your team, and learns from every interaction to get better over time.",
      features: [
        "Custom-trained AI on your business FAQs, policies, and services",
        "Deployment on website, WhatsApp, and social media",
        "Natural language understanding in English and Hindi",
        "Seamless escalation to human agents with full conversation context",
        "Lead capture during support conversations",
        "Appointment/booking integration",
        "Product/service recommendation based on customer needs",
        "Conversation analytics and satisfaction scoring",
        "Continuous learning from new queries and feedback",
        "Multi-department routing for specialized queries",
      ],
      timeline: "2-4 weeks for training and deployment",
      techStack: "Claude/OpenAI API, WhatsApp Business API, Next.js, Supabase, Cloudflare Workers",
      idealFor: "E-commerce businesses, training institutes, healthcare clinics, real estate agencies, hospitality businesses, and any company receiving 50+ support queries per day.",
      outcomes: [
        "60-80% of queries resolved by AI without human intervention",
        "24/7 support availability without night-shift staffing costs",
        "Average response time drops from minutes/hours to seconds",
        "Support cost per query reduced by 70%+",
        "Customer satisfaction improves with instant, accurate responses",
        "Support team focuses on complex issues that genuinely need human judgment",
      ],
    },
  },

  // ─── DATA & ANALYTICS ────────────────────────────────────────────────

  {
    slug: "ai-data-analytics",
    title: "AI Data Analytics & Reporting",
    category: "Data & Analytics",
    hook: "Turn your messy data into clear insights and automated reports — with AI doing the analysis",
    problem: [
      "Your data lives in 10 different places — billing software, Excel files, Google Sheets, CRM, HR system — and nobody has a unified view. Every time you need a cross-functional report, it takes days of manual data merging and reconciliation.",
      "The person who creates your reports is a bottleneck. When they're busy, on leave, or resign, reporting stops. Critical business intelligence depends on a single person's Excel skills and institutional knowledge.",
      "Reports tell you what happened last month but not why it happened or what's likely to happen next. Descriptive statistics are easy; the predictive insights that drive smart decisions require analytical capabilities your team doesn't have.",
      "You suspect there are patterns in your data — seasonal trends, customer segments, product correlations — but nobody has the time or tools to discover them. Valuable insights are hiding in plain sight.",
    ],
    diagnosis:
      "Data is the most underutilized asset in Indian businesses. Companies generate mountains of transaction data, customer data, operational data — but use less than 5% of it for decision-making. The rest sits in spreadsheets and databases, never analyzed, never questioned, never turned into competitive advantage.\n\nThe barrier isn't data availability — it's data accessibility. The data exists, but it's locked in systems that don't connect, in formats that don't match, and in volumes that overwhelm manual analysis. Hiring a data analyst helps, but it creates a single point of failure and still limits you to human processing speed.\n\nAI transforms data analytics from a specialized skill into a business utility. It can connect to multiple data sources, clean and reconcile the data, identify patterns and anomalies, generate visualizations, and even answer natural language questions about your business. Instead of waiting for someone to build a report, you can ask 'What was our most profitable product category last quarter?' and get an instant, accurate answer.",
    solution: {
      overview:
        "An AI-powered data analytics system that connects to all your data sources, automatically cleans and integrates the data, provides visual dashboards, and enables natural language querying — so anyone in your organization can get instant insights without needing technical skills.",
      features: [
        "Multi-source data integration (billing, CRM, HR, accounting, spreadsheets)",
        "Automated data cleaning and reconciliation",
        "Visual dashboards with charts, graphs, and KPI cards",
        "Natural language query interface — ask questions in plain English/Hindi",
        "Automated report generation on daily/weekly/monthly schedules",
        "Trend analysis and pattern detection using AI",
        "Anomaly alerts when metrics deviate from expected ranges",
        "Predictive analytics for revenue, churn, and demand forecasting",
        "Export to PDF, Excel, and presentation formats",
        "Role-based access — different views for CEO, managers, and team leads",
      ],
      timeline: "4-6 weeks including data integration and AI training",
      techStack: "Next.js, Supabase, Python/Pandas, Claude/OpenAI API, Recharts, Cloudflare",
      idealFor: "Data-rich businesses that make decisions based on gut feeling, companies with data in multiple disconnected systems, and any organization that wants to become truly data-driven.",
      outcomes: [
        "Report generation time drops from days to minutes",
        "Business insights accessible to everyone, not just analysts",
        "AI discovers patterns that human analysis would miss",
        "Data-driven decisions replace gut-feeling decisions",
        "Predictive insights enable proactive rather than reactive management",
        "Complete data transparency across the organization",
      ],
    },
  },

  {
    slug: "ai-inventory-management",
    title: "AI Inventory & Stock Management",
    category: "Data & Analytics",
    hook: "AI-powered inventory tracking that predicts demand, prevents stockouts, and optimizes your supply chain",
    problem: [
      "You either have too much stock (tying up capital) or too little (losing sales). The balance between overstocking and understocking is managed by gut feeling and past experience rather than data and algorithms.",
      "Inventory counts are manual and infrequent. By the time you discover a discrepancy, you can't trace when or how it happened. Shrinkage, miscounts, and data entry errors accumulate silently and show up as profit leaks.",
      "Reorder decisions are reactive. You order when stock runs out, not when it should be reordered. Lead time isn't factored in, seasonal patterns are ignored, and rush orders at premium prices become the norm.",
      "Multi-location inventory is a nightmare. What's available at one location isn't visible to another. Stock transfers happen through phone calls, and nobody has a real-time picture of total inventory across all locations.",
    ],
    diagnosis:
      "Inventory management is fundamentally a prediction problem. You're trying to guess future demand accurately enough to have the right products in the right quantities at the right time. Historically, this required experienced managers who 'knew' their markets and products. But human intuition doesn't scale and can't process the volume of variables that affect demand.\n\nAI excels at exactly this kind of prediction. By analyzing historical sales data, seasonal patterns, market trends, and even external factors like weather and holidays, AI can forecast demand with significantly higher accuracy than manual methods. It can calculate optimal reorder points, recommend stock transfer between locations, and alert you to slow-moving inventory before it becomes dead stock.\n\nThe financial impact is substantial. Even a 10% improvement in inventory optimization typically translates to 2-5% improvement in profit margins — money that was previously locked in excess stock or lost to stockouts.",
    solution: {
      overview:
        "An AI-powered inventory management system that tracks stock in real-time across all locations, predicts demand using machine learning, automates reorder decisions, and gives you complete visibility into your supply chain.",
      features: [
        "Real-time inventory tracking across multiple locations",
        "AI demand forecasting using historical and seasonal data",
        "Automated reorder point calculation and purchase order generation",
        "Barcode/QR code scanning for stock in/out",
        "Multi-location stock transfer management",
        "Dead stock identification and liquidation recommendations",
        "Supplier performance tracking and lead time analysis",
        "Low stock and overstock alerts with AI recommendations",
        "Inventory valuation and cost analysis dashboards",
        "Integration with billing/POS and accounting software",
      ],
      timeline: "5-7 weeks including data migration and AI model training",
      techStack: "Next.js, Supabase, Python/ML models, Claude/OpenAI API, Cloudflare",
      idealFor: "Retail businesses, distributors, manufacturers, e-commerce companies, and any business managing 100+ SKUs across one or more locations.",
      outcomes: [
        "Stockout incidents reduced by 50-70% with AI demand forecasting",
        "Inventory carrying costs reduced by 15-25% through optimization",
        "Automated reordering eliminates manual purchase order creation",
        "Real-time visibility across all locations eliminates guesswork",
        "Dead stock identified early, freeing up capital",
        "Data-driven inventory decisions replace gut-feeling ordering",
      ],
    },
  },

  // ─── WEBSITE & DIGITAL ───────────────────────────────────────────────

  {
    slug: "ai-business-website",
    title: "AI-Powered Business Website",
    category: "Website & Digital",
    hook: "Not just a website — a 24/7 sales machine with AI chatbot, lead capture, and SEO built in",
    problem: [
      "Your website looks like it was built in 2015. It's slow, not mobile-friendly, has outdated content, and makes your business look less professional than it actually is. First-time visitors form impressions in 3 seconds — and yours isn't great.",
      "The website is a digital brochure that does nothing. It has an 'About Us' page, a 'Services' page, a 'Contact Us' form that nobody fills, and that's it. It doesn't generate leads, engage visitors, or contribute to revenue.",
      "You're invisible on Google. When potential clients search for services you offer, your competitors show up and you don't. You've heard about SEO but it sounds complicated and expensive, so your website remains buried.",
      "Updating the website requires a developer. Even changing a phone number or adding a new service requires someone with technical skills, which means updates are infrequent and content becomes stale.",
    ],
    diagnosis:
      "For most Indian businesses, the website is an afterthought — something they built because 'everyone has one', not because they see it as a business tool. The result is that their website works against them: it looks dated, doesn't appear in search results, doesn't capture leads, and doesn't represent the quality of their actual work.\n\nA modern business website isn't a brochure — it's a 24/7 employee. It should be your best salesperson (converting visitors into leads), your best customer service agent (answering questions via AI chatbot), and your best marketing asset (ranking on Google for relevant searches). When built right, it can generate more qualified leads than your entire sales team combined.\n\nThe AI layer transforms a static website into an interactive experience. Chatbots engage visitors, answer questions, and capture leads. AI-powered content optimization improves search rankings. Dynamic personalization shows different content to different visitors based on their behavior. It's the difference between a billboard and a sales team.",
    solution: {
      overview:
        "A modern, fast, SEO-optimized business website with AI-powered features — chatbot for visitor engagement, lead capture forms, blog with SEO content, and an admin panel that lets you update everything yourself without a developer.",
      features: [
        "Custom-designed, mobile-first website with modern aesthetics",
        "AI chatbot trained on your services for visitor engagement",
        "SEO-optimized structure, content, and meta tags",
        "Lead capture forms with CRM integration",
        "Blog/content section for SEO and thought leadership",
        "Google Analytics and conversion tracking setup",
        "Speed optimized — loads in under 2 seconds",
        "Admin panel for easy content updates without developer",
        "WhatsApp integration for instant inquiries",
        "SSL, security, and Cloudflare CDN for global performance",
      ],
      timeline: "3-5 weeks for complete website development",
      techStack: "Next.js, Tailwind CSS, Supabase, Cloudflare Pages, Claude/OpenAI API",
      idealFor: "Businesses with outdated websites, companies without any web presence, and organizations that want their website to actively generate leads instead of being a static brochure.",
      outcomes: [
        "Professional, modern web presence that builds instant credibility",
        "AI chatbot engages visitors and captures leads 24/7",
        "SEO-optimized pages start ranking for relevant search terms",
        "Admin panel enables content updates without developer dependency",
        "Mobile-responsive design captures the 60%+ mobile audience",
        "Website becomes a lead generation engine, not a digital brochure",
      ],
    },
  },

  {
    slug: "ai-ecommerce-store",
    title: "AI E-Commerce & Online Store",
    category: "Website & Digital",
    hook: "Launch your online store with AI product recommendations, smart search, and automated order management",
    problem: [
      "You're selling offline only and watching competitors capture the online market. Customers are searching for your products on Google and finding someone else. Every day without an online presence is revenue lost permanently.",
      "You tried a basic e-commerce setup but it doesn't convert. The product pages are generic, search is terrible, there are no recommendations, and the checkout process has a 70%+ cart abandonment rate.",
      "Order management is manual chaos. Orders come in, someone copies details to a spreadsheet, sends a WhatsApp to the warehouse, manually generates an invoice, and hopes nothing falls through the cracks. At scale, things always fall through.",
      "You have no insight into customer behavior. You don't know which products are viewed but not purchased, where customers drop off, which combinations sell together, or what your most profitable customer segment looks like.",
    ],
    diagnosis:
      "E-commerce in India is growing at 25-30% annually, yet most businesses approach it as 'putting a catalog online.' They list products with basic descriptions and photos, add a shopping cart, and wonder why conversion rates are below 1%.\n\nThe gap between listing products and selling products online is enormous. Modern e-commerce success requires intelligent product recommendations (customers who bought X also bought Y), personalized search, dynamic pricing, automated inventory sync, seamless checkout, and post-purchase engagement. Amazon and Flipkart invest billions in these capabilities — but AI has democratized them.\n\nAn AI-powered e-commerce store doesn't just list your products; it actively sells them. It recommends relevant products, answers product questions via chatbot, recovers abandoned carts with personalized messages, and gives you the analytics to continuously optimize your offering.",
    solution: {
      overview:
        "A full-featured e-commerce store with AI-powered product recommendations, intelligent search, chatbot support, automated order management, and analytics — everything you need to sell online successfully, not just be online.",
      features: [
        "Custom-designed product pages with high-conversion layouts",
        "AI product recommendations — related, frequently bought together, trending",
        "Intelligent search with natural language understanding",
        "AI chatbot for product queries and purchase assistance",
        "Razorpay/PayU payment integration with UPI, cards, and EMI",
        "Automated order management with status tracking",
        "Inventory sync across online and offline channels",
        "Abandoned cart recovery via WhatsApp and email",
        "Customer account with order history and wishlist",
        "Analytics dashboard — sales, traffic, conversion, and product performance",
      ],
      timeline: "6-10 weeks depending on catalog size",
      techStack: "Next.js, Supabase, Razorpay, Claude/OpenAI API, Cloudflare, Shiprocket API",
      idealFor: "Retail businesses going online, D2C brands, manufacturers selling directly, and any business with 50+ products that wants a professional, high-converting online store.",
      outcomes: [
        "Professional online store that converts browsers into buyers",
        "AI recommendations increase average order value by 15-25%",
        "Abandoned cart recovery brings back 10-15% of lost sales",
        "Order management automation eliminates manual errors",
        "Search and chatbot ensure customers find what they need instantly",
        "Data-driven decisions about products, pricing, and promotions",
      ],
    },
  },

  // ─── INDUSTRY SOLUTIONS ──────────────────────────────────────────────

  {
    slug: "ai-training-institute-management",
    title: "AI Training Institute Management System",
    category: "Industry Solutions",
    hook: "Complete management system for training companies — batches, students, trainers, certificates, and payments",
    featured: true,
    problem: [
      "Batch management is Excel-based chaos. Schedules, attendance, student lists, trainer assignments — all in spreadsheets that nobody maintains properly. Double-bookings happen, schedules conflict, and trainers show up to empty rooms because of miscommunication.",
      "Student lifecycle management doesn't exist. From inquiry to enrollment to training to certification to alumni — every stage is handled separately with no continuity. You can't tell how many inquiries converted or how many alumni re-enrolled.",
      "Certificate generation is manual. After every training, someone opens a template, types each name, formats the certificate, and either prints or emails them individually. For a batch of 30, this takes an entire day.",
      "Revenue tracking is opaque. Which programs are profitable? Which trainers generate the most revenue? What's your cost per student? What's the average revenue per batch? These fundamental business questions can't be answered without hours of manual calculation.",
    ],
    diagnosis:
      "Training institutes operate in one of the most operationally complex business models — managing multiple batches, schedules, trainers, venues, students, payments, and certifications simultaneously. Yet most institutes manage all of this with a combination of Excel, WhatsApp groups, and human memory.\n\nThe complexity grows exponentially. Going from 5 concurrent batches to 20 doesn't just multiply the work by 4 — it creates exponentially more scheduling conflicts, communication overhead, and coordination requirements. Without a system, this complexity becomes the ceiling for growth. Institutes that could serve 500 students plateau at 200 because their operations can't handle more.\n\nAn AI-powered institute management system handles this complexity elegantly. It automates batch scheduling (resolving conflicts automatically), manages the complete student lifecycle, generates certificates in seconds, tracks payments, measures trainer performance, and gives you a real-time view of your institute's health — all in one platform.",
    solution: {
      overview:
        "A comprehensive management system built specifically for training institutes, coaching centers, and corporate training companies. Manages the complete lifecycle from lead to alumni, with batch scheduling, attendance, payments, certificates, and business analytics.",
      features: [
        "Batch management with automated scheduling and conflict detection",
        "Student lifecycle — inquiry → enrollment → training → certification → alumni",
        "Trainer management with availability, performance, and payment tracking",
        "AI-powered certificate generator with customizable templates",
        "Payment tracking with automated reminders and receipt generation",
        "Attendance management with digital check-in",
        "Course catalog with curriculum management",
        "Venue/room booking and resource management",
        "Student feedback and trainer rating system",
        "Business analytics — revenue per batch, trainer ROI, program profitability",
        "Student portal for schedule, materials, and certificates",
        "Bulk WhatsApp/email communication to batches and student groups",
      ],
      timeline: "8-12 weeks for complete system deployment",
      techStack: "Next.js, Supabase, Cloudflare, Claude/OpenAI API, WhatsApp API, React-PDF",
      idealFor: "Corporate training companies, coaching institutes, skill development centers, certification bodies, and any organization running regular training programs with multiple batches.",
      outcomes: [
        "Batch scheduling time reduced by 80% with AI-powered conflict resolution",
        "Complete student lifecycle tracking from first inquiry to alumni",
        "Certificate generation in seconds instead of hours",
        "Real-time financial visibility — know exactly which programs are profitable",
        "Student and trainer experience improves with self-service portals",
        "Operations scale from 5 to 50+ concurrent batches without proportional headcount increase",
      ],
    },
  },

  {
    slug: "ai-real-estate-crm",
    title: "AI Real Estate Management System",
    category: "Industry Solutions",
    hook: "Property listings, client matching, site visit scheduling, and deal tracking — all AI-powered",
    problem: [
      "Property data lives in your team's heads and phone galleries. When a client asks 'Do you have a 3BHK in Baner under ₹1.2 Cr?', the agent scrolls through WhatsApp forwards and personal notes instead of searching a proper database.",
      "Client-property matching is manual guesswork. An agent might have the perfect property for a client registered with a different agent in your firm, but there's no system connecting the dots. Cross-selling within your own team doesn't happen.",
      "Site visit scheduling is chaotic. Double bookings, no-shows, forgetting to follow up after visits — the logistics of managing 50+ site visits per week across multiple properties and agents is coordination nightmare without a system.",
      "Deal tracking is non-existent. You can't see how many deals are in negotiation, what's the expected closure value this month, which properties have the most interest, or which agents are performing. Pipeline visibility is zero.",
    ],
    diagnosis:
      "Real estate is a relationship and information business, yet most agencies run on relationships alone while neglecting information management. The result is a business that's entirely dependent on individual agents' knowledge and personal networks, creating massive vulnerability when agents leave and carrying inefficiency as the inventory grows.\n\nThe AI opportunity in real estate is enormous. When you have 500 properties and 1000 clients with specific requirements, the matching problem is combinatorial — no human can optimally match every client to every suitable property. AI can. It can analyze client preferences, budget, location history, and property attributes to suggest the best matches instantly.\n\nBeyond matching, AI can predict which clients are most likely to close (based on their engagement patterns), automate follow-ups after site visits, generate property descriptions, and provide market analytics. It transforms a people-dependent business into a system-powered one.",
    solution: {
      overview:
        "A comprehensive real estate management platform with AI-powered property-client matching, automated site visit management, deal pipeline tracking, and market analytics — designed specifically for Indian real estate operations.",
      features: [
        "Property database with photos, videos, floor plans, and specifications",
        "AI client-property matching based on requirements and preferences",
        "Site visit scheduling with automated reminders and follow-ups",
        "Deal pipeline with stage tracking and expected closure dates",
        "Agent performance dashboard with individual metrics",
        "Automated client nurturing via WhatsApp and email",
        "AI-generated property descriptions from basic inputs",
        "Client portal for saved searches and property shortlists",
        "Commission tracking and calculation",
        "Market analytics — pricing trends, demand hotspots, inventory analysis",
      ],
      timeline: "6-8 weeks for complete platform deployment",
      techStack: "Next.js, Supabase, Claude/OpenAI API, WhatsApp API, Cloudflare, Maps API",
      idealFor: "Real estate agencies, property developers, brokerages, and any real estate business managing 50+ properties and 200+ client relationships.",
      outcomes: [
        "AI matching connects the right clients with the right properties instantly",
        "Site visit coordination automated — no more double bookings or forgotten follow-ups",
        "Complete deal pipeline visibility enables accurate revenue forecasting",
        "Agent productivity increases with system-supported workflows",
        "Client experience improves with personalized, timely communication",
        "Business knowledge stays in the system, not in agents' heads",
      ],
    },
  },

  {
    slug: "ai-healthcare-clinic-management",
    title: "AI Healthcare & Clinic Management",
    category: "Industry Solutions",
    hook: "Patient management, appointments, prescriptions, and billing — with AI assistance for better care",
    problem: [
      "Appointment scheduling is phone-based chaos. Patients call, the receptionist checks a register or basic software, books the slot, and writes it on a paper backup. Double bookings, no-shows, and scheduling gaps waste the doctor's most valuable resource — time.",
      "Patient records are fragmented. Previous prescriptions in one file, lab reports in another, billing in a third system. When a patient walks in, piecing together their complete medical history takes 10-15 minutes of flipping through files.",
      "Billing and insurance are manual nightmares. Generating bills with proper codes, processing insurance claims, tracking outstanding payments, and reconciling at the end of the day consumes significant administrative time.",
      "Follow-up compliance is poor. Patients miss follow-up appointments, forget to take medications, and don't return for preventive checkups. The clinic has no automated system to remind and re-engage patients.",
    ],
    diagnosis:
      "Healthcare delivery in India is severely bottlenecked by administrative inefficiency. A doctor who should be spending 30 minutes with a patient spends 10 minutes on actual care and 20 minutes on paperwork, searching records, and administrative tasks. The patient gets a rushed consultation, the doctor is frustrated, and the clinic's capacity is artificially limited.\n\nThe irony is that healthcare generates enormous amounts of data — patient histories, prescriptions, lab results, billing records — yet uses almost none of it intelligently. A patient with diabetes visits for a skin issue, and the doctor might not even see the diabetes history without specifically looking for it. AI changes this by surfacing relevant information automatically.\n\nAn AI-powered clinic management system doesn't just digitize records — it creates an intelligent clinical workflow. Appointments self-schedule, records auto-populate, AI flags relevant patient history, prescriptions auto-format, billing auto-generates, and follow-ups auto-schedule. The doctor focuses on medicine; the system handles everything else.",
    solution: {
      overview:
        "An integrated clinic management system that handles appointments, patient records, prescriptions, billing, and follow-ups — with AI assistance that surfaces relevant patient information and automates administrative workflows so doctors can focus on care.",
      features: [
        "Online appointment booking with automated reminders (WhatsApp/SMS)",
        "Digital patient records with complete medical history",
        "AI-powered clinical notes — auto-suggestions based on symptoms",
        "E-prescription generation with drug interaction alerts",
        "Billing and invoice generation with insurance integration",
        "Lab report management and tracking",
        "Automated follow-up scheduling and patient reminders",
        "Patient portal for appointments, reports, and prescriptions",
        "Multi-doctor, multi-location support",
        "Analytics — patient flow, revenue, popular services, doctor utilization",
      ],
      timeline: "6-8 weeks for complete deployment",
      techStack: "Next.js, Supabase, Claude/OpenAI API, WhatsApp API, Cloudflare",
      idealFor: "Clinics, polyclinics, dental practices, physiotherapy centers, diagnostic centers, and any healthcare facility managing 30+ patients per day.",
      outcomes: [
        "Patient wait time reduced by 40% with optimized scheduling",
        "Complete digital patient records accessible in seconds",
        "Doctor consultation time increases as admin time decreases",
        "No-show rate drops with automated appointment reminders",
        "Revenue increases with better follow-up compliance and patient retention",
        "Billing accuracy and speed improve, reducing end-of-day reconciliation",
      ],
    },
  },

  {
    slug: "ai-manufacturing-operations",
    title: "AI Manufacturing Operations System",
    category: "Industry Solutions",
    hook: "Production tracking, quality management, and supply chain optimization — powered by AI",
    problem: [
      "Production tracking is done on paper registers and whiteboards. Real-time visibility into what's being produced, at what rate, with what quality — doesn't exist. You find out about issues hours or days after they occur.",
      "Quality control is reactive. Defects are discovered during final inspection or worse, by the customer. There's no system predicting quality issues based on process parameters or catching them at the stage where they occur.",
      "Supply chain coordination between procurement, production, and dispatch operates through phone calls and WhatsApp groups. Material shortages stall production because procurement didn't have visibility into the production schedule.",
      "Maintenance is breakdown-driven, not preventive. Machines run until they fail, causing unplanned downtime that disrupts production schedules, damages products in process, and creates expensive emergency repair situations.",
    ],
    diagnosis:
      "Indian manufacturing operates on thinner margins than ever before. Global competition, rising material costs, and demanding customers mean that operational inefficiency directly translates to lost competitiveness. Yet most factories still run on systems designed for a different era — paper-based tracking, experience-based quality control, and reactive maintenance.\n\nThe data needed to transform manufacturing operations already exists on the shop floor. Production machines generate cycle time data. Quality inspections generate defect data. Material consumption generates usage data. But this data sits in isolated registers, never connected, never analyzed, never turned into actionable intelligence.\n\nAI-powered manufacturing operations connect this data in real-time. Production dashboards show actual vs. planned output. Quality analytics predict defects before they occur. Maintenance AI recommends service schedules based on machine behavior, not calendar dates. The result is a factory that runs smarter, faster, and leaner.",
    solution: {
      overview:
        "A comprehensive AI-powered manufacturing operations system that provides real-time production visibility, predictive quality management, intelligent maintenance scheduling, and supply chain coordination — transforming your factory floor from reactive to predictive.",
      features: [
        "Real-time production tracking with actual vs. planned dashboards",
        "AI quality prediction — flag potential defects before final inspection",
        "Digital SOP management with operator access on shop floor",
        "Predictive maintenance scheduling based on machine performance data",
        "Material requirement planning with automated procurement triggers",
        "Batch/lot tracking for complete traceability",
        "OEE (Overall Equipment Effectiveness) tracking and optimization",
        "Shift handover digitalization with automated reports",
        "Supplier performance tracking and delivery monitoring",
        "Management dashboards with plant-wide KPIs and analytics",
      ],
      timeline: "8-12 weeks for complete implementation",
      techStack: "Next.js, Supabase, Python/ML, IoT integration, Claude/OpenAI API, Cloudflare",
      idealFor: "Manufacturing plants, factories, production units, assembly operations, and any facility with 50+ workers where production efficiency directly impacts profitability.",
      outcomes: [
        "Real-time production visibility replaces end-of-day paper reports",
        "Quality defect rates reduced by 20-40% with predictive monitoring",
        "Unplanned downtime reduced by 30-50% with predictive maintenance",
        "Material waste reduced through better planning and tracking",
        "Complete traceability from raw material to finished product",
        "Management decisions based on data, not delayed reports",
      ],
    },
  },

  // ─── KYC & COMPLIANCE ────────────────────────────────────────────────

  {
    slug: "ai-kyc-compliance",
    title: "AI KYC & Compliance Automation",
    category: "Data & Analytics",
    hook: "Automate identity verification, document collection, and compliance checks — fast, accurate, digital",
    problem: [
      "KYC collection is manual — physically collecting Aadhaar copies, PAN cards, bank statements, and address proofs, then manually verifying them by checking details against government databases one document at a time.",
      "Compliance deadlines are tracked in spreadsheets. When regulations change or renewal dates approach, the team scrambles. Missed compliance results in penalties that could have been easily avoided with proper automation.",
      "Document storage is a combination of physical files and scattered digital copies. Finding a specific client's KYC documents during an audit requires hours of searching through folders, both physical and digital.",
      "Verification errors happen because humans are checking documents manually. A wrong PAN number, a mismatched address, an expired document — these slip through when you're processing 50+ verifications per day.",
    ],
    diagnosis:
      "India's regulatory environment is becoming increasingly digital-first. From GST to SEBI to RBI, regulators are mandating digital compliance, electronic verification, and audit-ready documentation. Businesses that continue with paper-based, manual compliance processes face increasing penalties, audit failures, and operational risk.\n\nThe manual KYC process is particularly problematic because it's slow (takes days per client), error-prone (manual verification misses issues), expensive (requires dedicated staff), and creates terrible client experience (asking for the same documents repeatedly).\n\nAI-powered KYC automation transforms this into a digital, instant process. Documents are captured via camera/upload, OCR extracts the data, APIs verify against government databases in seconds, and the verified data is stored securely with an audit trail. What took days now takes minutes, with higher accuracy and better compliance.",
    solution: {
      overview:
        "A digital KYC and compliance automation platform that handles document collection, identity verification, regulatory compliance tracking, and secure document storage — replacing manual paper-based processes with instant, AI-powered digital verification.",
      features: [
        "Digital document capture via camera or file upload",
        "AI-powered OCR for automatic data extraction from documents",
        "Aadhaar, PAN, GST, and bank account verification APIs",
        "Face matching between selfie and ID document",
        "Automated compliance calendar with deadline alerts",
        "Secure, encrypted document storage with audit trail",
        "Client self-service portal for document submission",
        "Bulk verification for processing multiple clients",
        "Compliance reporting for regulatory audits",
        "Integration with your CRM and client management system",
      ],
      timeline: "4-6 weeks for platform setup and API integration",
      techStack: "Next.js, Supabase, OCR APIs, Government verification APIs, Cloudflare",
      idealFor: "Financial services, NBFCs, insurance companies, real estate firms, CA/CS firms, and any regulated business that processes KYC for clients.",
      outcomes: [
        "KYC processing time reduced from days to minutes",
        "Verification accuracy improves with API-based checks",
        "100% digital document storage with instant retrieval for audits",
        "Compliance deadlines never missed with automated tracking",
        "Client experience improves with self-service digital submission",
        "Regulatory audit readiness with complete, organized documentation",
      ],
    },
  },

  {
    slug: "ai-restaurant-management",
    title: "AI Restaurant & F&B Management",
    category: "Industry Solutions",
    hook: "Digital menu, orders, kitchen display, billing, and inventory — all connected with AI insights",
    problem: [
      "Order errors happen daily. Waitstaff scribble orders on paper, misread them in the kitchen, forget modifications, and the wrong dish reaches the wrong table. Each error costs ingredients, time, and customer satisfaction.",
      "You have no idea what your most profitable dishes are. The menu hasn't been analyzed for food cost vs. selling price optimization. Some popular items are actually losing you money because ingredient costs have risen.",
      "Inventory for a restaurant is uniquely challenging — perishable items, daily fluctuations in demand, multiple suppliers, and waste that eats directly into margins. Without a system, you're either over-ordering (waste) or under-ordering (disappointed customers).",
      "Peak hour management is reactive. You don't know in advance when the rush will hit, whether you have enough prep done, or if kitchen capacity can handle the expected volume. Every Friday night feels like a surprise.",
    ],
    diagnosis:
      "The restaurant business has razor-thin margins — typically 5-15% net profit. At these margins, every inefficiency is magnified. A 10% food waste rate, a 5% order error rate, or a 15-minute increase in table turnaround time can be the difference between profit and loss.\n\nMost restaurants manage these critical metrics by experience and instinct. The head chef 'knows' how much to prep. The manager 'feels' when the rush is coming. The owner 'estimates' food costs. This works for a single restaurant run by the owner — it breaks completely for multi-outlet operations or when any key person is absent.\n\nAI brings data-driven precision to restaurant operations. It predicts demand based on day, weather, events, and historical patterns. It optimizes the menu by analyzing food costs and popularity. It tracks inventory with waste monitoring. It manages orders digitally from table to kitchen to billing. The result is a restaurant that runs profitably even when the owner isn't watching.",
    solution: {
      overview:
        "An end-to-end restaurant management system with digital ordering, kitchen display, AI-powered inventory management, smart billing, and analytics — everything a modern restaurant needs to run efficiently and profitably.",
      features: [
        "QR code digital menu with real-time item availability",
        "Table-side ordering via tablet or customer phone",
        "Kitchen Display System (KDS) with order prioritization",
        "AI-powered inventory management with waste tracking",
        "Menu engineering — profitability analysis for every item",
        "Billing with GST, discounts, and split bill functionality",
        "AI demand prediction for prep planning",
        "Customer database with visit history and preferences",
        "Multi-outlet management with centralized analytics",
        "Supplier management with order automation",
      ],
      timeline: "4-6 weeks for single outlet deployment",
      techStack: "Next.js, Supabase, Claude/OpenAI API, QR systems, POS integration",
      idealFor: "Restaurants, cafes, cloud kitchens, QSR chains, catering businesses, and any F&B operation doing 100+ covers per day.",
      outcomes: [
        "Order errors reduced by 90%+ with digital ordering",
        "Food waste reduced by 15-25% with AI inventory management",
        "Menu profitability optimized with data-driven engineering",
        "Table turnaround time improved with streamlined operations",
        "Complete business visibility — revenue, costs, and margins in real-time",
        "Scalable system that works for 1 outlet or 50",
      ],
    },
  },

  {
    slug: "ai-school-college-erp",
    title: "AI School & College ERP",
    category: "Industry Solutions",
    hook: "Complete education management — admissions, attendance, fees, exams, and parent communication",
    problem: [
      "Admissions are paper-based and chaotic. Application forms, document collection, fee processing, seat allocation — all managed manually during the most critical period of the academic year. Staff is overwhelmed, parents are frustrated, and data entry errors are rampant.",
      "Fee collection is a nightmare. Reminders are sent manually, payment tracking is in registers, defaulter lists take hours to generate, and reconciliation with the bank account is a monthly ordeal.",
      "Communication with parents is inconsistent. Some get updates on WhatsApp, some via circular, some not at all. During emergencies or schedule changes, reaching all parents quickly is nearly impossible.",
      "Exam management — from setting papers to entering marks to generating report cards — consumes weeks of staff time every semester. Analysis of student performance across subjects and over time is virtually non-existent.",
    ],
    diagnosis:
      "Educational institutions generate and manage more data per person than almost any other type of organization — attendance daily, grades monthly, fees quarterly, plus health records, behavioral notes, extracurricular activities, and communication logs. Yet most schools and colleges manage this data using the same methods they used 20 years ago.\n\nThe result is that administrators spend their time on data management instead of education management. Teachers fill registers instead of innovating in classrooms. Parents feel disconnected from their child's academic journey. And the institution's leadership makes decisions based on delayed, incomplete information.\n\nAn AI-powered ERP for education brings everything together. Admissions flow digitally. Attendance is automated. Fees are tracked and collected systematically. Exams are managed end-to-end. Communication reaches every parent instantly. And AI provides insights — which students need intervention, which teachers need support, which processes need improvement.",
    solution: {
      overview:
        "A comprehensive education management platform that handles the complete institutional lifecycle — admissions, attendance, fees, academics, exams, communication, and analytics — designed specifically for Indian schools and colleges.",
      features: [
        "Online admissions with application tracking and seat management",
        "Digital attendance with parent notification for absences",
        "Fee management with online payment, reminders, and defaulter tracking",
        "Exam management — scheduling, mark entry, report card generation",
        "AI-powered student performance analytics and early warning system",
        "Parent portal and app for real-time updates and communication",
        "Timetable management with automatic conflict resolution",
        "Staff management with attendance, leave, and payroll",
        "Library management with digital catalog",
        "Transport management with route planning and tracking",
        "Circular and notice management with multi-channel delivery",
        "Compliance reporting for regulatory requirements",
      ],
      timeline: "10-14 weeks for complete institutional deployment",
      techStack: "Next.js, Supabase, Claude/OpenAI API, WhatsApp API, Cloudflare, Mobile PWA",
      idealFor: "Schools (CBSE, ICSE, State Board), colleges, coaching institutes, and educational chains managing multiple campuses.",
      outcomes: [
        "Admissions processing time reduced by 60% with digital workflows",
        "Fee collection efficiency improves with automated reminders and online payments",
        "Parent engagement increases dramatically with real-time portal access",
        "AI identifies at-risk students before academic issues become serious",
        "Administrative staff workload reduced by 50%+ across all functions",
        "Complete institutional analytics for data-driven management",
      ],
    },
  },
];
