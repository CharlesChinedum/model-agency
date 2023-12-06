import model from "@/app/assets/images/model.svg";
import ellipse from "@/app/assets/images/ellipse.svg";
import checkBadge from "@/app/assets/icons/BadgeCheck.svg";
import rectangle from "@/app/assets/images/rectangle.svg";
import Navbar from "./Navbar";
import Image from "next/image";

const texts = ["Model", "Shoot", "Be The Next"];

const Circle = () => {
  return <div className="w-2 h-2 bg-baseOrange rounded-full"></div>;
};

const Hero = () => {
  return (
    <div className="bg-[#D4C7BB] h-[100vh]">
      <div className="w-full h-full px-20 pt-5">
        <div className="h-[18%]">
          <Navbar />
          <div className="w-full">
            <div className="w-full flex justify-center gap-10">
              {texts.map((text) => (
                <div key={text} className="flex items-end">
                  <h2 className="text-[#131415] text-[60px] font-bold uppercase">
                    {text}
                  </h2>
                  <Circle />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[82.5%] flex">
          <div className="h-full w-[15%] flex items-end">
            <div className="w-full flex gap-2">
              <Image src={rectangle} alt="rectangle" className="w-10" />
              <span className="text-baseOrange text-3xl">01</span>
            </div>
          </div>

          {/* Model */}
          <div className="h-full w-[70%] relative">
            <div className="relative w-full h-full flex justify-center items-center">
              <Image src={ellipse} alt="ellipse" className="absolute w-[70%]" />
              <div className="relative w-[50%] flex items-end h-full">
                <Image
                  src={model}
                  alt="model"
                  className="absolute w-full h-[100%]"
                />
              </div>
            </div>
          </div>

          <div className="h-full w-[15%] flex items-end">
            <div className="w-full flex flex-col gap-2">
              <Image src={checkBadge} alt="checkBadge" className="w-10" />
              <span className="text-[#131415] text-[18px] font-semibold">
                Model of the Month
              </span>
              <span className="text-[#131415] text-[18px]">August 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
