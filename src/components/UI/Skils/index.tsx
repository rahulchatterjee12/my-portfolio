import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import React from "react";
import JavaScriptIcon from "../../../assets/icons/square-js.svg";
import ToolboxItems from "@/components/ToolboxItems";

const toolBoxItems1 = [
  {
    title: "Node.js",
    icon: JavaScriptIcon,
  },
  {
    title: "MongoDB",
    icon: JavaScriptIcon,
  },
  {
    title: "Redux",
    icon: JavaScriptIcon,
  },

  {
    title: "Wix",
    icon: JavaScriptIcon,
  },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "React.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Python",
    icon: JavaScriptIcon,
  },
  {
    title: "Figma",
    icon: JavaScriptIcon,
  },
  {
    title: "Selenium",
    icon: JavaScriptIcon,
  },
  {
    title: "Django",
    icon: JavaScriptIcon,
  },
  {
    title: "Next.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Web Scraping",
    icon: JavaScriptIcon,
  },
];

const toolBoxItems2 = [
  {
    title: "React.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Next.js",
    icon: JavaScriptIcon,
  },
  {
    title: "Redux",
    icon: JavaScriptIcon,
  },
  {
    title: "Figma",
    icon: JavaScriptIcon,
  },
  {
    title: "Django",
    icon: JavaScriptIcon,
  },
  {
    title: "MongoDB",
    icon: JavaScriptIcon,
  },
  {
    title: "Python",
    icon: JavaScriptIcon,
  },
  {
    title: "Wix",
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
    title: "Web Scraping",
    icon: JavaScriptIcon,
  },

  {
    title: "UI/UX Design",
    icon: JavaScriptIcon,
  },
];
const Skills = () => {
  return (
    <div className="container">
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
  );
};

export default Skills;
