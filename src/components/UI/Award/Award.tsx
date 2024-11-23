import coursera from "@/assets/icons/coursera-wordmark-blue.svg";
import Image from "next/image";

const Award = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 mb-24">
      <div>
        <div className="text-center mb-16">
          <p className="text-2xl text-blue-500">Success Stories</p>
          <h1 className="text-5xl font-bold">Awards & Achivements</h1>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
          <div className="card rounded-box grid h-20">
            <div className="flex justify-between">
              <div>
                <Image src={coursera} height={100} width={100} alt="" />
              </div>
              <div>
                <p className="text-2xl font-bold">Developer of the Year</p>
                <p className="text-gray-400">2021</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Dev Internatioal</p>
                <p>London, England</p>
              </div>
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card rounded-box grid h-20 place-items-center">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
