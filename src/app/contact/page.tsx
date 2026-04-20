import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Study Glow — Get in Touch With Our Team",
  description: "Have questions, collaboration ideas, or feedback? Contact the Study Glow team. We'd love to hear from students, creators, and brands."
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* HEADER */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden border-b-[8px] border-primary">
        <div className="absolute top-10 right-10 md:right-32 text-white/5 text-[150px] rotate-12 pointer-events-none">✉️</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contact Us ✨
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              We're always excited to connect with fellow students, creators, and brands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN - Contact Info */}
          <AnimatedSection direction="right" className="w-full lg:w-[45%]">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">Get in Touch</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              We love hearing from students! Whether you have a question, want to collaborate, or just want to share your study progress — we're here.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                <span className="w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors text-primary flex items-center justify-center rounded-2xl text-2xl font-bold">📧</span>
                <div>
                  <div className="text-xs text-gray-400 font-extrabold uppercase tracking-widest mb-1">Email Us</div>
                  <a href="mailto:hello@studyglow.blog" className="text-dark font-bold hover:text-primary transition-colors text-lg md:text-xl">hello@studyglow.blog</a>
                </div>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="flex-1 flex flex-col items-center justify-center gap-3 p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#E60023] hover:shadow-lg transition-all text-center group">
                  <span className="text-4xl group-hover:scale-110 transition-transform">📌</span>
                  <span className="font-bold text-gray-600 group-hover:text-[#E60023]">@studyglow</span>
                </a>
                <a href="#" className="flex-1 flex flex-col items-center justify-center gap-3 p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#E1306C] hover:shadow-lg transition-all text-center group">
                  <span className="text-4xl group-hover:scale-110 transition-transform">📸</span>
                  <span className="font-bold text-gray-600 group-hover:text-[#E1306C]">@studyglowblog</span>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-8 md:p-10 rounded-[2.5rem]">
              <h3 className="font-bold text-dark text-xl mb-6 font-serif">What we help with:</h3>
              <ul className="space-y-4">
                {[
                  "Questions about study tips", 
                  "Brand collaborations and sponsorships", 
                  "Sharing your study transformation story", 
                  "Requesting specific content topics", 
                  "Technical issues with our resources"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 font-medium">
                    <span className="text-primary font-black mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN - Form */}
          <AnimatedSection direction="left" className="w-full lg:w-[55%] lg:-mt-32">
            <ContactForm />
          </AnimatedSection>

        </div>
      </main>
    </div>
  );
}
