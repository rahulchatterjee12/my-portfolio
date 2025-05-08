import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="animate-spin" style={{ animationDuration: spinDuration }}>
        <div
          style={{
            width: size,
            height: size,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="inline-flex animate-spin [animation-duration:10s]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
