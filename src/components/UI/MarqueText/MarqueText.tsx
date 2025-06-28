import Marquee from "react-fast-marquee";

const MarqueText = () => {
  return (
    // py-20 md:py-28 lg:py-28 xl:py-28
    <div className="">
      <Marquee className="pb-4" gradient direction="right">
        <p className="text-6xl font-sans">
          I’m Open for new projects * Let’s Work Together.
        </p>
      </Marquee>
      <Marquee className="" gradient>
        <p className="text-6xl font-sans text-blue-300">
          I’m Open for new projects * Let’s Work Together.
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueText;
