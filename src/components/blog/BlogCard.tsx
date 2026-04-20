import { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getCategoryGradient = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'study tips': return 'from-yellow-100 to-amber-200';
      case 'study aesthetic': return 'from-rose-100 to-pink-200';
      case 'student motivation': return 'from-purple-100 to-violet-200';
      case 'study planners': return 'from-green-100 to-emerald-200';
      case 'productivity': return 'from-blue-100 to-indigo-200';
      case 'study notes': return 'from-teal-100 to-cyan-200';
      default: return 'from-primary/20 to-primary-dark/20';
    }
  };

  const gradientClass = getCategoryGradient(post.category);

  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
    >
      <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br ${gradientClass}`}>
        {!post.image ? (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} z-0 flex items-center justify-center opacity-80`} />
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
          />
        )}
        
        {/* Bottom Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/60 via-transparent to-transparent z-10" />

        {/* Badges */}
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-white/90 backdrop-blur-md text-dark px-3 py-1.5 text-[10px] font-extrabold uppercase rounded-full shadow-sm tracking-widest">
            {post.category}
          </span>
        </div>
        
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-dark/70 text-white backdrop-blur-md px-3 py-1.5 text-[10px] font-extrabold uppercase rounded-full shadow-sm tracking-widest flex items-center gap-1.5">
            <span role="img" aria-label="clock">⏱️</span> {post.readingTime || '5 MIN'}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-[13px] text-gray-500 font-medium mb-3 gap-1.5">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        </div>
        
        <h3 className="text-xl md:text-[22px] font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-5 font-sans leading-relaxed flex-grow">
          {post.description}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 border border-gray-200 hover:border-gray-300 transition-colors text-gray-500 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-1 text-primary font-bold text-sm mt-auto group-hover:text-primary-dark transition-colors tracking-wide">
          Read Article <span className="transition-transform group-hover:translate-x-1.5 text-lg leading-none mt-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}
