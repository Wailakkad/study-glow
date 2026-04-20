"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Helper for count up
function Counter({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="w-full bg-gradient-to-r from-primary to-primary-dark py-12 px-4 shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
        
        <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="text-4xl mb-2">👀</div>
          <span className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
            <Counter from={0} to={247} duration={2} suffix="K+" />
          </span>
          <span className="text-white/80 font-medium text-sm lg:text-base uppercase tracking-wider">Monthly Views</span>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="text-4xl mb-2">🎁</div>
          <span className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
            <Counter from={0} to={15} duration={1.5} suffix="+" />
          </span>
          <span className="text-white/80 font-medium text-sm lg:text-base uppercase tracking-wider">Free Resources</span>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="text-4xl mb-2">🎓</div>
          <span className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
            <Counter from={0} to={1000} duration={2.5} suffix="+" />
          </span>
          <span className="text-white/80 font-medium text-sm lg:text-base uppercase tracking-wider">Students Helped</span>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="text-4xl mb-2">✨</div>
          <span className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
            <Counter from={0} to={100} duration={1} suffix="%" />
          </span>
          <span className="text-white/80 font-medium text-sm lg:text-base uppercase tracking-wider">Free Content</span>
        </div>

      </div>
    </section>
  );
}
