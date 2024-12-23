import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dark from "@/assets/icons/dark-mode.png";
import light from "@/assets/icons/light-mode.png";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents mismatch between server and client rendering
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className=""
      >
        {theme === "light" ? (
          <Image src={dark} alt="light mode" width={25} height={25} />
        ) : (
          <Image src={light} alt="light mode" width={25} height={25} />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
