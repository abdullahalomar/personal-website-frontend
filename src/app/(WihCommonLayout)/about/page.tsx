import profile from "@/assets/img/profile-image-web.png";
import download from "@/assets/icons/download.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-28 gap-10 px-6 sm:px-12 lg:px-24 my-10">
        <div className="relative">
          <Image src={profile} height={600} width={600} alt="about image" />

          <button className="uppercase absolute -bottom-5 -right-5 lg:-bottom-10 lg:-right-10 bg-blue-400 py-3 px-6 lg:py-5 lg:px-8 flex gap-3 text-sm lg:text-base">
            Download CV
            <Image src={download} height={20} width={20} alt="download" />
          </button>
        </div>
        <div className="mt-10 lg:mt-20 sm:mt-20">
          <p className="uppercase text-lg sm:text-xl text-blue-500">About me</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl my-5">
            I Develop Systems that Work
          </h1>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            officia temporibus inventore eligendi, quidem repudiandae quam dolor
            obcaecati ab fugiat!
          </p>
          <hr className="my-6 sm:my-8" />
          <div className="flex flex-col sm:flex-row sm:gap-10">
            <div className="table w-50">
              <div className="table-row-group">
                <div className="table-row">
                  <div className="table-cell">
                    <p className="font-bold text-lg">Name</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Abdullah Al Omar</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Age</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">24 Years</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Occupation</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Programmer, Content Creator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="table w-50">
              <div className="table-row-group">
                <div className="table-row">
                  <div className="table-cell">
                    <p className="font-bold text-lg">Phone</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">+88 1234567890</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Email</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">abdullahalomar048@gmail.com</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Nationality</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Bangladeshi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:my-8" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
