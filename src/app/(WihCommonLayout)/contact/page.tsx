import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 mb-20">
      <div className="text-center mb-16">
        <p className="text-2xl text-blue-500 uppercase">Contact me</p>
        <h1 className="text-5xl font-bold">Let’s Start A New Conversation</h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-8 justify-between">
        <div>
          <ul>
            <li className="flex items-center gap-7">
              <div className="bg-blue-400 p-5 rounded-full">
                <FaLocationDot fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Location</p>
                <p className="text-xl text-slate-500">Barishal, Bangladesh</p>
              </div>
            </li>

            <li className="flex items-center gap-7 my-7">
              <div className="bg-blue-400 p-5 rounded-full">
                <FaPhone fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Phone</p>
                <p className="text-xl text-slate-500">+88 01704951688</p>
              </div>
            </li>

            <li className="flex items-center gap-7">
              <div className="bg-blue-400 p-5 rounded-full">
                <MdEmail fontSize={25} color="white" />
              </div>
              <div>
                <p className="font-bold text-xl">Email</p>
                <p className="text-xl text-slate-500">
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
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-info input-lg "
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered input-info input-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-info input-lg"
            />
          </div>

          <textarea
            className="textarea textarea-info textarea-lg w-full"
            placeholder="Start writing message here"
          ></textarea>
          <button className="btn bg-blue-400 hover:bg-blue-500 text-lg text-white mt-4">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
