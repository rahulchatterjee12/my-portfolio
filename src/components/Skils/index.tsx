"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { frontend, backend, database, devops, utilities } from "./SkillIcons";
import { SectionHeader } from "../common/SectionHeader";

export function Skills() {
  return (
    <>
      <SectionHeader>
        My Skills <br /> and Expertise
      </SectionHeader>
      <div className="px-5 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card>
            <CardSkeletonContainer>
              <Skeleton icons={frontend} />
            </CardSkeletonContainer>
            <CardTitle>Frontend</CardTitle>
            <CardDescription>
              Technologies I use to craft responsive, accessible, and modern
              user interfaces for web applications.
            </CardDescription>
          </Card>

          <Card>
            <CardSkeletonContainer>
              <Skeleton icons={backend} />
            </CardSkeletonContainer>
            <CardTitle>Backend</CardTitle>
            <CardDescription>
              Tools and frameworks I use to build robust, scalable APIs and
              server-side logic.
            </CardDescription>
          </Card>

          <Card>
            <CardSkeletonContainer>
              <Skeleton icons={devops} />
            </CardSkeletonContainer>
            <CardTitle>DevOps</CardTitle>
            <CardDescription>
              Platforms and services I use for continuous integration, automated
              deployments, and project hosting.
            </CardDescription>
          </Card>

          {/* Second row: wrap 2 cards in a centered flexbox */}
          <div className="md:col-span-3 flex flex-col md:flex-row gap-10">
            <Card>
              <CardSkeletonContainer>
                <Skeleton icons={database} />
              </CardSkeletonContainer>
              <CardTitle>Database</CardTitle>
              <CardDescription>
                Databases I work with for storing, retrieving, and managing
                structured and unstructured data.
              </CardDescription>
            </Card>

            <Card>
              <CardSkeletonContainer>
                <Skeleton icons={utilities} />
              </CardSkeletonContainer>
              <CardTitle>Utilities</CardTitle>
              <CardDescription>
                Developer tools and environments I rely on for version control,
                API testing, UI design, and productivity.
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const Skeleton = ({ icons }: { icons: any }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <>
      <div className="p-8 overflow-hidden relative flex items-center justify-center">
        <div className="flex flex-row shrink-0 justify-center items-center gap-2">
          <Container className="h-8 w-8 circle-1">
            <div className="h-4 w-4">
              <img src={icons[0]?.icon} alt={icons[0]?.name} />
            </div>
          </Container>
          <Container className="h-12 w-12 circle-2">
            <div className="h-6 w-6 dark:text-white">
              <img src={icons[1]?.icon} alt={icons[1]?.name} />
            </div>
          </Container>
          <Container className="circle-3">
            <div className="h-8 w-8 dark:text-white">
              <img
                src={icons[2]?.icon}
                alt={icons[2]?.name}
                className="h-full w-full"
              />
            </div>
          </Container>
          <Container className="h-12 w-12 circle-4">
            <div className="h-6 w-6 ">
              <img src={icons[3]?.icon} alt={icons[3]?.name} />
            </div>
          </Container>
          <Container className="h-8 w-8 circle-5">
            <div className="h-4 w-4 ">
              <img src={icons[4]?.icon} alt={icons[4]?.name} />
            </div>
          </Container>
        </div>

        <div className="h-40 w-px absolute -top-5 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles />
          </div>
        </div>
      </div>
    </>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[8rem] md:h-[8rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
