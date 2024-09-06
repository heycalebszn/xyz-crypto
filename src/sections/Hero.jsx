import { ArrowRight } from "lucide-react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row pt-[150px] pb-[30px] px-[50px] bg-[#010221] md:text-justify md:justify-normal text-center justify-center items-center">

      <div className="flex flex-col justify-center items-center md:justify-normal md:items-start z-30">
        <p className="text-white bg-[#010221] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center">TRADE SMART</p>
        <h1 className="text-white md:text-[40px] text-[30px] font-bold">Invest in The Future <br /> of Crypto Currency with <br /> <span className="bg-green-500 bg-clip-text text-red-500">Confidence.</span> </h1>
        <p className="text-gray-500 text-[16px] pt-[10px]">Trade, invest, and grow your crypto portfolio on the most secure, user-friendly platform.</p>

        <div className="flex gap-[10px] my-[50px]">

        <div className="bg-red-500 flex rounded-md px-[15px] py-[10px] text-[12px] hover:bg-[--body-color] hover:border border-white transition duration-300 cursor-pointer text-center justify-center w-[150px]">
        <a href="#" className="text-white font-semibold text-[15px]">Get Started</a>
        <ArrowRight className="text-white pl-[5px] w-[22px]" />
        </div>

            <div className="bg-transparent flex rounded-md px-[15px] py-[10px] text-[12px] hover:bg-[--body-color] border border-red-500 transition duration-300 cursor-pointer text-center justify-center w-[150px]">
            <a href="#" className="text-white font-semibold text-[15px] ">Learn More</a>
            <ArrowRight className="text-white pl-[5px] w-[22px]" />
            </div>

            </div>
        </div>

        <img className="md:absolute md:right-[50px] md:w-[600px] z-0" src={heroImg} alt="Hero" />
    </div>
  )
}

export default Hero