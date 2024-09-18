import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
    const Pricing = [
        {
            price: "$500",
            title: "Beginners",
            description: "Clients are likely to earn more than the stated Return on investment, at the end of the trading period.",
            details: {
                max: "$999",
                min: "32%",
                duration: "14 Days",
                instant: "instant trading",
                commission: "0%",
                remote: "Remote Administrator",
                configuration: "Configure Software",
                type: "Special Application",
                support: "24/7 support",
            }
        },
        {
            price: "$1000",
            title: "SILVER",
            description: "Clients are likely to earn more than the stated Return on investment, at the end of the trading period.",
            details: {
                max: "$999",
                min: "32%",
                duration: "14 Days",
                instant: "instant trading",
                commission: "0%",
                remote: "Remote Administrator",
                configuration: "Configure Software",
                type: "Special Application",
                support: "24/7 support",
            }
        },
        {
            price: "$5000",
            title: "gold",
            description: "Clients are likely to earn more than the stated Return on investment, at the end of the trading period.",
            details: {
                max: "$999",
                min: "32%",
                duration: "14 Days",
                instant: "instant trading",
                commission: "0%",
                remote: "Remote Administrator",
                configuration: "Configure Software",
                type: "Special Application",
                support: "24/7 support",
            }
        },
        {
            price: "$10000",
            title: "PREMIUM",
            description: "Clients are likely to earn more than the stated Return on investment, at the end of the trading period.",
            details: {
                max: "$999",
                min: "32%",
                duration: "14 Days",
                instant: "instant trading",
                commission: "0%",
                remote: "Remote Administrator",
                configuration: "Configure Software",
                type: "Special Application",
                support: "24/7 support",
            }
        },
        {
            price: "$50000",
            title: "DIAMOND",
            description: "Clients are likely to earn more than the stated Return on investment, at the end of the trading period.",
            details: {
                max: "$999",
                min: "32%",
                duration: "14 Days",
                instant: "instant trading",
                commission: "0%",
                remote: "Remote Administrator",
                configuration: "Configure Software",
                type: "Special Application",
                support: "24/7 support",
            }
        },
    ]
  return (
    <div className="sm:flex flex-col items-center justify-center gap-5 sm:px-[50px] pt-[100px] px-[30px]">
        <h1 className="pt-[50px] sm:pb-[30px] sm:w-[550px] pb-[40px] sm:text-[50px] font-bold text-[35px] leading-[50px] sm:leading-normal text-center w-full">Choose The Best Plan That's For You</h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-5 px-[50px] flex-wrap">
        {Pricing.map((item, index) => (
            <div className="flex flex-col border border-gray-300 p-[45px] rounded-3xl sm:w-[380px] hover:bg-red-900 hover:text-white transition-all duration-500 hover:scale-100 w-full" key={index}>
                <div className="flex flex-col gap-2">
                <h1 className="text-[40px] font-bold">{item.price}</h1>
                <h1 className="text-[25px] font-bold uppercase">{item.title}</h1>
                <h1 className="text-[15px] text-gray-500 leading-[20px]">{item.description}</h1>
                <span className="w-full p-[1px] bg-gray-300 my-[20px]"></span>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">Maximum: {item.details.max}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">Minimum ROI: {item.details.max}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.min}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.duration}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.instant}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.commission}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.remote}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.configuration}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.type}</p>
                </div>
                <div className="flex gap-2 mt-[10px]">
                <Check className="bg-red-500 rounded-full p-[5px] text-white font-bold" />
                <p className="text-[15px]">{item.details.support}</p>
                </div>
                <div className="flex mt-[40px] items-center justify-center bg-red-500 py-[10px] rounded-md text-white w-full cursor-pointer">
                <button className="font-bold">Join</button>
                <ArrowRight className="text-white w-[20px] ml-[10px]" />
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Pricing;