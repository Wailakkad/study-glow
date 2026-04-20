import AnimatedSection from "@/components/ui/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Study Glow",
  description: "Study Glow website disclaimers and terms of use.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <AnimatedSection direction="up" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-16 lg:p-20">
          <div className="text-center mb-16 border-b border-gray-100 pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4">Disclaimer</h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Last updated: January 15, 2025</p>
          </div>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:text-dark prose-a:text-primary">
            <h2>1. Affiliate Disclaimer</h2>
            <p>Study Glow participates in various affiliate marketing programs. This means we may earn a commission on purchases made through our links to retailer sites at no additional cost to you. We only recommend products or services that we believe will add value to our readers.</p>
            
            <h2>2. Content Disclaimer</h2>
            <p>The information provided by Study Glow on this website is for general educational and informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
            
            <h2>3. External Links Disclaimer</h2>
            <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</p>

            <h2>4. No Professional Advice</h2>
            <p>The study and academic productivity content on this site is not a substitute for professional academic advising, mental health counseling, or medical advice. The study tips, routines, and strategies shared are based on personal experience and general research. Always seek the advice of your academic advisor, counselor, or qualified mental health provider with any questions you may have regarding academic stress or performance.</p>

            <h2>5. Accuracy and Updates</h2>
            <p>While we strive to keep our content updated and accurate, academic standards and software tools (like Notion or app settings) change rapidly. We cannot guarantee that all information within our posts, planners, and templates remains perfectly up-to-date at all times. Use all templates and tips at your own risk and adapt them to your specific educational institution's requirements.</p>

            <h2>Contact Us</h2>
            <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at legal@studyglow.blog.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
