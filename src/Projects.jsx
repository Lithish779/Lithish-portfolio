import { projects } from "./data"; // or "../data" based on your structure

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="mt-3 text-white/60">
          Projects I worked on. Each of them containing its own case study.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.live || "#"}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:scale-[1.01] cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-white/65 leading-relaxed">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-white/60">
              Click to open live project →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
