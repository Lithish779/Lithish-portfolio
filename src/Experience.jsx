import { Briefcase, CalendarDays } from "lucide-react";
import { experience } from "./data"; // ✅ if data.js is in src/

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl font-bold">My Experience</h2>
        <p className="mt-3 text-white/60">
          Professional experience that I have accumulated over several years.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl px-4">
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full  bg-white/10" />

          {experience.map((job, idx) => (
            <div key={idx} className="relative mb-14">
              {/* Node */}
              <div className="absolute  top-2 h-4 w-4 rounded-full border-2 border-white/40 bg-black" />

              {/* Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3 text-white/85">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40">
                    <Briefcase size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                </div>

                <h4 className="mt-4 text-2xl font-semibold">{job.role}</h4>

                <div className="mt-2 flex items-center gap-2 text-white/60">
                  <CalendarDays size={16} />
                  <span>{job.date}</span>
                </div>

                <p className="mt-4 text-white/65 leading-relaxed">{job.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
