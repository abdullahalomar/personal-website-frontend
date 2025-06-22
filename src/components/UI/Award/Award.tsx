"use client";
import coursera from "@/assets/icons/coursera-wordmark-blue.svg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import scout from "@/assets/img/scout.png";

const Award = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="px-8 md:px-16 lg:px-24 pb-28 md:pb-8 lg:8">
      <div>
        <div className="text-center mb-12">
          <p className="text-2xl text-secondary uppercase">Success Stories</p>
          <h1 className="text-5xl font-bold">Certificates & Achievements</h1>
        </div>
        <div className="">
          <div className="divider"></div>

          <div className="rounded-box grid" data-aos="flip-up">
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center md:justify-between ">
              <div>
                <Image src={scout} height={100} width={100} alt="" />
              </div>
              <div>
                <p className="text-2xl font-bold">Rover Scout</p>
                <p className="text-gray-400 text-xl">2019</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Scout</p>
                <p className="text-gray-400 text-xl">Barishal, Bangladesh</p>
              </div>
              <p>
                This recognition inspires me to continue making a positive
                impact.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* <div className="rounded-box grid" data-aos="flip-up">
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-baseline">
              <div>
                <Image src={coursera} height={100} width={100} alt="" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  Coursera how to create a jira project
                </p>
                <p className="text-gray-400 text-xl">2021</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Dev Internatioal</p>
                <p className="text-gray-400 text-xl">London, England</p>
              </div>
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolore.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="divider"></div> */}

          {/* <div className="card rounded-box grid h-20" data-aos="flip-up">
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-baseline">
              <div>
                <Image src={coursera} height={100} width={100} alt="" />
              </div>
              <div>
                <p className="text-2xl font-bold">Developer of the Year</p>
                <p className="text-gray-400 text-xl">2021</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Dev Internatioal</p>
                <p className="text-gray-400 text-xl">London, England</p>
              </div>
              <div>
                <p className="text-md">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolore.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Award;
