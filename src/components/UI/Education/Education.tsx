import Image from "next/image";
import education from "@/assets/img/low-angle-stacked-books-graduation-cap-ladders-education-day.jpg";
import { PiGraduationCap } from "react-icons/pi";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 px-8 md:px-16 lg:px-24 my-16">
      <div>
        <div className="mb-8">
          <p className="text-2xl text-blue-500 uppercase mb-2">Education</p>
          <h1 className="text-5xl font-bold">My Education</h1>
          <p className="text-md py-8">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit voluptatem accusantium dolore.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 group">
            {/* Icon */}
            <div className="p-3 bg-blue-400 rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-blue-500"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">B.Sc. Engineering</h2>
              <div className="flex gap-2">
                <p className="font-bold">
                  University of Global Village, Barishal
                </p>
                <p className="text-gray-500">(2022-2025)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 my-16 group">
            {/* Icon */}
            <div className="p-3 bg-blue-400 rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-blue-500"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">Diploma Engineering</h2>
              <div className="flex gap-2">
                <p className="font-bold">
                  Barisal Polytechnic Institute, Barishal
                </p>
                <p className="text-gray-500">(2018-2021)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            {/* Icon */}
            <div className="p-3 bg-blue-400 rounded-md duration-300 group-hover:bg-transparent group-hover:border group-hover:border-blue-400">
              <PiGraduationCap
                fontSize={38}
                className="transition-colors duration-300 transition-transform group-hover:rotate-[-90deg]  group-hover:text-blue-500"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl mb-3">
                Secondary School Certificate (S.S.C)
              </h2>
              <div className="flex gap-2">
                <p className="font-bold">Bhandaria Bihari Pilot High School</p>
                <p className="text-gray-500">(2016-2017)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-xl max-h-[730px]"
          src={education}
          height={730}
          width={635}
          alt="education"
        />
      </div>
    </div>
  );
};

export default Education;
