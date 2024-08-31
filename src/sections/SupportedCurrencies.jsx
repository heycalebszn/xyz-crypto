import { BrandLogos } from "../constants"

const SupportedCurrencies = () => {
    return (
        <div className="mt-[100px] px-[50px]">
            <p className="text-white bg-[#010346] font-bold w-fit py-[2px] px-[10px] rounded-full text-[10px] mb-[10px] text-center m-auto mt-[50px]">SUPPORTED CURRENCIES</p> 

            <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-white text-[35px] font-semibold">Trade Over 100+ Cryptocurrencies</h1>
                <p className="text-[#777] text-[15px]">Bitcoin, Ethereum, Litecoin, and many more.Whether you're diversifying or <br /> focusing on a few, we've got the options you need.</p>
                </div>


                <div className="flex justify-center items-center mt-[50px]">
                    <div className="flex gap-4">
                        {BrandLogos.map((item) => (
                            <img
                            className="bg-[#010346] h-auto w-[150px] border-none  overflow-hidden p-[15px] rounded-lg"
                            key={item.id}
                            src={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportedCurrencies;