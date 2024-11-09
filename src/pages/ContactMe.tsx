import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Basic validation
    if (!name || !email || !message) {
      setFormStatus("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (you can replace this with actual API calls)
    setTimeout(() => {
      setFormStatus("Thank you for your message! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-200">
      <Header />
      <main className="flex-grow flex flex-col items-center p-8">
        <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Contact Me
          </h1>
          <p className="mb-6 text-gray-300 text-sm sm:text-base">
            If you have any questions or want to get in touch, feel free to
            drop a message below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows={5}
              />
            </div>

            {formStatus && (
              <div
                className={`mt-4 p-3 rounded-lg text-white ${
                  formStatus.includes("Thank you") ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {formStatus}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-600"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactMe;
