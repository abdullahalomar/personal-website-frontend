"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AllSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
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
      { name: "JMeter", icon: "/skills/jmeter.png" },
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

  // Soft pastel gradient backgrounds
  const bgColors = [
    "from-pink-200 to-rose-100",
    "from-purple-200 to-indigo-100",
    "from-blue-200 to-sky-100",
    "from-cyan-200 to-teal-100",
    "from-green-200 to-lime-100",
    "from-yellow-200 to-amber-100",
    "from-orange-200 to-red-100",
    "from-emerald-200 to-teal-100",
    "from-fuchsia-200 to-pink-100",
    "from-sky-200 to-indigo-100",
  ];

  return (
    <section className="px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <div>
          <p className="text-2xl text-secondary uppercase">My Skills</p>
          <h1 className="text-5xl font-bold text-primary">Growing Over Time</h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm rounded-full transition ${
                activeCategory === cat
                  ? "btn-primary text-white shadow"
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
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`card bg-gradient-to-br ${
                bgColors[index % bgColors.length]
              } text-gray-800 rounded-2xl shadow hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1`}
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
