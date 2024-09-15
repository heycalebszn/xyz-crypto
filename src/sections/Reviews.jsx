import React from 'react'
import { Star, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <div className="bg-black mx-[20px] mt-[50px] rounded-lg text-white p-[50px] flex justify-between">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-10 md:gap-0">
       <div className="flex gap-4 md:flex-row flex-col items-center md:mr-[50px] mr-0">
        <div className="flex flex-col gap-4 items-center justify">
            <div className="flex flex-col justify-between bg-[#1a1919] md:w-[350px] h-fit p-[20px] rounded-md shadow-xl w-full">
                <p  className="text-[13px] leading-[20px] text-gray-500">XYZ Crypto made investing in Bitcoin simple and straightforward. Their security measures give me peace of mind.</p>
                <div className="flex flex-row justify-between pt-[20px] items-center">
                <div className="flex flex-col">
                    <h3 className="text-[14px] font-bold ">John D. Investor</h3>
                    <p className="text-[12px] text-gray-500">Investor</p>
                </div>
                <div className="flex flex-row">
                    <Star className="pr-[5px] text-red-500 text-[5px]" />
                    <p className="font-semibold text-gray-300">5.0</p>
                </div>
                </div>
            </div>

            <div className="flex flex-col justify-between bg-[#1a1919] md:w-[350px] w-full h-fit p-[20px] rounded-md shadow-xl">
                <p  className="text-[13px] leading-[20px] text-gray-500">I've been able to diversify my portfolio easily. Their automated investment feature is a game changer!</p>
                <div className="flex flex-row justify-between pt-[20px] items-center">
                <div className="flex flex-col">
                    <h3 className="text-[14px] font-bold ">Sarah K.</h3>
                    <p className="text-[12px] text-gray-500">Crypto Enthusiast</p>
                </div>
                <div className="flex flex-row">
                <Star className="pr-[5px] text-red-500 text-[5px]" />
                    <p className="font-semibold text-gray-300">5.0</p>
                </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between bg-[#1a1919] md:w-[350px] w-full h-fit p-[20px] rounded-md shadow-xl">
                <p  className="text-[13px] leading-[20px] text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita molestias repellat error ipsum vitae, accusantium nam optio tempore eum fugiat!</p>
                <div className="flex flex-row justify-between pt-[20px] items-center">
                <div className="flex flex-col">
                    <h3 className="text-[14px] font-bold ">Mark</h3>
                    <p className="text-[12px] text-gray-500">Analyst</p>
                </div>
                <div className="flex flex-row">
                <Star className="pr-[5px] text-red-500 text-[5px]" />
                    <p className="font-semibold text-gray-300">5.0</p>
                </div>
                </div>
            </div>
       </div>
       <div className="md:text-left md:items-start items-center flex flex-col justify-center text-center md:justify-normal">
       <p className="text-white bg-[#221b1b] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-left items-left mt-[50px]">TESTIMONIALS</p> 
        <h1 className="md:text-[30px] text-[30px] font-bold text-center md:text-left pb-[15px]">What Our users say about us</h1>
        

        <Link to={"/read-more"}>
        <div className="bg-red-500 flex rounded-md md:p-[10px] p-[5px] hover:bg-[#000] hover:border border-white transition duration-300 cursor-pointer text-center justify-center w-[150px] items-center">
        <a href="#" className="text-white font-semibold md:text-[15px] text-[10px]">Read More</a>
        <ArrowRight className="text-white pl-[5px] md:w-[22px] w-[18px]" />
        </div>
        </Link>
       </div>
       </div>
    </div>
  )
}

export default Reviews;