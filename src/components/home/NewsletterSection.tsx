"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubscribed(true);
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Sparkles */}
      <div className="absolute top-10 left-[10%] md:left-[20%] text-white/20 text-3xl md:text-4xl animate-pulse">✨</div>
      <div className="absolute bottom-20 right-[5%] md:right-[15%] text-white/10 text-5xl md:text-6xl animate-bounce delay-1000">✨</div>
      <div className="absolute top-30 right-[25%] text-primary/30 text-2xl animate-pulse delay-500 hidden md:block">✨</div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection direction="up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Get Your FREE Study Planner
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students applying our methods. Get free printable planners, exclusive study tips, and motivation sent straight to your inbox every week.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto shadow-2xl">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border-none outline-none text-dark font-medium placeholder:text-gray-400 mb-2 sm:mb-0"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-8 py-4 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get Free Planner →
              </button>
            </form>
          ) : (
            <div className="bg-primary/20 border border-primary/30 p-6 rounded-xl max-w-lg mx-auto text-white">
              <h3 className="text-xl font-bold text-primary mb-2">You&apos;re in! 🎉</h3>
              <p className="text-sm">Check your inbox, your free study planner is on the way.</p>
            </div>
          )}

          <p className="text-gray-500 text-sm mt-6">
            🔒 No spam. We respect your privacy. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
