import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "General Information",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Inquiry: ${formData.inquiryType}`);
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Inquiry Type: ${formData.inquiryType}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:info@gssifo.org?subject=${subject}&body=${body}`;

    toast({
      title: "Inquiry Sent Successfully!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "General Information",
      message: ""
    });
  };

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen font-sans">
      <div className="container mx-auto px-4 max-w-[1280px] lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-slate-900 tracking-tight">Contact Us</h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-16 max-w-3xl mx-auto text-center leading-relaxed">
          Have a question about our programs, partnerships, volunteering opportunities, or donations? We'd love to hear from you. Reach out to our team using the details below or send us a message.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 tracking-tight border-b pb-4 border-slate-100">Headquarters</h2>
              <ul className="space-y-6 text-slate-600">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0c57cf]/10 flex items-center justify-center shrink-0 text-[#0c57cf]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-[15px] leading-relaxed">
                    <p className="font-bold text-slate-800 text-base">Global Sustainability and Social Impact Foundation</p>
                    <p className="mt-1">45, Valluvar Kottam High Road</p>
                    <p>Ponnangipuram, Nungambakkam</p>
                    <p>Chennai, Greater Chennai</p>
                    <p>Tamil Nadu – 600034</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0c57cf]/10 flex items-center justify-center shrink-0 text-[#0c57cf]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-700">+91 91597 79659</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0c57cf]/10 flex items-center justify-center shrink-0 text-[#0c57cf]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:info@gssifo.org" className="text-[15px] font-medium text-slate-700 hover:text-[#0c57cf] transition-colors">
                    info@gssifo.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 tracking-tight">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-slate-50/50 text-[15px]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-slate-50/50 text-[15px]" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-slate-50/50 text-[15px]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-slate-50/50 text-[15px]" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Type</label>
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-white text-[15px]"
                >
                  <option>General Information</option>
                  <option>Partnership</option>
                  <option>Volunteering</option>
                  <option>Donations</option>
                  <option>CSR Collaboration</option>
                  <option>Career Opportunities</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c57cf] focus:border-[#0c57cf] bg-slate-50/50 text-[15px] resize-y" 
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full h-12 bg-[#0c57cf] hover:bg-[#0c57cf]/90 text-white font-bold rounded-xl text-base shadow-md transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
