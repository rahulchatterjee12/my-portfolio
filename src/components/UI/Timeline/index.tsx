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
            <div className="mb-6">
              <p className="text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Software Developer
              </p>
              <p className="text-sm text-gray-500">Dec 2022 - Present</p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Hybrid
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  Project Leadership:
                </span>{" "}
                Led the creation of responsive web applications using React,
                Next.js, Material UI, and Tailwind CSS, implementing Redux and
                integrating RESTful APIs for enhanced functionality.
              </li>
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  UI/UX Design:
                </span>{" "}
                Designed user-friendly interfaces using Figma, focusing on
                intuitive navigation and visually appealing layouts.
              </li>
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  Data Extraction:
                </span>{" "}
                Conducted web scraping operations using Selenium, extracting
                valuable data from government tenders.
              </li>
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  Data Analysis:
                </span>{" "}
                Processed data using PyMongo and Pandas, enabling comprehensive
                data analysis to support strategic decision-making.
              </li>
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  Chatbot Development:
                </span>{" "}
                Developed a WhatsApp chatbot using Python and 360 Dialog API,
                implementing a loan inquiry feature to increase engagement.
              </li>
              <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
                <span className="font-semibold text-emerald-300">
                  Backend Integration:
                </span>{" "}
                Enhanced a Django-based website by integrating a data download
                feature using Pandas and PyMongo.
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
          <div className="mb-6">
            <p className="text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              Frontend Developer
            </p>
            <p className="text-sm text-gray-500">Dec 2022 - Present</p>
            <div className="flex items-center mt-2 space-x-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Full-time
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                Hybrid
              </span>
            </div>
          </div>
          <ul className="space-y-4 text-slate-300">
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Project Leadership:
              </span>
              Led the creation of responsive web applications using React,
              Next.js, Material UI, and Tailwind CSS, implementing Redux and
              integrating RESTful APIs for enhanced functionality.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                UI/UX Design:
              </span>{" "}
              Designed user-friendly interfaces using Figma, focusing on
              intuitive navigation and visually appealing layouts.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Data Extraction:
              </span>{" "}
              Conducted web scraping operations using Selenium, extracting
              valuable data from government tenders.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Data Analysis:
              </span>{" "}
              Processed data using PyMongo and Pandas, enabling comprehensive
              data analysis to support strategic decision-making.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Chatbot Development:
              </span>{" "}
              Developed a WhatsApp chatbot using Python and 360 Dialog API,
              implementing a loan inquiry feature to increase engagement.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Backend Integration:
              </span>{" "}
              Enhanced a Django-based website by integrating a data download
              feature using Pandas and PyMongo.
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
          <div className="mb-6">
            <p className="text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              React Developer
            </p>
            <p className="text-sm text-gray-500">Sep 2023 - Oct 2023</p>
            <div className="flex items-center mt-2 space-x-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Internship
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                Remote
              </span>
            </div>
          </div>
          <ul className="space-y-4 text-slate-300">
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Responsive Design:
              </span>{" "}
              Orchestrated the creation of responsive designs in React.js,
              adapting Figma, PSD, and client imagery to customize website
              appearances and align with client preferences.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Dynamic Web Development:
              </span>{" "}
              Converted non-responsive websites into dynamic web applications
              using React.js, HTML, CSS, and JavaScript, optimizing user
              interface responsiveness.
            </li>
            <li className="p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg hover:bg-opacity-40 transition">
              <span className="font-semibold text-emerald-300">
                Portfolio Development:
              </span>{" "}
              Developed a client’s portfolio website using Next.js, integrating
              advanced features to showcase their work and enhance their online
              presence.
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
