export interface CategoryData {
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export const CATEGORIES: CategoryData[] = [
  {
    name: "Study Aesthetic",
    slug: "study-aesthetic",
    description: "Create the perfect study environment with beautiful desk setups, aesthetic inspiration, and design ideas that make studying a pleasure.",
    color: "from-rose-100 to-pink-200",
    icon: "🎨"
  },
  {
    name: "Student Motivation",
    slug: "student-motivation", 
    description: "Powerful motivation quotes, reality checks, and mindset shifts that push you to study harder and believe in your academic potential.",
    color: "from-purple-100 to-lavender-200",
    icon: "💪"
  },
  {
    name: "Study Planners",
    slug: "study-planners",
    description: "Free printable study planners, weekly schedule templates, and planning systems to organize your academic life.",
    color: "from-green-100 to-emerald-200",
    icon: "📅"
  },
  {
    name: "Study Tips",
    slug: "study-tips",
    description: "Science-backed study techniques, exam preparation guides, and practical strategies that actually improve your grades.",
    color: "from-yellow-100 to-amber-200",
    icon: "💡"
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Time management strategies, daily routines, and productivity systems designed specifically for students.",
    color: "from-blue-100 to-indigo-200",
    icon: "⚡"
  },
  {
    name: "Study Notes",
    slug: "study-notes",
    description: "Aesthetic note-taking methods, color coding systems, and note organization ideas that make studying more effective.",
    color: "from-teal-100 to-cyan-200",
    icon: "📝"
  }
];
