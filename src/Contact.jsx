import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_knxoqst",     // ✅ replace
        "template_44h1ubc",    // ✅ replace
        formRef.current,
        "_m6wfGKJvqvdCvVd8"      // ✅ replace
      );

      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      setStatus("❌ Failed to send message. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="mt-3 text-white/60">
          Please contact me directly at{" "}
          <a
            className="text-white underline underline-offset-4"
            href="mailto:lithishkumar779@gmail.com"
          >
            lithishkumar779@gmail.com
          </a>{" "}
          or through this form.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold">Name</label>
            <input
              name="from_name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Email</label>
            <input
              name="from_email"
              type="email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
              placeholder="hello@gmail.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Message</label>
            <textarea
              name="message"
              required
              className="h-56 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
              placeholder="Hello! What's up?"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-10 py-3 text-sm font-semibold text-black hover:bg-white/90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </div>

          {status && (
            <p className="text-center text-sm text-white/70">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
