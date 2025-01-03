"use client";
import Image from "next/image";
import dedication from "@/assets/icons/dedication.png";
import smart from "@/assets/icons/smart-work.png";
import collaboration from "@/assets/icons/Collaboration.png";
import technology from "@/assets/icons/technology.png";

const Passion = () => {
  return (
    <>
      <div className="py-16 w-full px-8 md:px-16 lg:px-24 bg-[#E2ECF6] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="card bg-base-100 shadow-xl flex flex-col items-center hover:translate-x-4 hover:scale-100 hover:duration-700 hover:ease-out">
            <div className="card-body text-center">
              <Image
                src={dedication}
                height={100}
                width={100}
                alt="dedication icon"
              />
              <h2 className="card-title text-2xl my-3">Dedication</h2>
              <p className="text-xl text-start text-gray-500">
                Committed to continuous learning and excellence, I bring
                unwavering focus and determination to every project I undertake.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl flex flex-col items-center hover:translate-x-4 hover:scale-100 hover:duration-700 hover:ease-out">
            <div className="card-body text-center">
              <Image
                src={smart}
                height={100}
                width={100}
                alt="smart work icon"
              />
              <h2 className="card-title text-2xl my-3">Smart Work</h2>
              <p className="text-xl text-start text-gray-500">
                I believe in working efficiently by leveraging innovative
                strategies and tools to deliver high-quality results.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl flex flex-col items-center hover:translate-x-4 hover:scale-100 hover:duration-700 hover:ease-out">
            <div className="card-body text-center">
              <Image
                src={collaboration}
                height={100}
                width={100}
                alt="collaboration icon"
              />
              <h2 className="card-title text-2xl my-3">Collaboration</h2>
              <p className="text-xl text-start text-gray-500">
                A team player at heart, I thrive on building strong connections
                and working together to achieve shared goals.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl flex flex-col items-center hover:translate-x-4 hover:scale-100 hover:duration-700 hover:ease-out">
            <div className="card-body text-center">
              <Image
                src={technology}
                height={100}
                width={100}
                alt="technology icon"
              />
              <h2 className="card-title text-2xl my-3">Technology</h2>
              <p className="text-xl text-start text-gray-500">
                Passionate about exploring and utilizing cutting-edge
                technologies to create impactful solutions for real-world
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passion;
