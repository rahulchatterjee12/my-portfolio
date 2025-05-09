import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Runway Technologies",
    year: "2023",
    title: "Runway Tender & Materials",
    results: [
      { title: "Built the frontend from scratch using Next.js" },
      { title: "Implemented state management with Redux" },
      {
        title:
          "Designed a fully responsive UI with Tailwind CSS and Material UI",
      },
    ],
    link: "https://runway.org.in",
    image: "https://i.ibb.co/nsQd26nM/Screenshot-2025-04-21-154340.png",
  },
  {
    company: "Eye Pune",
    year: "2025",
    title: "EyePune Portfolio Website",
    results: [
      { title: "Created the frontend from scratch using Next.js" },
      { title: "Enhanced user experience with modern design principles" },
      { title: "Ensured full responsiveness using Tailwind CSS" },
    ],
    link: "https://eyepune.com",
    image: "https://i.ibb.co/Q7GZPxdr/Screenshot-2025-05-08-161456.png",
  },
  {
    company: "File My Return",
    year: "2025",
    title: "ITR Filing Web Application",
    results: [
      { title: "Developed the frontend from scratch using Next.js" },
      { title: "Utilized Redux for efficient state management" },
      { title: "Designed a fully responsive interface with Tailwind CSS" },
    ],
    link: "https://filemyreturn.co.in/",
    image: "https://i.ibb.co/qY8JkJT2/Screenshot-2025-05-08-160640.png",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div>
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Real-world Results
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
              Featured Projects
            </h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">
              See how i transform concepts into engaging digital expreance.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: `${64 + index * 20}px`,
              }}
            >
              <div className="bg-gray-800 top-0 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:px-20 lg:pt-16 after:pointer-events-none">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${GrainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50 "
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
