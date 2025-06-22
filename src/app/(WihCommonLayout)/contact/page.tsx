"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4vw8p8u", // 🔁 Replace with your EmailJS Service ID
        "template_i1whtgm", // 🔁 Replace with your EmailJS Template ID
        form.current,
        "-DOpS8toWPWZ0l9tn" // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="px-8 md:px-16 lg:px-24 mb-20">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="text-center mb-16">
        <p className="text-2xl text-secondary uppercase">Contact me</p>
        <h1 className="text-5xl font-bold">Let’s Start A New Conversation</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* Contact Info */}
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

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-control w-full max-w-2xl"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="input input-bordered input-info input-lg"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="input input-bordered input-info input-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered input-info input-lg"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered input-info input-lg"
            />
          </div>

          <textarea
            name="message"
            required
            className="textarea textarea-info textarea-lg w-full mb-4"
            placeholder="Start writing message here..."
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`px-14 py-3 rounded-md uppercase text-white bg-secondary hover:bg-primary transition duration-300 w-full flex justify-center items-center gap-3`}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-md"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

// ------------------------------------------

// "use client";

// import { useRef, useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import { FaPhone, FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const ContactPage = () => {
//   const form = useRef();
//   const [sent, setSent] = useState(false);

//   useEffect(() => {
//     Aos.init();
//   }, []);

//   const sendEmail = (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_4vw8p8u", // ⬅️ এখানে তোমার EmailJS Service ID বসাও
//         "template_i1whtgm", // ⬅️ Template ID বসাও
//         form.current,
//         "-DOpS8toWPWZ0l9tn" // ⬅️ Public Key বসাও
//       )
//       .then(
//         (result: any) => {
//           setSent(true);
//           form.current.reset();
//           setTimeout(() => setSent(false), 4000);
//         },
//         (error: any) => {
//           alert("❌ Message failed to send.");
//         }
//       );
//   };

//   return (
//     <div className="px-8 md:px-16 lg:px-24 mb-20">
//       <div className="text-center mb-16">
//         <p className="text-2xl text-secondary uppercase">Contact me</p>
//         <h1 className="text-5xl font-bold">Let’s Start A New Conversation</h1>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 justify-between">
//         {/* Contact Info */}
//         <div>
//           <ul>
//             <li className="flex items-center gap-7">
//               <div className="bg-secondary p-5 rounded-full">
//                 <FaLocationDot fontSize={25} color="white" />
//               </div>
//               <div>
//                 <p className="font-bold text-xl">Location</p>
//                 <p className="text-xl text-slate-500">Barishal, Bangladesh</p>
//               </div>
//             </li>

//             <li className="flex items-center gap-7 my-7">
//               <div className="bg-secondary p-5 rounded-full">
//                 <FaPhone fontSize={25} color="white" />
//               </div>
//               <div>
//                 <p className="font-bold text-xl">Phone</p>
//                 <p className="text-xl text-slate-500">+88 01704951688</p>
//               </div>
//             </li>

//             <li className="flex items-center gap-7">
//               <div className="bg-secondary p-5 rounded-full">
//                 <MdEmail fontSize={25} color="white" />
//               </div>
//               <div>
//                 <p className="font-bold text-xl">Email</p>
//                 <p className="text-xl text-slate-500 truncate">
//                   abdullahalomar048@gmail.com
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Form */}
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="form-control w-full max-w-2xl"
//         >
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Name"
//               required
//               className="input input-bordered input-info input-lg"
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Email"
//               required
//               className="input input-bordered input-info input-lg"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               className="input input-bordered input-info input-lg"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="input input-bordered input-info input-lg"
//             />
//           </div>

//           <textarea
//             name="message"
//             required
//             className="textarea textarea-info textarea-lg w-full mb-4"
//             placeholder="Start writing message here..."
//           ></textarea>

//           <button
//             type="submit"
//             className="px-14 py-3 rounded-md uppercase text-white bg-secondary hover:bg-primary transition duration-300 w-full"
//           >
//             Send Message
//           </button>

//           {sent && (
//             <p className="text-green-600 mt-4 font-semibold text-center">
//               ✅ Message sent successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
