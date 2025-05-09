import React from "react";
import { Timeline } from "./TimeLine";
import { TimeLineCard } from "./TimelineCard";
import { AnimatedTooltip } from "./Tooltip";

export function TimelineDemo() {
  const data = [
    {
      title: "Runway Technologies",
      content: (
        <TimeLineCard>
          <div>
            <p className="mb-2 text-sm font-semibold">Dec 2022 - Present</p>
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
            <div className="flex flex-row items-center justify-start mt-5 mb-5 w-full">
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: "Reach.js",
                    designation: "",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
                  },
                  {
                    id: 2,
                    name: "Next.js",
                    designation: "",
                    image:
                      "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
                  },
                  {
                    id: 3,
                    name: "Redux",
                    designation: "",
                    image:
                      "https://miro.medium.com/v2/resize:fit:1000/1*wQ5SsWOSoTFRjlnFYXPOiA.png",
                  },
                  {
                    id: 4,
                    name: "Figma",
                    designation: "",
                    image:
                      "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
                  },
                  {
                    id: 5,
                    name: "Django",
                    designation: "",
                    image:
                      "https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo.png",
                  },
                  {
                    id: 6,
                    name: "MongoDB",
                    designation: "",
                    image:
                      "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
                  },
                  {
                    id: 7,
                    name: "Python",
                    designation: "",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png",
                  },
                ]}
              />
            </div>
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
            Technologies: Next.JS, React.JS, Wordpress, Wix
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
          <div className="flex flex-row items-center justify-start mt-5 mb-5 w-full">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: "Reach.js",
                  designation: "",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
                },
                {
                  id: 2,
                  name: "Next.js",
                  designation: "",
                  image:
                    "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
                },
                {
                  id: 3,
                  name: "Redux",
                  designation: "",
                  image:
                    "https://miro.medium.com/v2/resize:fit:1000/1*wQ5SsWOSoTFRjlnFYXPOiA.png",
                },
                {
                  id: 4,
                  name: "Figma",
                  designation: "",
                  image:
                    "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
                },
                {
                  id: 5,
                  name: "Wix",
                  designation: "",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfh0x-QRbuLf6_iZoZxN61dcCANaDe7GIpw&s",
                },
                {
                  id: 6,
                  name: "Wordpress",
                  designation: "",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBAeNRyaVHnyq6zUmQeNset_p6u5o511LIw&s",
                },
              ]}
            />
          </div>
        </TimeLineCard>
      ),
    },
    {
      title: "Ebug Technology",
      content: (
        <TimeLineCard>
          <p className="mb-2 text-sm font-semibold">Sep 2023 - Oct 2023</p>
          <p className="mb-2 text-sm font-semibold flex items-center gap-2">
            Technologies: React.js, PHP, Node.js
          </p>
          <p className="mb-2 text-sm font-semibold">Role: React Developer</p>
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
              Developed a client&apos;s portfolio website using Next JS,
              integrating advanced features to showcase their work effectively
              and enhance online presence.
            </li>
          </ul>
          <div className="flex flex-row items-center justify-start mt-5 mb-5 w-full">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: "Reach.js",
                  designation: "",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
                },
                {
                  id: 2,
                  name: "Node.js",
                  designation: "",
                  image:
                    "https://www.hashtechy.com/assets/icon/hire-developers/hire-js-developer/node_logo.svg",
                },
                {
                  id: 3,
                  name: "PHP",
                  designation: "",
                  image: "https://www.cdnlogo.com/logos/p/79/php.svg",
                },
              ]}
            />
          </div>
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
