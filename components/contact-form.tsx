"use client";

import { useState } from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "individual",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    success: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      error: false,
      success: false,
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2a48a7d2-e0b1-4dd3-b0b3-a3feeb1d2be6",
          ...formData,
        }),
      });

      const json = await response.json();
      if (json.success) {
        setStatus({
          submitted: true,
          submitting: false,
          error: false,
          success: true,
        });
        setFormData({
          name: "",
          email: "",
          organization: "",
          interest: "individual",
          message: "",
        });
      }
    } catch (err) {
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        success: false,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative mt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 dark:text-white mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-800 mb-8 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-stone-100 dark:border-stone-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2"
              >
                Organization (Optional)
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2"
              >
                I am interested as
              </label>
              <select
                name="interest"
                id="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200"
              >
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200"
                placeholder="Your message..."
              />
            </div>

            <div className="flex items-center justify-end pt-4">
              <button type="submit" disabled={status.submitting}>
                <InteractiveHoverButton>
                  {status.submitting ? "Sending..." : "Send Message"}
                </InteractiveHoverButton>
              </button>
            </div>

            {status.error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-center">
                Something went wrong. Please try again later.
              </div>
            )}

            {status.success && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
