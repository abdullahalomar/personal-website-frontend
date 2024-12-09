import HeroSection from "@/components/UI/HeroSection/HeroSection";
import Passion from "@/components/UI/Passion/Passion";
import ProjectPage from "./projects/page";
import MarqueText from "@/components/UI/MarqueText/MarqueText";
import AboutPage from "./about/page";
import Skill from "@/components/UI/Skill/Skill";
import Education from "@/components/UI/Education/Education";
import Award from "@/components/UI/Award/Award";
import Testimonial from "@/components/UI/Testimonial/Testimonial";
import ContactPage from "./contact/page";

const page = () => {
  return (
    <div>
      <div className="px-24"></div>
      <HeroSection />
      <Passion />
      <AboutPage />
      <MarqueText />
      <ProjectPage />
      <Education />
      {/* <Skill /> */}
      <Award />
      <MarqueText />
      {/* <Testimonial /> */}
      <ContactPage />
    </div>
  );
};

export default page;
