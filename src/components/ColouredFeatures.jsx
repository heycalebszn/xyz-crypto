import Button from "./Button";
import { Features1, Features2, Features3 } from "../assets";

export const ColouredFeatures = ({ styles }) => {
    return(
        <div className={`flex flex-col items-center text-center pb-[50px] px-[50px] sm:px-0 gap-4 sm:gap-0 ${styles}`}>
            <h1 className="sm:pb-[30px] sm:w-[550px] sm:text-[50px] font-bold text-[40px] leading-[50px] sm:leading-normal text-center w-[400px]">Built on Trust and Security</h1>
            <div className="flex flex-col gap-2 mt-[30px]">
                <div className="sm:flex-row gap-4 w-full sm:h-[300px] bg-purple-600 rounded-md text-white text-left items-start p-[30px] overflow-hidden h-fit flex-col">
                <div className="sm:flex gap-[100px] justify-between">
                <div className="flex flex-col text-left">
                <h1 className="font-bold text-[30px]">Regulatory Compliance</h1>
                <p className="text-[15px] font-sm sm:pt-0 pt-[10px]">We comply with global KYC and AML regulation.</p>
                <Button title={"Get Started"} styles="bg-purple-800 hover:border-none hover:bg-purple-900 w-[150px] mt-[20px]" linkStyles="text-[12px] font-sm" />
                </div>
                <img src={Features1} alt="Features image" className="w-[400px] sm:mt-0 mt-[20px]" />             
                </div>
                </div>
                <div className="md:flex flex-row sm:gap-2 gap-4">
                <div className="gap-4 text- w-full h-[500px] bg-gray-300 rounded-md text-black text-left items-start p-[30px] flex flex-col overflow-hidden">
                <h1 className="font-bold text-[30px]">Cold Storage</h1>
                    <p className="py-[5px]">95% of assets are stored offline for ultimate security.</p>
                    <Button title={"Be Secured"} styles="bg-gray-400 hover:border-none hover:bg-gray-800 w-[150px] mt-[10px]" linkStyles="text-[12px] font-sm" />
                    <img src={Features2} alt="Features image" className="w-[400px] mt-[20px]" />
                </div>
                <div className="gap-4 text- w-full h-[500px] bg-yellow-200 rounded-md text-black text-left items-start p-[30px] flex flex-col overflow-hidden mt-4 sm:mt-0">
                <h1 className="font-bold text-[30px]">24/7 Monitoring</h1>
                    <p className="py-[5px]">Our team constantly monitors for suspicious activity to protect your funds.</p>
                    <Button title={"Be Secured"} styles="bg-yellow-700 hover:border-none hover:bg-yellow-900 w-[150px] mt-[10px]" linkStyles="text-[12px] font-sm" />
                    <img src={Features3} alt="Features image" className="w-[400px]" />
                </div>
                </div>
            </div>
        </div>
    )
}