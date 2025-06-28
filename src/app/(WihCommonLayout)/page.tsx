import HeroSection from "@/components/UI/HeroSection/HeroSection";
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

const page = () => {
  return (
    <div>
      <div className=""></div>
      <div className="">
        <HeroSection />
      </div>
      <div>
        <Passion />
      </div>
      <div>
        <AboutPage />
      </div>
      <div className="my-20">
        <MarqueText />
      </div>
      <div>
        <ProjectPage />
      </div>
      <div className="my-28">
        <Education />
      </div>
      {/* <Skill /> */}
      <div>
        <AllSkills />
      </div>
      <div className="my-20">
        <Experience />
      </div>
      <div>
        <Award />
      </div>
      <div className="my-20">
        <MarqueText />
      </div>
      {/* <Testimonial /> */}
      <div>
        <ContactUsPage />
      </div>
      <div className="my-20">
        <BlogsPage />
      </div>
    </div>
  );
};

export default page;
