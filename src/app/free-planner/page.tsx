import AnimatedSection from "@/components/ui/AnimatedSection";
import DownloadButton from "@/components/ui/DownloadButton";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Free Study Planner 2026 — Download Instantly | Study Glow",
  description: "Download your free 2026 student study planner PDF instantly. Includes weekly planner, monthly calendar, habit tracker and goal setting pages. No email required.",
};

const plannerFeatures = [
  {
    icon: "📅",
    color: "bg-primary/10",
    title: "Weekly Study Planner",
    description: "Color-coded 7-day grid with time blocks from 7AM to 8PM. Includes goals section and weekly wins.",
    badge: "Most Popular",
  },
  {
    icon: "🗓️",
    color: "bg-secondary/20",
    title: "Monthly Overview",
    description: "Full 31-day calendar view to see your entire month, track exams and plan ahead.",
  },
  {
    icon: "⏰",
    color: "bg-emerald-100",
    title: "Daily Schedule",
    description: "Hour-by-hour planner from 5AM to 10PM with mood tracker and water intake tracker.",
  },
  {
    icon: "✅",
    color: "bg-blue-100",
    title: "Habit Tracker",
    description: "Track 10 habits across all 31 days of the month. Includes 7 pre-filled study habits.",
  },
  {
    icon: "🎯",
    color: "bg-amber-100",
    title: "Goal Setting Page",
    description: "Set your big 3 semester goals with monthly milestones and accountability system.",
  },
  {
    icon: "🖨️",
    color: "bg-gray-100",
    title: "Print-Ready PDF",
    description: "A4 format, print at home or use digitally on your iPad or tablet with any PDF app.",
  },
];

const steps = [
  {
    num: "1",
    title: "Download",
    text: "Click the download button and your PDF saves instantly to your device",
  },
  {
    num: "2",
    title: "Print or Go Digital",
    text: "Print on A4 paper at home or open in GoodNotes, Notability or any PDF app on iPad",
  },
  {
    num: "3",
    title: "Start Planning",
    text: "Fill in your schedule, track habits, and watch your productivity transform",
  },
];

const faqs = [
  {
    q: "Is this planner really free?",
    a: "Yes! 100% free, no email required, no hidden costs. Just click download and it's yours.",
  },
  {
    q: "What format is the planner?",
    a: "The planner is a PDF file. You can print it on A4 paper or use it digitally on iPad, tablet or computer.",
  },
  {
    q: "Can I use it on my iPad?",
    a: "Absolutely! Open the PDF in GoodNotes, Notability, or Adobe Acrobat and write on it with Apple Pencil or stylus.",
  },
  {
    q: "How often do you release new planners?",
    a: "We release updated planners each semester. Follow us on Pinterest @studyglow for updates.",
  },
];

export default function FreePlannerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studyglow.blog" },
      { "@type": "ListItem", position: 2, name: "Free Planner", item: "https://studyglow.blog/free-planner" },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <JsonLd data={breadcrumbSchema} />

      {/* ─── SECTION 1: HERO ────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/15 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/15 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <span className="inline-block bg-primary text-white text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-md">
              ✨ 100% Free — No Email Required
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-extrabold text-dark leading-[1.1] mb-8 tracking-tight">
              Your FREE 2026<br />
              <span className="text-primary">Study Planner</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              6 pages of beautiful planning templates — download instantly and start organizing your academic life today.
            </p>

            <div className="max-w-sm mx-auto mb-8">
              <DownloadButton variant="hero" text="Download Free Planner Now ↓" />
            </div>

            <p className="text-sm text-gray-400 font-medium flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span>✓ Instant PDF download</span>
              <span>✓ Print at home</span>
              <span>✓ Free forever</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT'S INSIDE ───────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4">
              What's Inside Your Free Planner 📋
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              6 carefully designed pages to organize every aspect of your student life
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plannerFeatures.map((feature, idx) => (
              <AnimatedSection key={feature.title} delay={idx * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative">
                  {feature.badge && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: HOW TO USE ──────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">How to Use Your Planner</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {steps.map((step, idx) => (
              <AnimatedSection key={step.num} delay={idx * 0.15} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/25">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: DARK CTA ────────────────────────── */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Study Life? ✨
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
              Join thousands of students who plan smarter with Study Glow
            </p>
            <div className="max-w-sm mx-auto mb-8">
              <DownloadButton variant="primary" text="Get My Free Planner →" />
            </div>
            <p className="text-sm text-gray-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span>📌 Loved on Pinterest</span>
              <span>⭐ Free Forever</span>
              <span>🖨️ Print Ready</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 5: FAQ ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-dark text-lg mb-3 flex items-start gap-3">
                    <span className="text-primary font-serif text-xl">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 leading-relaxed pl-8">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" className="text-center mt-16">
            <Link href="/blog" className="text-primary font-bold hover:text-primary-dark border-b-2 border-primary/20 hover:border-primary-dark pb-1 text-lg transition-colors">
              Browse Study Tips Blog →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
