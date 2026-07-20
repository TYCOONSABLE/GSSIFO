import { Link } from "wouter";
import { ArrowLeft, Shield, FileSpreadsheet, Activity, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalProps {
  type: "privacy" | "terms" | "accessibility";
}

export default function Legal({ type }: LegalProps) {
  const content = {
    terms: {
      title: "Terms of Service",
      subtitle: "Last Updated: July 14, 2026",
      icon: FileSpreadsheet,
      paragraphs: [
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing and using the GSSIFO-Global-Suite web applications, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must refrain from using the platform.",
        },
        {
          heading: "2. Rules of Engagement",
          body: "You agree to use our site for lawful purposes. You shall not input fraudulent information on volunteer or partnership inquiries, submit fake resumes on career postings, or attempt unauthorized database exploits.",
        },
        {
          heading: "3. Intellectual Property Rights",
          body: "All text, custom web graphics, logo layouts, publication reports, and photography assets displayed on the GSSIFO platform are copyrighted properties of the Global Sustainability and Social Impact Foundation, unless otherwise cited. Unauthorized commercial replication is strictly prohibited.",
        },
        {
          heading: "4. Limitation of Liability",
          body: "GSSIFO makes no absolute warranties that website modules will run completely uninterrupted or bug-free. All programs, opportunities, and event updates are provided on an 'as is' basis without liability for technical anomalies.",
        },
      ],
    },
    accessibility: {
      title: "Accessibility Statement",
      subtitle: "Last Updated: July 14, 2026",
      icon: Activity,
      paragraphs: [
        {
          heading: "1. Our Commitment",
          body: "GSSIFO is dedicated to ensuring digital accessibility for all users, including individuals with visual, auditory, cognitive, or physical impairments. We continuously upgrade our web layouts to follow the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.",
        },
        {
          heading: "2. Implemented Measures",
          body: "We employ high-contrast color balances, readable text scales, screen-reader descriptions on image tags (alt attributes), skip-navigation elements, and keyboard-navigable links to provide a fluid user experience.",
        },
        {
          heading: "3. Third-Party Plugins",
          body: "While we strive for absolute site-wide accessibility, third-party widgets (such as mapping services or external donation processors) may present layout constraints beyond our direct operational adjustments.",
        },
        {
          heading: "4. Accessibility Feedback",
          body: "If you encounter layout issues or access barriers while using GSSIFO systems, please contact our web accessibility team at accessibility@gssifo.org. We will make every effort to resolve the issue as quickly as possible.",
        },
      ],
    },
  };

  if (type === "privacy") {
    return (
      <div className="py-24 bg-slate-50/50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-14 shadow-sm text-slate-800">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
                <p className="text-sm text-slate-500 mt-1 font-medium">Effective Date: July 18, 2026</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-slate-705 leading-relaxed text-base">
              <p>
                At <strong>Global Sustainability and Social Impact Foundation (GSSIFO)</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or use our services.
              </p>
              <p>
                This policy applies to all pages and services operated by Global Sustainability and Social Impact Foundation (GSSIFO).
              </p>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Information We Collect</h2>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">General Website Usage</h3>
                <p className="mb-4">
                  You can browse the GSSIFO website without providing any personal information. During normal browsing, we may automatically collect technical information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>IP (Internet Protocol) address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Device information</li>
                  <li>Date and time of your visit</li>
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                  <li>Referring website</li>
                  <li>Files downloaded</li>
                </ul>
                <p className="text-sm text-slate-500 italic">
                  This information is collected through standard web server logs and analytics tools to improve our website.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8 mb-2">Personal Information</h3>
                <p className="mb-4">
                  We collect personal information only when you voluntarily provide it. This may occur when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Register for newsletters</li>
                  <li>Contact us through forms</li>
                  <li>Submit volunteer applications</li>
                  <li>Apply for internships or jobs</li>
                  <li>Register for events</li>
                  <li>Make donations</li>
                  <li>Become a partner or member</li>
                  <li>Request information</li>
                  <li>Participate in surveys</li>
                  <li>Submit feedback</li>
                </ul>
                <p className="mb-4">
                  The information collected may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Postal Address</li>
                  <li>Organization Name</li>
                  <li>Country</li>
                  <li>Professional Information</li>
                  <li>Donation Details (where applicable)</li>
                </ul>
                <p className="text-sm text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-100/80">
                  <strong>Payment Security:</strong> Payment information is processed securely through trusted third-party payment providers. GSSIFO does not store your complete credit or debit card information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Cookies</h2>
                <p className="mb-4">
                  Our website may use cookies to improve your browsing experience. Cookies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Remember your preferences</li>
                  <li>Keep you logged in</li>
                  <li>Improve website performance</li>
                  <li>Analyze visitor behavior</li>
                  <li>Personalize content</li>
                </ul>
                <p>
                  You can disable cookies through your browser settings, although some website features may not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  The information collected may be used to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-6">
                  <li>Respond to your inquiries</li>
                  <li>Provide requested information</li>
                  <li>Send newsletters and updates</li>
                  <li>Process donations</li>
                  <li>Register you for events</li>
                  <li>Manage volunteer applications</li>
                  <li>Process internship and employment applications</li>
                  <li>Improve website functionality</li>
                  <li>Analyze website traffic</li>
                  <li>Maintain security</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-4">
                  We use your information only for legitimate organizational purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Sharing of Information</h2>
                <p className="mb-3">
                  GSSIFO respects your privacy. <strong>We do not sell, rent, or trade your personal information.</strong>
                </p>
                <p className="mb-4">
                  We may share information only when necessary with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trusted service providers</li>
                  <li>Payment processors</li>
                  <li>Email communication providers</li>
                  <li>Government authorities when required by law</li>
                  <li>Legal advisors for compliance purposes</li>
                </ul>
                <p className="mt-4">
                  All third-party service providers are required to protect your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your information from unauthorized access, data loss, misuse, alteration, disclosure, destruction. Although we strive to protect your information, no method of internet transmission or electronic storage is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Your Rights</h2>
                <p className="mb-4">
                  Depending on applicable laws, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Update your information</li>
                  <li>Delete your information</li>
                  <li>Withdraw consent</li>
                  <li>Object to certain processing activities</li>
                  <li>Request a copy of your personal data</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the contact information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Third-Party Websites</h2>
                <p>
                  Our website may contain links to external websites. GSSIFO is not responsible for the privacy practices, security, or content of third-party websites. We encourage users to review the privacy policies of any external websites they visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Children's Privacy</h2>
                <p>
                  Our services are not directed toward children under the age of 13. We do not knowingly collect personal information from children. If such information is identified, it will be removed as soon as reasonably possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Retention of Information</h2>
                <p>
                  We retain personal information only for as long as necessary to provide our services, meet legal obligations, resolve disputes, and enforce our policies. After this period, information is securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#080b11] mb-4">Changes to This Privacy Policy</h2>
                <p>
                  GSSIFO may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date. We encourage users to review this page periodically.
                </p>
              </div>

              {/* Highlighted Contact Us Section */}
              <div className="bg-[#e6f0ff]/30 border border-[#0c57cf]/15 rounded-2xl p-6 sm:p-8 mt-10">
                <h2 className="text-2xl font-bold text-[#0c57cf] mb-4">Contact Us</h2>
                <p className="mb-6 text-sm sm:text-base">
                  If you have any questions regarding this Privacy Policy or your personal information, please contact:
                </p>
                <div className="space-y-4 text-slate-800">
                  <div className="font-bold text-lg text-slate-950">
                    Global Sustainability and Social Impact Foundation (GSSIFO)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0c57cf] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">
                        45, Valluvar Kottam High Rd,<br />
                        Ponnangipuram, Nungambakkam,<br />
                        Chennai, Greater Chennai,<br />
                        Tamilnadu 600034
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#0c57cf] shrink-0" />
                        <a href="mailto:info@gssifo.org" className="text-sm text-[#0c57cf] hover:underline font-semibold">info@gssifo.org</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#0c57cf] shrink-0" />
                        <span className="text-sm text-slate-700">+91 91597 79659</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-[#0c57cf] shrink-0" />
                        <span className="text-sm text-slate-700">www.gssifo.org</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Notice */}
              <div className="border-t border-slate-100 pt-8 mt-8">
                <h2 className="text-2xl font-bold text-slate-950 mb-3">Cookie Notice</h2>
                <p className="mb-4">
                  Cookies are small text files stored on your device that help websites function efficiently. GSSIFO uses cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve website functionality</li>
                  <li>Remember user preferences</li>
                  <li>Measure website performance</li>
                  <li>Enhance user experience</li>
                </ul>
                <p className="mt-4">
                  You can control or disable cookies through your browser settings at any time.
                </p>
              </div>
            </div>

            {/* Footer links in card */}
            <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-450">© {new Date().getFullYear()} GSSIFO. All rights reserved.</p>
              <div className="flex gap-4 text-xs font-semibold text-primary">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
                <Link href="/accessibility" className="hover:underline">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Terms and Accessibility use the general template
  const doc = content[type as keyof typeof content];
  const Icon = doc.icon;

  return (
    <div className="py-24 bg-muted/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="bg-white border rounded-xl p-8 sm:p-12 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{doc.title}</h1>
              <p className="text-sm text-muted-foreground">{doc.subtitle}</p>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            {doc.paragraphs.map((p, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-foreground mb-3">{p.heading}</h3>
                <p className="text-sm sm:text-base">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} GSSIFO. All rights reserved.</p>
            <div className="flex gap-4 text-xs font-semibold text-primary">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
              <Link href="/accessibility" className="hover:underline">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
