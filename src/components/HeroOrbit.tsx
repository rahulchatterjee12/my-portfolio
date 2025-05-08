import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className=""
        style={{
          width: size,
          height: size,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="inline-flex">{children}</div>
      </div>
    </div>
  );
};

export default HeroOrbit;
