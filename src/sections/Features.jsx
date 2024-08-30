import { BrandLogos } from "../constants"

const Features = () => {
    return (
        <div className="mt-[50px] px-[50px]">
            <p className="text-white bg-[#010346] w-fit py-[5px] px-[10px] font-semibold rounded-full text-[10px] mb-[10px]">SUPPORTED CURRENCIES</p>  

            <div className="flex flex-col">
            <div className="flex">
                <h1 className="text-white text-[40px] font-semibold">Trade Over 100+ Cryptocurrencies</h1>
                <p className="text-[#777] text-[15px]">Bitcoin, Ethereum, Litecoin, and many more.Whether you're diversifying or focusing on a few, we've got the options you need.</p>
                </div>


                <div className="absolute top-[800px] left-[-20px] overflow-hidden">
                    <div className="grid gap-2 grid-cols-6">
                        {BrandLogos.map((item) => (
                            <img
                            className="bg-[#010346] h-[150px] w-[400px] border-none  overflow-hidden"
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

export default Features;