import { useState } from "react";
import { Navlinks } from "../constants";
import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {usePrivy} from '@privy-io/react-auth';
import Button from "../components/Button";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const handleNavigationToggle = () => {
        setOpenNavigation(!openNavigation)
    }

  return (
        <div className="flex justify-between shadow-xl h-fit md:py-[20px] fixed w-full items-center bg-white z-50 py-[20px]">
        <h1 className="text-black font-semibold ml-[50px] text-[20px]">XYZ</h1>

        <div className={`md:flex justify-center sm:transition-none md:border-none items-center md:bg-none bg-white absolute right-0 top-[80px] border border-white transition duration-300 p-[20px] md:p-0 rounded-lg w-[500px] sm:translate-y-[0] md:right-0 shrink-0 md:static h-fit md:h-[50px] px-[100px]      
        ${openNavigation ? "sm:translate-y-[0]" : "translate-y-[-2500px]"}`}>
        
        <ul className="sm:flex shrink-0 block text-center justify-center mr-[20px]">
            {Navlinks.map((item) => (
                <li key={item.id} className="py-[10px]"><a className="text-black sm:pr-[10px] pr-0 sm:text-[] text-[13px] w-full font-semibold hover:text-gray-500 uppercase " href="">{item.label}</a></li>
            ))}
            </ul>
        

            
            <div>
            <Link to={"/user-auth"}>
            <Button 
        styles="bg-red-600 md:hidden flex w-full mt-[10px]"
        title={"Get Started"}/>
        </Link>
            </div>
            </div>
            
            <Link to={"/user-auth"}>
            <div className="bg-red-500 shrink-0 rounded-md px-[15px] py-[10px] border-white transition duration-300 cursor-pointer relative text-center items-center justify-center sm:mt-0 mt-[20px] mr-[50px] hidden md:flex">
            <a href="#" className="text-white font-semibold text-[12px]">Get Started</a>
            <ArrowRight className="text-white pl-[5px] w-[20px]" />
            </div>
            </Link>
            

            {openNavigation ? (
                <XIcon className="cursor-pointer text-black sm:hidden mr-[50px] md:mr-0" onClick={handleNavigationToggle} />
            ) : (
                <MenuIcon className="cursor-pointer text-black sm:hidden mr-[50px] md:mr-0" onClick={handleNavigationToggle} />
            )
            }
    </div>
  )
}

export default Navbar;