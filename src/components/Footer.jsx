import React from 'react'
import { FooterLinks } from '../constants'
import { Link, Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[--body-color] text-white w-full px-[50px] h-fit flex flex-col items-center z-50 mt-[50px] gap-4">
        <ul className="flex pt-[20px]">
        {FooterLinks.map((item) => (
            <li key={item.id}>
                <a className="text-gray-200 pl-[5px] font-semibold md:text-[12px]  text-[10px] hover:text-gray-500 transition duration-150" href="">{item.label} |</a>
                </li>
        ))}
        </ul>

        <div className="text-gray-300 md:text-[15px] text-[12px]">
             Privacy Policy | Terms & Conditions 
        </div>

        <span className="text-gray-300 md:text-[15px] text-[12px]">© 2024 XYZ Crypto. All rights reserved.</span>
    </div>
  )
}

export default Footer;