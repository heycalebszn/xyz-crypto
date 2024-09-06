import React from 'react'
import { Earth } from "../assets";

const SignUpCTA = () => {
  return (
    <div className="md:flex md:flex-row items-center justify-center gap-10 mt-[50px] flex flex-col-reverse">
      <img src={Earth} alt="Earth" />
      <div className="flex flex-col">
        <h1 className="font-bold text-[35px] bg-gradient-to-r from-red-900 to-red-300 text-transparent bg-clip-text">Ready to Start Investing?</h1>
        <p className="pt-[5px] text-gray-500 text-[16px]">Join thousands of others on XYZ Crypto and take control of your financial future.</p>
        <a className="text-[13px] bg-red-800 px-[15px] py-[10px] mt-[40px] rounded-md w-[250px] text-white hover:border hover:border-red-700 hover:bg-transparent hover:text-black transition duration-300" href="#">Create Your free Account in Minutes</a>
        </div>
    </div>
  )
}

export default SignUpCTA