import Card from "@/components/Card";
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "../assets/icons/square-js.svg";
import MapImage from "../assets/images/map.png";
import smileMemoji from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolBoxItems1 = [
  {
    title: "React",
    icon: JavaScriptIcon,
  },
  {
    title: "Next.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Tailwind CSS",
    icon: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    icon: JavaScriptIcon,
  },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "Node.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Python",
    icon: JavaScriptIcon,
  },
];

const toolBoxItems2 = [
  {
    title: "Python",
    icon: JavaScriptIcon,
  },
  {
    title: "Node.js",
    icon: JavaScriptIcon,
  },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    icon: JavaScriptIcon,
  },
  {
    title: "Tailwind CSS",
    icon: JavaScriptIcon,
  },
  {
    title: "Next.js",
    icon: JavaScriptIcon,
  },
  {
    title: "React",
    icon: JavaScriptIcon,
  },
];

const hobies = [
  {
    title: "Painting",
    emoji: "",
    left: "5%",
    top: "5%",
  },
  {
    title: "PhotoGraphy",
    emoji: "",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            About Me
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            A Glimpse Into My Journey
          </h2>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">
            Learn more about who I am, what I do, and what inspires me.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the Books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="Book Cover" className="" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the Toolbox."
                className="px-6 pt-6"
              />
              <ToolboxItems
                items={toolBoxItems1}
                className="mt-6"
                itemWraperClassName="move-left"
              />
              <ToolboxItems
                items={toolBoxItems2}
                className="mt-6"
                itemWraperClassName="move-right"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="My Hobies"
                description="Explore the Books shaping my perspectives."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobies.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: item.left, top: item.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={MapImage}
                alt="Map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:contents-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2  after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="Smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
