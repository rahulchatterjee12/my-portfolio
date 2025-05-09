export const Header = () => {
  return (
    <div className="flex justify-center items-center z-10 sticky top-10">
      <div className="relative">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            About
          </a>
          <a
            href="#"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
