
import { heroImg } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import {usePrivy} from '@privy-io/react-auth';
import Button from "../components/Button";
const Hero = () => {
   return (
    <div className="flex flex-col md:flex-row pt-[150px] pb-[30px] px-[50px] bg-[#010221] md:text-justify md:justify-normal text-center justify-center items-center">

      <div className="flex flex-col justify-center items-center md:justify-normal md:items-start z-30">
        <p className="text-white bg-[#010221] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center">TRADE SMART</p>
        <h1 className="text-white md:text-[40px] text-[35px] font-bold">Invest in The Future of <br/> Crypto  Currency with <br/> <span className="bg-green-500 bg-clip-text text-red-500">Confidence.</span> </h1>
        <p className="text-gray-500 text-[16px] pt-[10px]">Trade, invest, and grow your crypto portfolio on the most secure, user-friendly platform.</p>

        <div className="flex gap-[10px] my-[50px]">

        <Link to={"/user-auth"}>
        <Button  
        styles="bg-red-600 hover:border hover:border-white"
        title={"Get Started"}/>
       </Link>
        <Button styles="bg-transparent border border-red-600 sm:flex hidden" title={"Learn More"} />
        </div>
        </div>

        <img className="md:absolute md:right-[50px] md:w-[600px] z-0" src={heroImg} alt="Hero" />
    </div>
  )
}

export default Hero; 