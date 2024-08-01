import Image from "next/image";
import dedication from "@/assets/icons/dedication.png";
import smart from "@/assets/icons/smart-work.png";
import collaboration from "@/assets/icons/Collaboration.png";
import technology from "@/assets/icons/technology.png";

const Passion = () => {
  return (
    <div className="py-16 bg-[#E2ECF6] px-24">
      <div className="grid grid-rows-4 grid-flow-col gap-5">
        <div className="card bg-base-100 w-72 shadow-xl row-start-2 row-span-2">
          <div className="card-body">
            <Image
              src={dedication}
              height={100}
              width={100}
              alt="dedication icon"
            />
            <h2 className="card-title text-2xl my-3">Dedication</h2>
            <p className="text-xl text-gray-500">
              Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
              beatae atis et sopno vitae.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-72 shadow-xl row-end-3 row-span-2">
          <div className="card-body">
            <Image src={smart} height={100} width={100} alt="dedication icon" />
            <h2 className="card-title text-2xl my-3">Smart Work</h2>
            <p className="text-xl text-gray-500">
              Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
              beatae atis et sopno vitae.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-72 shadow-xl row-start-2 row-span-2">
          <div className="card-body">
            <Image
              src={collaboration}
              height={100}
              width={100}
              alt="dedication icon"
            />
            <h2 className="card-title text-2xl my-3">Collaboration</h2>
            <p className="text-xl text-gray-500">
              Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
              beatae atis et sopno vitae.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-72 shadow-xl row-end-3 row-span-2">
          <div className="card-body">
            <Image
              src={technology}
              height={100}
              width={100}
              alt="dedication icon"
            />
            <h2 className="card-title text-2xl my-3">Technology</h2>
            <p className="text-xl text-gray-500">
              Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
              beatae atis et sopno vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
