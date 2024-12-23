"use client";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="px-8 md:px-16 lg:px-24 mb-20">
      <div className="text-center mb-16">
        <p className="text-2xl text-secondary uppercase">Contact me</p>
        <h1 className="text-5xl font-bold">Let’s Start A New Conversation</h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-8 justify-between">
        <div>
          <ul>
            <li className="flex items-center gap-7">
              <div className="bg-secondary p-5 rounded-full">
                <FaLocationDot fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Location</p>
                <p className="text-xl text-slate-500">Barishal, Bangladesh</p>
              </div>
            </li>

            <li className="flex items-center gap-7 my-7">
              <div className="bg-secondary p-5 rounded-full">
                <FaPhone fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Phone</p>
                <p className="text-xl text-slate-500">+88 01704951688</p>
              </div>
            </li>

            <li className="flex items-center gap-7">
              <div className="bg-secondary p-5 rounded-full">
                <MdEmail fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Email</p>
                <p className="text-xl text-slate-500 truncate">
                  abdullahalomar048@gmail.com
                </p>
              </div>
            </li>
          </ul>
        </div>
        <form className="form-control">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info input-lg "
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-info input-lg "
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered input-info input-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-info input-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>

          <textarea
            className="textarea textarea-info textarea-lg w-full"
            placeholder="Start writing message here"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></textarea>
          {/* data-aos="fade-up" data-aos-duration="3000" */}
          <div className="mt-3">
            <div className="bg-primary  w-full pb-1.5 rounded-md">
              <button className="px-14 py-3 rounded-md uppercase text-white bg-secondary hover:bg-primary transition duration-300 w-full">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
