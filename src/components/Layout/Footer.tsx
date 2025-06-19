export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {[
              { href: "#", label: "LinkedIn" },
              { href: "#", label: "Twitter" },
              { href: "#", label: "GitHub" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.label}</span>
                {/* <ArrowUpRight className="size-4" /> */}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
