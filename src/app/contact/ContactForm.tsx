"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-primary/10 border-2 border-primary/20 rounded-[2rem] p-12 text-center animate-in fade-in duration-700 h-full flex flex-col justify-center items-center shadow-md">
        <div className="text-7xl mb-6">💕</div>
        <h3 className="text-3xl font-serif font-bold text-dark mb-4">Thanks! We&apos;ll be in touch soon</h3>
        <p className="text-gray-600 text-lg mb-8 max-w-sm">Your message has been safely received by our team.</p>
        <button 
          onClick={() => setStatus("idle")} 
          className="bg-white border border-gray-200 text-dark font-bold px-8 py-3 rounded-full hover:border-primary hover:text-primary transition-colors shadow-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-extrabold text-dark tracking-wide uppercase">Name</label>
        <input required type="text" id="name" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark font-medium" placeholder="Your name" />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-extrabold text-dark tracking-wide uppercase">Email</label>
        <input required type="email" id="email" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark font-medium" placeholder="you@example.com" />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-extrabold text-dark tracking-wide uppercase">Subject</label>
        <select required id="subject" defaultValue="" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 font-medium">
          <option value="" disabled>Select a topic...</option>
          <option value="general">General Question</option>
          <option value="collab">Brand Collaboration</option>
          <option value="content">Content Request</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-extrabold text-dark tracking-wide uppercase">Message</label>
        <textarea required id="message" rows={5} className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-dark font-medium" placeholder="How can we help you?"></textarea>
      </div>

      <button type="submit" className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-5 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:opacity-90 transition-all mt-4 text-lg">
        Send Message →
      </button>
      
      <p className="text-center text-sm font-medium text-gray-400 mt-2">
        We typically respond within 48 hours.
      </p>
    </form>
  );
}
