// import HeroSection from "@/components/UI/HeroSection/HeroSection";
import Passion from "@/components/UI/Passion/Passion";

import MarqueText from "@/components/UI/MarqueText/MarqueText";
import AboutPage from "./about/page";
import ContactUsPage from "./contact-us/page";

import Education from "@/components/UI/Education/Education";
import Award from "@/components/UI/Award/Award";
import BlogsPage from "./blogs/page";
import Experience from "@/components/UI/Experience/Experience";
import AllSkills from "@/components/UI/AllSkills/AllSkills";
import ProjectPage from "./projects/page";
import HeroSection from "@/components/UI/HeroSection/HeroSection";

const page = () => {
  return (
    <div>
      <div className=""></div>
      <HeroSection />
      <Passion />
      <AboutPage />
      <MarqueText />
      <ProjectPage />
      <Education />
      {/* <Skill /> */}
      <AllSkills />
      <Experience />
      <Award />
      <MarqueText />
      {/* <Testimonial /> */}
      <ContactUsPage />
      <BlogsPage />
    </div>
  );
};

export default page;
