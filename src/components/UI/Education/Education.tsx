"use client";
import Image from "next/image";
import education from "@/assets/img/low-angle-stacked-books-graduation-cap-ladders-education-day.jpg";
import { PiGraduationCap } from "react-icons/pi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-10 px-8 md:px-16 lg:px-24">
      <div>
        <div className="mb-8 max-w-[800px]">
          <p className="text-2xl text-secondary uppercase mb-2">Education</p>
          <h1 className="text-5xl font-semibold">My Education</h1>
          <p className="text-md py-8">
            Pursuing a degree in Computer Science and Engineering, honing skills
            in programming, software development, and cutting-edge technologies.
            Passionate about learning and growing in the tech industry.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 group">
            {/* Icon */}
            <div className="p-3 bg-secondary rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-primary"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">B.Sc. Engineering</h2>
              <div className="flex gap-2">
                <p className="font-bold">
                  University of Global Village, Barishal
                </p>
                <p className="text-gray-500">(2022-2025)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 my-16 group">
            {/* Icon */}
            <div className="p-3 bg-secondary rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-primary"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">Diploma Engineering</h2>
              <div className="flex gap-2">
                <p className="font-bold">
                  Barisal Polytechnic Institute, Barishal
                </p>
                <p className="text-gray-500">(2018-2021)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            {/* Icon */}
            <div className="p-3 bg-secondary rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-primary"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">
                Secondary School Certificate (S.S.C)
              </h2>
              <div className="flex gap-2">
                <p className="font-bold">Bhandaria Bihari Pilot High School</p>
                <p className="text-gray-500">(2016-2017)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      > */}
      <Image
        className="rounded-xl max-h-[730px]"
        data-aos="zoom-in-down"
        src={education}
        height={730}
        width={635}
        alt="education"
      />
      {/* </div> */}
    </div>
  );
};

export default Education;
