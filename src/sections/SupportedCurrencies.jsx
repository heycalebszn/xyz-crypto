import { BrandLogos } from "../constants"

const SupportedCurrencies = () => {
    return (
        <div className="px-[50px] bg-[#010221] pb-[30px] items-center md:justify-normal md:items-start text-center md:text-left justify-center overflow-hidden">
            <p className="text-white bg-[#010221] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center mt-[50px] m-auto md:m-0">SUPPORTED CURRENCIES</p> 

            <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-white md:text-[35px] text-[30px] font-semibold md:text-left">Trade Over 100+ Cryptocurrencies</h1>
                <p className="text-gray-500 text-[15px] mt-[5px] md:mt-0">Bitcoin, Ethereum, Litecoin, and many more.Whether you're diversifying or <br /> focusing on a few, we've got the options you need.</p>
                </div>


                <div className="flex justify-center items-center mt-[50px]">
                    <div className="flex gap-4">
                        {BrandLogos.map((item) => (
                            <img
                            className="bg-[#262857] h-auto w-[150px] border-none  overflow-hidden p-[15px] rounded-lg"
                            key={item.id}
                            src={item.image}
                            alt="Brand Logos"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportedCurrencies;