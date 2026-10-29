"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end simulation / mailto trigger
    window.location.href = `mailto:${personal.email}?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            Get In Touch
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let&apos;s Build Something Together
          </p>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Direct Info */}
          <div className="md:col-span-2 space-y-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <h3 className="text-base font-semibold text-white">Contact Info</h3>
            
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-zinc-800 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personal.email}</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-lg bg-zinc-800 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-400">
                Prefer email? Click above or send an email directly anytime.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-semibold text-white">Message Ready!</h4>
                <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                  Your email client has been opened with your message. Thank you for reaching out!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-indigo-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
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
                    placeholder="ada@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
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
                    placeholder="Hello Subhasis, let's talk about..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
