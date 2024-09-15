import { BrandLogos } from "../constants"

const SupportedCurrencies = () => {
    return (
        <div className="px-[50px] bg-[#010221] pb-[30px] items-center md:justify-normal md:items-start text-center md:text-left justify-center overflow-hidden pt-[50px]">
            <p className="text-white bg-[#010221] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center m-auto md:m-0">SUPPORTED CURRENCIES</p> 

            <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-white md:text-[35px] text-[30px] font-semibold md:text-left">Trade Over 100+ Cryptocurrencies</h1>
                <p className="text-gray-500 text-[16px] mt-[5px] md:mt-0 md:w-[590px] w-full">Bitcoin, Ethereum, Litecoin, and many more. Whether you're diversifying or focusing on a few, we've got the options you need.</p>
                </div>


                <div className="flex justify-center items-center mt-[50px]">
                    <div className="flex gap-8">
                        {BrandLogos.map((item) => (
                            <div className="bg-[#262857] rounded-md p-[15px] flex justify-center items-center" key={item.id}>
                            <img
                            className="md:w-[70px] w-[150px]"
                            key={item.id}
                            src={item.image}
                            alt="Brand Logos"
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportedCurrencies;