import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "./data";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="testimonials" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-3 text-white/60">
          Get answers to common questions about my services and expertise
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl px-4">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={f.q} className="border-b border-white/10 py-6">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between text-left text-xl font-semibold"
              >
                {f.q}
                <ChevronDown
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              {isOpen && (
                <p className="mt-4 text-white/65 leading-relaxed">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
