import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { socials } from "./data";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,120,0.08),transparent_55%)]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 text-center">
        {/* Profile Image */}
        <div className="relative mt-6">
          <div className="absolute -inset-10 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -inset-3 rounded-full bg-white/10 blur-xl" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/25 bg-white/5">
            <img
              className="h-full w-full object-cover grayscale"
              src="https://media.licdn.com/dms/image/v2/D5603AQGDPUyuMsaMYg/profile-displayphoto-scale_200_200/B56ZtRbQGgKgAY-/0/1766597657598?e=1770854400&v=beta&t=8H_f89Znei0SjMCB6ha26gXWYg5p-xbTn9Y7m1Tqxvw"
              alt="profile"
            />
          </div>
        </div>

        {/* Available badge */}
        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work!
        </div>

        <p className="mt-4 text-sm text-white/60">
          Currently based in <span className="text-white/80">India</span> — open to relocate
        </p>

       <h1 className="mt-10 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
  Hi, I'm <span className="text-pink-500">Lithish</span> — Full-Stack <br className="hidden md:block" />
  Developer specializing in <br className="hidden md:block" />
  MERN & Scalable Web Apps.
</h1>


        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
          I build fast, accessible, and SEO-friendly web applications using React.js,
          Next.js, Tailwind CSS, and modern UI patterns. I enjoy crafting smooth user
          experiences and scalable backend integrations when needed.
        </p>

        {/* Buttons row like screenshot */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get in touch
            <ArrowRight className="transition group-hover:translate-x-1" size={18} />
          </a>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View projects
            <ArrowRight className="transition group-hover:translate-x-1" size={18} />
          </a>

          <a
  href="/Lithish_cv.pdf"
  download
  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
>
  Download CV
</a>


          {/* Social icons */}
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
