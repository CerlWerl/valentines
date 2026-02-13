import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <div className="absolute left-10 bottom-5 transform">
      <h1
        className={`text-white text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Match</span> <br /> the photo pairs
      </h1>
      <h1
      className={` text-white text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        to reveal <br /> <span className="text-gray-400">the surprise</span>
      </h1>
      </div>
      {/* Right Text */}
      <div className="absolute right-10 bottom-5 transform ">
        <h1
          className={`  text-white text-4xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
        >
          Good luck <br /> <span className="text-gray-400">Babuh!</span>
        </h1>
      </div>
    </>
  );
}
