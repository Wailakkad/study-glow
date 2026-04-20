import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Study Glow — Our Mission to Help Students Study Smarter",
  description: "Learn about Study Glow — a free resource for students seeking study tips, motivation, aesthetic inspiration, and printable planners to succeed academically."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-accent to-secondary/20 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <div className="text-sm font-medium text-gray-500 mb-8 flex items-center justify-center gap-2 tracking-widest uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-primary font-bold">About</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-dark mb-6 tracking-tight">
              About Study Glow ✨
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your ultimate academic companion for studying smarter, beautiful planners, and finding your daily motivation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* MISSION SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-16">
          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-6 border-b-[3px] border-primary/30 pb-4 inline-block">Our Mission</h2>
            <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                Study Glow was created for students who want to study smarter, not just harder. We believe that your study environment, mindset, and systems matter just as much as the hours you put in. Education should empower you, not exhaust you.
              </p>
              <p>
                We started this platform because we noticed a missing link in traditional academic advice. While everyone tells you <em>what</em> to study, very few show you <em>how</em> to study in a way that feels sustainable, aesthetic, and genuinely motivating. Your workspace and tools should spark joy and drive focus.
              </p>
              <p>
                Our mission is simple: to provide high-quality, scientifically-backed study methods wrapped in beautiful design — entirely for free. We&apos;re committed to breaking down academic overwhelm and replacing it with structured planners, real talk, and a community of students dedicated to their academic glow up.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.2} className="w-full lg:w-[45%] lg:ml-auto">
            <div className="bg-gray-50 rounded-[3rem] p-8 sm:p-10 shadow-inner grid grid-cols-2 gap-6 border border-gray-100 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-primary mb-3 font-serif">247K+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-normal">Monthly<br/>Views</div>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-primary mb-3 font-serif">15+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-normal">Free<br/>Resources</div>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-primary mb-3 font-serif">50+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-normal">Countries<br/>Reached</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-lg text-white hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black mb-3 font-serif drop-shadow-sm">100%</div>
                <div className="text-xs font-bold text-white/90 uppercase tracking-widest leading-normal">Always<br/>Free</div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* VALUES SECTION */}
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6 drop-shadow-sm">🆓</div>
              <h3 className="text-xl font-bold text-dark mb-4">Free Forever</h3>
              <p className="text-gray-500 leading-relaxed">Access to premium academic tools shouldn&apos;t cost money. All our planners and resources are always free.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6 drop-shadow-sm">🎓</div>
              <h3 className="text-xl font-bold text-dark mb-4">Student-First</h3>
              <p className="text-gray-500 leading-relaxed">Every piece of content, tip, and template is designed with real student struggles and schedules in mind.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6 drop-shadow-sm">✨</div>
              <h3 className="text-xl font-bold text-dark mb-4">Beauty + Function</h3>
              <p className="text-gray-500 leading-relaxed">We believe that aesthetics matter. Beautiful tools inspire you to use them and keep you motivated longer.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* WHAT WE OFFER SECTION */}
        <AnimatedSection direction="up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-12 text-center">What You&apos;ll Find at Study Glow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📅', text: 'Free Printable Study Planners', link: '/category/study-planners' },
              { icon: '💪', text: 'Study Motivation & Quotes', link: '/category/student-motivation' },
              { icon: '🎨', text: 'Aesthetic Study Inspiration', link: '/category/study-aesthetic' },
              { icon: '🧠', text: 'Proven Study Techniques', link: '/category/study-tips' },
              { icon: '⚡', text: 'Student Productivity Tips', link: '/category/productivity' },
              { icon: '📝', text: 'Study Notes & Organization', link: '/category/study-notes' },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="flex items-center gap-5 p-6 md:p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl hover:border-primary/20 border border-transparent transition-all group">
                <span className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-bold text-dark group-hover:text-primary transition-colors text-lg">{item.text}</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* AUTHOR/TEAM SECTION */}
        <AnimatedSection direction="up" className="bg-dark text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 relative z-10">Made for Students, By Students</h2>
          <div className="prose prose-lg prose-invert mx-auto relative z-10">
            <p>
              The Study Glow team is a passionate collective of current students, recent graduates, and education enthusiasts. We&apos;ve been through the all-nighters, the exam anxiety, and the struggle of trying to stay organized when deadlines pile up.
            </p>
            <p className="mt-6">
              We channel our experiences into creating the exact resources we wished we had during our toughest semesters. Whether you&apos;re a high school freshman navigating new responsibilities or a university senior working on your thesis, our team is here to support your journey every step of the way.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA SECTION */}
        <AnimatedSection direction="up" className="text-center pb-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-10">Start Your Study Glow Up Today</h2>
          <Link href="/blog" className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-12 py-5 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all text-lg tracking-wide">
            Browse All Resources →
          </Link>
        </AnimatedSection>

      </main>
    </div>
  );
}
