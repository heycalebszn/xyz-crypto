import { NewToCrypto } from "../assets";

const CallToAction = () => {
  return (
    <div className="md:flex md:flex-col items-center justify-center mt-[50px] py-[30px] flex-col-reverse flex text-center px-[50px]">
      <img src={NewToCrypto} className="w-[300px]" alt="New to crypto" />

      <div>
        <h1 className="sm:text-[55px] font-bold w-[550px] text-[50px] leading-[55px] sm:leading-normal">New to Crypto?</h1>
        <p className="md:w-[600px] text-[16px] leading-[25px] text-gray-500 pt-[15px] w-full">Explore our educational resources designed to help you become a more informed investor. Learn how to get started with crypto, manage your profile, and make strategic decisions.</p>
        <div className="sm:mt-[50px] md:flex gap-4 text-center items-center grid grid-cols-2 justify-center mt-[30px]">
            <a className="bg-transparent text-black rounded-md px-[15px] py-[10px] text-[12px] font-bold border border-black items-center hover:bg-black hover:text-white transition duration-300 sm:w-[150px] w-full" href="">Beginner Guides</a>
            <a className="bg-transparent text-black rounded-md px-[15px] py-[10px] text-[12px] font-bold border border-black items-center hover:bg-black hover:text-white transition duration-300 sm:w-fit w-full" href="">Trading Tips</a>
            <a className="bg-transparent text-black rounded-md px-[15px] py-[10px] text-[12px] font-bold border border-black items-center hover:bg-black hover:text-white transition duration-300 sm:w-[150px] w-[full]" href="">Expert Webinars</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction;