export default function TechMarquee() {
const tech = [
    "⚛️ React",
    "🧩 Next.js",
    "🟩 Node.js",
    "⚡ Vite",
    "🧠 Express",
    "🍃 MongoDB",
    "🐬 MySQL",
    "🎨 Tailwind",
];

return (
    <section className="bg-black py-10">
        <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    .marquee {
                        animation: marquee 20s linear infinite;
                    }
                `}</style>
                <div className="overflow-hidden">
                    <div className="marquee flex gap-6 text-white/80 whitespace-nowrap">
                        {[...tech, ...tech].map((t, i) => (
                            <div key={i} className="text-xl opacity-80 hover:opacity-100 transition ">
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

  
  );
}
