"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AllSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeCategory, setActiveCategory] = useState("Testing");

  const categories = ["Testing", "Tools", "Programming"];

  const skillData = {
    Testing: [
      { name: "Manual Testing", icon: "/skills/manual-testing.png" },
      { name: "Automation Testing", icon: "/skills/automation-100.png" },
      { name: "API Testing", icon: "/skills/rest-api-100.png" },
      { name: "Test Planning", icon: "/skills/test-planning-100.png" },
      { name: "Bug Reporting", icon: "/skills/bug-100.png" },
    ],
    Tools: [
      { name: "Postman", icon: "/skills/postman.png" },
      { name: "JMeter", icon: "/skills/jMeter.png" },
      { name: "Selenium", icon: "/skills/icons8-selenium-100.png" },
      { name: "Git & GitHub", icon: "/skills/github-100.png" },
    ],
    Programming: [
      { name: "JavaScript", icon: "/skills/icons8-javascript-100.png" },
      { name: "Java", icon: "/skills/java-100.png" },
      { name: "HTML", icon: "/skills/icons8-html-100.png" },
      { name: "CSS", icon: "/skills/icons8-css-100.png" },
      { name: "Node.js", icon: "/skills/icons8-nodejs-100.png" },
    ],
  };

  const bgColors = [
    "from-pink-500 to-rose-400",
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-sky-400",
    "from-cyan-500 to-teal-400",
    "from-green-500 to-lime-400",
    "from-yellow-500 to-amber-400",
    "from-orange-500 to-red-400",
    "from-emerald-500 to-teal-300",
    "from-fuchsia-500 to-pink-400",
    "from-sky-500 to-indigo-400",
  ];

  return (
    <section className="pt-20 px-6 md:px-20 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="">
          <p className="text-2xl text-secondary uppercase">My Skills</p>
          <h1 className="text-5xl font-bold text-primary">
            Growing Over Times
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm rounded-full transition ${
                activeCategory === cat
                  ? "btn-primary text-white"
                  : "btn-outline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData[activeCategory].map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`card bg-gradient-to-br ${
                bgColors[index % bgColors.length]
              } text-white rounded-2xl shadow-md transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl`}
            >
              <div className="card-body flex flex-col items-center justify-center gap-3 p-6">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
                  height={100}
                  width={100}
                />
                <span className="text-md font-semibold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSkills;
