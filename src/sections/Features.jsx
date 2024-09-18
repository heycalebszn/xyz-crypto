import { ColouredFeatures } from "../components/ColouredFeatures"
import { features } from "../constants"
import ReadMore from "./ReadMore"

const Features = () => {
  return (
    <div className="bg-white mt-[100px]">
        <p className="text-red-900 bg-red-300 font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center m-auto mt-[50px]">OUR FEATURES</p> 
        <h1 className="sm:text-[50px] font-bold text-[35px] leading-[50px] sm:leading-normal text-center pb-[20px]">Dive in and experience the <br /> difference!</h1>
        <div className="flex">
        <div className="flex px-[50px] gap-4 flex-col md:grid md:grid-cols-2">
            {features.map((item, index) => (
                <div key={index} className="flex flex-col bg-white shadow-2xl p-[20px] rounded-md justify-between">
                    <span className="text-red-900 bg-red-300 font-bold w-fit py-[5px] px-[10px] rounded-full text-[10px]">{item.count}</span>
                    <span className="text-black p-[5px]">{item.icon}</span>
                    <h1 className="text-[20px] font-bold pt-[10px] pb-[10px]">{item.title}</h1>
                    <p className="leading-tight text-gray-500">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        <ColouredFeatures styles="pt-[100px]" />
    </div>
  )
}

export default Features;