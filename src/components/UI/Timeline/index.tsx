import React from "react";
import { Timeline } from "./TimeLine";
import { TimeLineCard } from "./TimelineCard";

export function TimelineDemo() {
  const data = [
    {
      title: "Runway Technologies",
      content: (
        <TimeLineCard>
          <div>
            <p className="mb-2 text-sm font-semibold">Dec 2022 - Present</p>
            <p className="mb-2 text-sm font-semibold flex items-center gap-2">
              Technologies: React.js, Next.js, Redux, Material-UI, Tailwind CSS,
              RESTful API, Figma, Django, MongoDB, Python, Selenium,
              Django-Rest-Framework, Django Template Language, 360 Dialog API
            </p>
            <p className="mb-2 text-sm font-semibold">Software Developer</p>
            <p className="mb-2 text-sm font-semibold">Position: Full-time</p>
            <p className="mb-2 text-sm font-semibold">Work Mode: Hybrid</p>

            <ul className="list-disc pl-5 text-sm">
              <li>
                Led the creation of responsive web applications with React,
                Next.js, Material UI, and Tailwind CSS, implementing Redux for
                efficient state management and seamlessly integrating RESTful
                APIs to enhance functionality and deliver polished user
                experiences.
              </li>
              <li>
                Designed user-friendly UI/UX interfaces for web applications
                using Figma, focusing on intuitive navigation and visually
                appealing layouts to optimize user experience.
              </li>
              <li>
                Conducted web scraping operations to extract government tender
                details utilizing Selenium, demonstrating proficiency in data
                extraction techniques and automation processes.
              </li>
              <li>
                Executed data processing tasks utilizing PyMongo and Pandas in
                Python, facilitating efficient manipulation and analysis of
                large datasets to extract valuable insights and support
                decision-making processes.
              </li>
              <li>
                Spearheaded the integration of a WhatsApp chatbot utilizing
                Python and 360 Dialog API (WhatsApp API service). Innovatively
                developed and implemented a new loan inquiry section within the
                chatbot, enhancing user engagement and functionality.
              </li>
              <li>
                Collaborated on the enhancement of an existing website utilizing
                Django framework and Django template language. Seamlessly
                integrated a feature enabling the download of user data from the
                admin portal using Pandas and PyMongo, optimizing data
                management processes.
              </li>
            </ul>
          </div>
        </TimeLineCard>
      ),
    },
    {
      title: "EyePune",
      content: (
        <TimeLineCard>
          <p className="mb-2 text-sm font-semibold">Aug 2023 - March 2025</p>
          <p className="mb-2 text-sm font-semibold flex items-center gap-2">
            Technologies: Next.JS, React.JS, Wordpress, Wix, Velo(Wix’s language
            to customise the web apps)
          </p>
          <p className="mb-2 text-sm font-semibold">Full-stack Developer</p>
          <p className="mb-2 text-sm font-semibold">Position: Freelancer</p>
          <p className="mb-2 text-sm font-semibold">Work Mode: Remote</p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Developed and optimized responsive web applications using React,
              Next.js, Material UI, and Tailwind CSS. Utilized Redux for
              streamlined state management and integrated RESTful APIs to
              enhance application functionality, ensuring a seamless and
              engaging user experience.
            </li>
            <li>
              Additionally, I have enhanced and redesigned WordPress websites to
              align with client specifications, improving both aesthetics and
              functionality to deliver a seamless user experience.
            </li>
            <li>
              Streamlined performance of the official website using Wix
              platform, enhancing loading times and functionality. Utilized Wix
              Code Editor to implement custom logic for dynamic banner
              shuffling, improving user engagement.
            </li>
            <li>
              Conducted training sessions for website designers, equipping them
              with the skills to proficiently utilize Wix and Wix Studio,
              ensuring efficient website creation and management.
            </li>
          </ul>
        </TimeLineCard>
      ),
    },
    {
      title: "React Developer",
      content: (
        <TimeLineCard>
          <p className="mb-2 text-sm font-semibold">Sep 2023 - Oct 2023</p>
          <p className="mb-2 text-sm font-semibold flex items-center gap-2">
            Technologies: React.js, Matirial UI, Taildwind CSS, HTML, JS, CSS,
            PHP, Node.js
          </p>
          <p className="mb-2 text-sm font-semibold">
            Role: Component Developer
          </p>
          <p className="mb-2 text-sm font-semibold">Position: Internship</p>
          <p className="mb-2 text-sm font-semibold">Work Mode: Remote</p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Orchestrated creation of responsive designs in React JS, adapting
              Figma, PSD, and client imagery. Customized website appearances to
              align with client preferences.
            </li>
            <li>
              Converted non-responsive websites into dynamic web applications
              using React JS, HTML, CSS, and JavaScript, optimizing user
              interface responsiveness.
            </li>
            <li>
              Developed a client's portfolio website using Next JS, integrating
              advanced features to showcase their work effectively and enhance
              online presence.
            </li>
          </ul>
        </TimeLineCard>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
