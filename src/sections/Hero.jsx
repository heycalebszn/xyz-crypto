import { ArrowRight } from "lucide-react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="flex mt-[150px] px-[50px] relative">

      <div className="flex flex-col z-30">
        <p className="text-white bg-[#010346] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center">TRADE SMART</p>
        <h1 className="text-white text-[40px] font-bold">Invest in The Future <br /> of Crypto Currency with <br /> <span className="bg-green-500 bg-clip-text text-red-500">Confidence.</span> </h1>
        <p className="text-[#777] text-[15px] pt-[10px]">Trade, invest, and grow your crypto portfolio on the most secure, user-friendly platform.</p>

        <div className="flex gap-[10px] my-[50px]">

        <div className="bg-red-500 flex rounded-full p-[10px] hover:bg-[--body-color] hover:border border-white transition duration-300 cursor-pointer text-center justify-center w-[150px]">
        <a href="#" className="text-white font-semibold text-[15px]">Get Started</a>
        <ArrowRight className="text-white pl-[5px] w-[22px]" />
        </div>

            <div className="bg-transparent flex rounded-full p-[10px] hover:bg-[--body-color] border border-red-500 transition duration-300 cursor-pointer text-center justify-center w-[150px]">
            <a href="#" className="text-white font-semibold text-[15px] ">Learn More</a>
            <ArrowRight className="text-white pl-[5px] w-[22px]" />
            </div>

            </div>
        </div>

        <img className="absolute right-[50px] w-[600px] z-0" src={heroImg} alt="Hero" />
    </div>
  )
}

export default Hero