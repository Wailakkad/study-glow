"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Wait slightly for react-markdown to fully inject into the DOM
    setTimeout(() => {
      const article = document.getElementById('article-content');
      if (!article) return;

      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const items: TOCItem[] = elements.map((el) => {
        if (!el.id) {
          el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
        }
        return {
          id: el.id,
          text: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        };
      });

      setHeadings(items);

      const callback = (entries: IntersectionObserverEntry[]) => {
        const visibleHeadings = entries.filter(entry => entry.isIntersecting);
        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, { rootMargin: "0px 0px -60% 0px" });
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 500); 
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-[100px] bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-6 shadow-sm z-40">
      
      {/* Mobile Toggle */}
      <div 
        className="flex md:block justify-between items-center cursor-pointer md:cursor-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-serif font-bold text-dark text-lg md:mb-4 md:border-b md:border-gray-100 md:pb-3">
          Table of Contents
        </h3>
        <span className="md:hidden text-gray-400 font-bold transition-transform">
          {isOpen ? '▲' : '▼'}
        </span>
      </div>

      {/* List items */}
      <ul className={`space-y-3 mt-4 md:mt-0 overflow-hidden transition-all ${isOpen ? 'block' : 'hidden md:block'}`}>
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`transition-all text-[14px] ${heading.level === 3 ? "ml-4" : ""} ${activeId === heading.id ? "text-primary font-bold border-l-2 pl-3 border-primary" : "text-gray-500 hover:text-dark pl-2 border-l-2 border-transparent"}`}
          >
            <a 
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="line-clamp-2 leading-snug py-0.5"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
