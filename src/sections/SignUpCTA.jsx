import React from 'react'
import { Earth } from "../assets";
import { Link } from "react-router-dom"

const SignUpCTA = () => {
  return (
    <div className="md:flex md:flex-row items-center justify-center gap-10 mt-[50px] flex flex-col-reverse mx-[50px] md:mx-0">
      <img src={Earth} alt="Earth" />
      <div className="flex flex-col">
        <h1 className="font-bold text-[35px] bg-gradient-to-r from-red-900 to-red-300 text-transparent bg-clip-text">Ready to Start Investing?</h1>
        <p className="pt-[5px] text-gray-500 md:text-[16px]text-[13px]">Join thousands of others on XYZ Crypto and take control of your financial future.</p>

        <Link to={"/user-auth"} className="mt-[40px]">
        <a className="text-[13px] bg-red-800 px-[15px] py-[10px] mt-[40px] rounded-md w-[250px] text-white hover:border hover:border-red-700 hover:bg-transparent hover:text-black transition duration-300" href="#">Create Your free Account in Minutes</a>
        </Link>
        </div>
    </div>
  )
}

export default SignUpCTA