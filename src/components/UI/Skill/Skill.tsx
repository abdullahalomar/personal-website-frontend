"use client";

import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
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
      <div>
        <div style={{ height: "500px" }}>
          <Marquee
            velocity={12}
            minScale={0.7}
            resetAfterTries={200}
            scatterRandomly
          >
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
                  height={10}
                  width={10}
                  style={{
                    width: "50px",
                    height: "50px",
                    // borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Motion>
            ))}
          </Marquee>
        </div>
      </div>
      ;
    </div>
  );
};

export default Skill;
