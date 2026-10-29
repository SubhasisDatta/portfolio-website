"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

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
    <section id="contact" className="py-20 bg-[#0c0d0e]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-sm text-[#a1a1aa] mb-12">
          Open to federal executive advisory, program leadership, and technical collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          {/* Direct Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] font-semibold mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base font-mono text-emerald-400 hover:underline"
              >
                {personal.email}
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] font-semibold mb-1">
                Location
              </div>
              <p className="text-sm text-white">
                {personal.location}
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] font-semibold mb-1">
                Profiles
              </div>
              <div className="flex flex-col gap-2 text-sm text-white">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  LinkedIn Profile →
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  GitHub Profile →
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  X / Twitter Profile →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 p-6 rounded-lg bg-[#141517] border border-[#27272a]">
            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <h3 className="text-base font-semibold text-white">Message Ready</h3>
                <p className="text-xs text-[#a1a1aa]">
                  Your mail app was opened to send this directly to {personal.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-emerald-400 hover:underline pt-4 block mx-auto"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#a1a1aa] mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded bg-[#0c0d0e] border border-[#27272a] text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#a1a1aa] mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@agency.gov"
                      className="w-full px-3 py-2 rounded bg-[#0c0d0e] border border-[#27272a] text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#a1a1aa] mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Program Advisory / Technical Leadership"
                    className="w-full px-3 py-2 rounded bg-[#0c0d0e] border border-[#27272a] text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#a1a1aa] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your agency or program needs..."
                    className="w-full px-3 py-2 rounded bg-[#0c0d0e] border border-[#27272a] text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
