import AnimatedSection from "@/components/ui/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Study Glow",
  description: "Study Glow privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <AnimatedSection direction="up" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-16 lg:p-20">
          <div className="text-center mb-16 border-b border-gray-100 pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4">Privacy Policy</h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Last updated: January 15, 2025</p>
          </div>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:text-dark prose-a:text-primary hover:prose-a:underline prose-li:my-2">
            <h2>1. Introduction</h2>
            <p>Welcome to Study Glow. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Information you provide:</strong> This includes your email address and name if you choose to subscribe to our newsletter or use our contact forms.</li>
              <li><strong>Automatically collected information:</strong> We automatically collect technical data including your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Analytics Data:</strong> We use Google Analytics to monitor and analyze the use of our service to improve user experience.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To provide, operate, and maintain our website.</li>
              <li>To improve, personalize, and expand our website.</li>
              <li>To send you emails, free resources, and newsletters if you have opted in.</li>
              <li>To serve advertising on our platform via third-party vendors.</li>
            </ul>

            <h2>4. Cookies Policy</h2>
            <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
            <ul>
              <li><strong>Google AdSense Cookies:</strong> Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
              <li><strong>Google Analytics Cookies:</strong> Used to track website traffic and user engagement anonymously.</li>
              <li><strong>Opting Out:</strong> Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>To provide our services, operate our site, and monetize our content, we use the following third-party services which may collect data according to their own privacy policies:</p>
            <ul>
              <li><strong>Google AdSense:</strong> We monetize our website through Google AdSense. Google uses cookies and web beacons to serve personalized ads to users based on user behaviors.</li>
              <li><strong>Google Analytics:</strong> We use tracking to understand our demographic without identifying individuals.</li>
              <li><strong>Pinterest:</strong> We utilize Pinterest widgets to allow easy content sharing which may place tracking cookies.</li>
            </ul>

            <h2>6. Data Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

            <h2>7. Your Rights (GDPR)</h2>
            <p>For visitors from the European Economic Area (EEA), under the General Data Protection Regulation (GDPR), you have the right to request access to, correction of, or erasure of your personal data. You also have the right to object to processing of your personal data or ask for restriction of processing. Contact us directly to exercise these rights.</p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>Our website and services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13 without verifiable parental consent, we will take steps to remove that information from our servers.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> privacy@studyglow.blog</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
