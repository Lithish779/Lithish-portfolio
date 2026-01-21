export default function Navbar() {
  const items = ["Home", "About", "Experience", "Projects", "Testimonials", "Contact"];

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl">
        <ul className="flex flex-wrap items-center gap-2 text-sm text-white/70">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 transition hover:text-white hover:bg-white/10"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
