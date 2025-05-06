import Image from "next/image";
import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import GrainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
            backgroundSize: "cover",
            filter: "blur(8px)",
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        {[
          { size: 800, iconSize: 28, rotation: -72 },
          { size: 550, iconSize: 12, rotation: 20 },
          { size: 590, iconSize: 8, rotation: 98 },
          { size: 430, iconSize: 8, rotation: -14 },
          { size: 530, iconSize: 10, rotation: 178 },
          { size: 710, iconSize: 14, rotation: 144 },
          { size: 440, iconSize: 5, rotation: 79 },
          { size: 720, iconSize: 3, rotation: 85 },
          { size: 590, iconSize: 2, rotation: -41 },
          { size: 650, iconSize: 2, rotation: -5 },
        ].map((star, index) => (
          <HeroOrbit key={index} size={star.size} rotation={star.rotation}>
            <StarIcon className={`text-emerald-500 size-${star.iconSize}`} />
          </HeroOrbit>
        ))}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[100px]" />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center mt-3 gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Avalaval For New Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building exptational User Expreances
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I Spacialize in trsnsforming desings into functional,
            high-performing web application. Let's discuess your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
