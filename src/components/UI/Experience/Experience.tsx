"use client";
import web from "@/assets/icons/web-design.gif";
import video from "@/assets/icons/video-editing.gif";
import graphic from "@/assets/icons/graphics-digital.gif";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const webDesign = "Web Design";
  const videoEditing = "Video Editing";
  const GraphicsDesign = "Graphic Design";

  return (
    <div className="my-28">
      <div className="bg-[#25262F] py-20 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between gap-6">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mb-8 text-center md:text-start"
        >
          <p className="text-2xl text-secondary uppercase mb-2">Experience</p>
          <h1 className="text-5xl font-semibold text-white">
            I have worked <br />
            in these sectors
          </h1>
          <p className="text-lg pt-6 text-white">
            The technologies/sectors I know and have worked on are displayed
            here
          </p>
        </div>
        <div className="flex flex-wrap basis-1/2 justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-5">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card flex-row gap-3 w-80 h-32 p-5 ring-1 rounded-lg ring-secondary"
          >
            <figure className="rounded-lg">
              <Image src={web} height={80} width={80} alt="web-design" />
            </figure>
            <div className="">
              <h2 className="text-2xl text-white">
                Web Design
                {/* {`${webDesign.substring(0, 10)}`}
                {webDesign.length > 10 && "..."} */}
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card flex-row gap-3 w-80 h-32 p-5 ring-1 rounded-lg ring-secondary"
          >
            <figure className="rounded-lg">
              <Image src={video} height={80} width={80} alt="web-design" />
            </figure>
            <div className="">
              <h2 className="text-2xl text-white">
                Video Editing
                {/* {`${videoEditing.substring(0, 10)}`}
                {videoEditing.length > 10 && "..."} */}
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card flex-row gap-3 w-80 h-32 p-5 ring-1 rounded-lg ring-secondary"
          >
            <figure className="rounded-lg">
              <Image src={graphic} height={80} width={80} alt="web-design" />
            </figure>
            <div className="">
              <h2 className="text-2xl text-white">
                Graphic Design
                {/* {`${GraphicsDesign.substring(0, 10)}`}
                {GraphicsDesign.length > 10 && "..."} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
