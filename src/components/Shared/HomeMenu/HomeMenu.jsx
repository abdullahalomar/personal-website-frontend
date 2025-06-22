"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

const HomeMenu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="">
        <motion.button
          onClick={handleGoHome}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-3 mx-3 bg-primary p-3 rounded-full text-white shadow-lg fixed bottom-8 left-2"
          title="Go to Home"
        >
          <FaHome fontSize={30} />
        </motion.button>
      </div>
    </div>
  );
};

export default HomeMenu;
