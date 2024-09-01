import { useState } from "react";
import { Navlinks } from "../constants";
import { ArrowRight, MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const handleNavigationToggle = () => {
        setOpenNavigation(!openNavigation)
    }

  return (
    <div className="flex justify-between shadow-xl h-fit py-[20px] fixed w-full items-center bg-white z-50">
        <h1 className="text-black font-semibold ml-[50px]">XYZ</h1>

        <div className={`md:flex justify-center sm:transition-none md:border-none items-center md:bg-none bg-white absolute right-[10px] top-[80px] border border-white transition duration-300 p-[20px] sm:p-0 rounded-lg w-[40vw] sm:translate-y-[0] md:top-[10px] md:right-0 shrink-0
        ${openNavigation ? "sm:translate-y-[0]" : "translate-y-[-2500px]"}`}>
        <ul className="sm:flex shrink-0 block text-center justify-center mr-[20px]">
            {Navlinks.map((item) => (
                <li key={item.id}><a className="text-black sm:pr-[10px] pr-0 sm:text-[10px] text-[12px] w-full" href="">{item.label}</a></li>
            ))}
            </ul>
            
            <div className="bg-red-500 flex shrink-0 rounded-full p-[10px] hover:bg-[--body-color] hover:border border-white transition duration-300 cursor-pointer relative text-center items-center justify-center sm:mt-0 mt-[20px]">
            <a href="#" className="text-white font-semibold text-[15px]">Get Started</a>
            <ArrowRight className="text-white pl-[5px] w-[22px]" />
            </div>
            </div>

            {openNavigation ? (
                <XIcon className="cursor-pointer text-black sm:hidden mr-[50px]" onClick={handleNavigationToggle} />
            ) : (
                <MenuIcon className="cursor-pointer text-black sm:hidden mr-[50px]" onClick={handleNavigationToggle} />
            )
            }
    </div>
  )
}

export default Navbar;