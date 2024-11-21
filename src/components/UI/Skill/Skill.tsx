"use client";

import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import Image from "next/image";

const Skill = () => {
  const images = [
    "/skills/icons8-adobe-animate-100.png",
    "/skills/icons8-adobe-premiere-pro-100.png",
    "/skills/icons8-css-100.png",
    "/skills/icons8-html-100.png",
    "/skills/icons8-javascript-100.png",
    "/skills/icons8-nodejs-100.png",
    "/skills/icons8-redux-100.png",
    "/skills/icons8-tailwind-css-100.png",
    "/skills/mongo.png",
    "/skills/nextjs-icon-dark-background.png",
    "/skills/postman.png",
    "/skills/react.png",
  ];
  return (
    <div>
      <div className="text-center mb-16">
        <p className="text-2xl text-blue-500">My Skills</p>
        <h1 className="text-5xl font-bold">Growing Over Times</h1>
      </div>

      <div>
        <div style={{ height: "500px" }}>
          <Marquee velocity={12} resetAfterTries={200} scatterRandomly>
            {images.map((src, index) => (
              <Motion
                key={`child-${index}`}
                initDeg={randomIntFromInterval(0, 360)}
                direction={
                  Math.random() > 0.5 ? "clockwise" : "counterclockwise"
                }
                velocity={10}
                radius={50}
              >
                <Image
                  src={src}
                  alt={`Skill ${index + 1}`}
                  height={100} // Increase size
                  width={100} // Increase size
                  style={{
                    width: "100px", // Ensure consistency
                    height: "100px", // Ensure consistency
                    objectFit: "contain", // 'contain' keeps the aspect ratio
                  }}
                />
              </Motion>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skill;
