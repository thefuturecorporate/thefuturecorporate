import BlogDetail from "./BlogDetail";

// Hardcoded slugs — no Supabase dependency at build time
// Update this list when new blogs are added
export function generateStaticParams() {
  return [
    "ai-business-competitors-using-it",
    "ai-indian-businesses-empowering-not-replacing",
    "business-runs-on-whatsapp-killing-growth",
    "business-tools-dont-connect-avoid-tech-frustration",
    "businesses-that-grow-minimize-problems",
    "chaos-to-clarity-dashboard-transform-decisions",
    "communication-crisis-teams-cant-collaborate",
    "effortless-lead-management-automatic-capture-score-assign",
    "erp-needs-ai-to-stay-relevant",
    "first-90-days-new-hires-leave-early",
    "hidden-cost-manual-hr-paperwork",
    "indian-business-crm-2026",
    "integrate-billing-crm-systems-client-dues",
    "manage-sales-leads-business-growth",
    "relying-on-excel-risking-business-growth",
    "stop-buying-software-build-custom-systems",
    "transform-mondays-dashboard-boost-revenue-efficiency",
    "waiting-3-days-for-mis-report",
    "why-best-employees-quit-not-about-salary",
    "why-leadership-training-fails-indian-companies",
  ].map((slug) => ({ slug }));
}

export default function BlogSlugPage() {
  return <BlogDetail />;
}
