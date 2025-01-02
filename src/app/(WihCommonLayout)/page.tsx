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
import BlogsPage from "./blogs/page";
import Experience from "@/components/UI/Experience/Experience";

const page = () => {
  return (
    <div>
      <div className=""></div>
      <HeroSection />
      <Passion />
      <AboutPage />
      <MarqueText />
      {/* <ProjectPage /> */}
      <Education />
      {/* <Skill /> */}
      <Experience />
      <Award />
      <MarqueText />
      {/* <Testimonial /> */}
      <ContactPage />
      <BlogsPage />
    </div>
  );
};

export default page;
