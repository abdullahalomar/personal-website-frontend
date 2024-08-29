import About from "@/components/UI/About/About";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import Passion from "@/components/UI/Passion/Passion";

const page = () => {
  return (
    <div>
      <div className="px-24"></div>
      <HeroSection />
      <Passion />
      <About />
    </div>
  );
};

export default page;
