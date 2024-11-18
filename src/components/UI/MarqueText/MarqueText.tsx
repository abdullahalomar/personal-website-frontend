import Marquee from "react-fast-marquee";

const MarqueText = () => {
  return (
    <div className="my-36">
      <Marquee className="pb-4" gradient direction="right">
        <p className="text-6xl font-sans">
          I’m Open for new projects * Let’s Work Together.
        </p>
      </Marquee>
      <Marquee className="pb-4" gradient>
        <p className="text-6xl font-sans text-blue-300">
          I’m Open for new projects * Let’s Work Together.
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueText;
