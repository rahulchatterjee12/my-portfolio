import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const words = [
    "Performant",
    "Scalable",
    "Reliable",
    "Secure",
    "Fast",
    "Efficient",
    "Flexible",
    "Robust",
    "Innovative",
    "User-friendly",
    "Intuitive",
    "Seamless",
    "Responsive",
  ];
  return (
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transprent)]">
            <div className="flex flex-none gap-4 py-3">
              {words.map((word, index) => (
                <div key={index} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
