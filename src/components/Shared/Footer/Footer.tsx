// "use client";

// import Link from "next/link";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="footer footer-center md:footer lg:footer xl:footer py-20 md:p-28 lg:p-28 xl:p-28">
//       <nav>
//         <div>
//           <h1 className="text-3xl font-semibold">Abdullah Al Omar</h1>
//           <p className="text-lg mt-5">
//             All right reserved © {new Date().getFullYear()}
//           </p>
//         </div>
//       </nav>
//       <nav>
//         <form>
//           <h1 className="text-3xl font-semibold mb-5">Newsletter</h1>
//           <fieldset className="form-control ">
//             <div className="join">
//               <input
//                 type="text"
//                 placeholder="Submit your email"
//                 className="input input-primary join-item max-w-80"
//               />
//               <button className="btn btn-primary join-item">
//                 <motion.div
//                   whileHover={{ scale: 2.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <MdEmail color="#83B4FF" fontSize={20} />
//                 </motion.div>
//               </button>
//             </div>
//           </fieldset>
//         </form>
//       </nav>
//       <nav>
//         <h1 className="text-3xl font-semibold">Follow Me</h1>
//         <div className="grid grid-flow-col gap-4">
//           <Link href="https://www.facebook.com/Abdullahalomar2000">
//             <FaFacebookSquare
//               className="hover:origin-center hover:rotate-45 duration-500"
//               fontSize={38}
//               color="#1877F2"
//             />{" "}
//           </Link>
//           <Link href="https://x.com/m_omar40">
//             <FaSquareTwitter
//               className="hover:origin-center hover:rotate-45 duration-500"
//               fontSize={38}
//               color="#1DA1F2"
//             />{" "}
//           </Link>
//           <Link href="www.linkedin.com/in/omar17">
//             <FaLinkedin
//               className="hover:origin-center hover:rotate-45 duration-500"
//               fontSize={38}
//               color="#0077B5"
//             />{" "}
//           </Link>
//           <Link href="https://www.instagram.com/abdullahomar.bd/">
//             <FaInstagramSquare
//               className="hover:origin-center hover:rotate-45 duration-500"
//               fontSize={38}
//               color="#D62D79"
//             />{" "}
//           </Link>
//         </div>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer footer-center md:footer lg:footer xl:footer py-20 md:p-28 lg:p-28 xl:p-28 bg-gradient-to-r from-[#c2d1f1] via-[#f9f8f9] to-[#c3cff8] text-gray-800 ">
      <nav>
        <div>
          <h1 className="text-3xl font-semibold">Abdullah Al Omar</h1>
          <p className="text-lg mt-5">
            All right reserved © {new Date().getFullYear()}
          </p>
        </div>
      </nav>
      <nav>
        <form>
          <h1 className="text-3xl font-semibold mb-5">Newsletter</h1>
          <fieldset className="form-control ">
            <div className="join">
              <input
                type="text"
                placeholder="Submit your email"
                className="input input-primary join-item max-w-80"
              />
              <button className="btn btn-primary join-item">
                <motion.div
                  whileHover={{ scale: 2.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MdEmail color="#83B4FF" fontSize={20} />
                </motion.div>
              </button>
            </div>
          </fieldset>
        </form>
      </nav>
      <nav>
        <h1 className="text-3xl font-semibold">Follow Me</h1>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.facebook.com/Abdullahalomar2000">
            <FaFacebookSquare
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#1877F2"
            />
          </Link>
          <Link href="https://x.com/m_omar40">
            <FaSquareTwitter
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#1DA1F2"
            />
          </Link>
          <Link href="www.linkedin.com/in/omar17">
            <FaLinkedin
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#0077B5"
            />
          </Link>
          <Link href="https://www.instagram.com/abdullahomar.bd/">
            <FaInstagramSquare
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#D62D79"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
