"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, MapPin, Shield } from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "@/components/Icons";

export function Contact() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            Connect
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-3">
            Open to consulting, executive AI advisement, and mission-critical program leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Direct Details Sidebar */}
          <div className="md:col-span-2 space-y-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
            <h3 className="text-base font-semibold text-white">Direct Channels</h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-zinc-800 text-indigo-400 group-hover:bg-indigo-600/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-300">Email Directly</div>
                  <div className="font-mono text-zinc-200">{personal.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-300">Location</div>
                  <div className="text-zinc-200">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-300">Clearances</div>
                  <div className="text-xs text-zinc-200">US Citizen (DoD / DHS / Federal)</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <div className="text-xs text-zinc-300 mb-3">Professional Profiles</div>
              <div className="flex gap-2 text-zinc-400">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-800/60 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-800/60 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-800/60 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="X / Twitter"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-semibold text-white">Message Prepared!</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Your default email client has been opened with your inquiry addressed to {personal.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-indigo-400 hover:underline"
                >
                  Compose another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@agency.gov"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Program Leadership / Strategic Advisory"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your agency or program needs..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry to {personal.email}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
