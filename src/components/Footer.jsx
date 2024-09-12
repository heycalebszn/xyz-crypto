import React from 'react'
import { FooterLinks } from '../constants'
import { Link, Navigate } from 'react-router-dom'
import { FacebookIcon, Linkedin, SunMedium, TwitterIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-[--body-color] text-white w-full px-[50px] h-fit flex flex-col z-50 mt-[50px] gap-4 py-[30px] justify-between">
      <div className="flex justify-around mb-[20px] flex-col">
      <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[25px]">XYZ</h1>
      <h1 className="font-bold text-[15px]">Let's Connect</h1>
      <p className="text-[12px]">Stay up-to-date with the latest news, features and updates from <br /> XYZ. Follow us on all social media!</p>
      <div className="flex gap-4">
        <TwitterIcon className="w-[18px] sm:w-[20px]" />
        <Linkedin className="w-[18px] sm:w-[20px]" />
        <SunMedium className="w-[18px] sm:w-[20px]" />
        <FacebookIcon className="w-[18px] sm:w-[20px]" />
      </div>
      </div>

      <div className="flex gap-10 mt-[30px] sm:mt-0 sm:gap-0">
      <div className="flex flex-col">
      <h1 className="font-bold">Company</h1>
        <ul className="flex pt-[20px] flex-col">
        {FooterLinks.map((item) => (
            <li key={item.id}>
                <a className="text-gray-200 pl-[5px] md:text-[12px]  text-[10px] hover:text-gray-500 transition duration-150" href="">{item.label}</a>
                </li>
        ))}
        </ul>
        </div>

        <div>
        <h1 className="font-bold">Legal</h1>
        <ul className="flex pt-[20px] flex-col">
          <li><a className="text-gray-200 pl-[5px] md:text-[12px]  text-[10px] hover:text-gray-500 transition duration-150" href="">PRIVACY</a></li>
          <li><a className="text-gray-200 pl-[5px] md:text-[12px]  text-[10px] hover:text-gray-500 transition duration-150" href="">POLICY</a></li>
        </ul>
        </div>
        </div>
        </div>

        <div className="text-gray-300 md:text-[15px] text-[12px] text-center">
             Privacy Policy | Terms & Conditions 
        </div>

        <span className="text-gray-300 md:text-[15px] text-[12px] text-center">© 2024 XYZ Crypto. All rights reserved.</span>
    </div>
  )
}

export default Footer;