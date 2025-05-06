import Card from "@/components/Card";
import StarIcon from "../assets/icons/star.svg";
export const AboutSection = () => {
  return (
    <div>
      <div className="">
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
      </div>
    </div>
  );
};
