import { News } from "../constants";
import { MoveUpRight } from "lucide-react";

const Updates = () => {
  return (
    <div className="md:flex md:flex-row justify-center text-left mx-[50px] md:gap-[100px] gap-8 mt-[50px] flex flex-col items-center md:items-start">
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
        <h1 className="font-bold text-[30px] md:w-[250px] w-full">News and Market Updates</h1>
        <p className="md:w-[250px] text-[16px] leading-[25px] text-gray-500 pt-[15px] w-full">Stay Ahead of the curve, get the latest news, trends, and insights from the cryptocurrency world. Be the first to know about market shifts, new regulations, and emerging coins.</p>
        </div>
        <div className="flex flex-col gap-3">
            {News.map((item, index) => (
                <div className="flex flex-col bg-gray-200 rounded-md p-[15px] md:w-[400px] w-full" key={index}>
                    <div className="flex text-left items-center mb-[5px]">
                        <p className="font-bold text-[13px] text-red-900">{item.category}</p>
                        <span className="px-[10px] text-gray-400 font-bold text-[20px]">•</span>
                        <p className="font-bold text-[13px] text-gray-400">{item.datePosted}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                    <h1 className="font-bold text-[15px] text-black leading-[20px] cursor-grab">{item.content}</h1>
                    <MoveUpRight className="text-gray-400 hover:text-red-900 w-[35px] cursor-pointer transition duration-300" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Updates