import {} from "lucide-react";

const ReadMore = () => {
    return(
    <div className=" pt-[150px]">
        <h1>Built on Trust and Security</h1>
        <div>
            <div className="flex gap-10 items-center text-center">
                <span className="bg-blue-300 text-blue-900 rounded-full w-[50px] p-[15px] text-center">1</span>
            <div className="flex flex-col text-left">
            <p>Regulatory Compliance:</p>
            <span>We comply with global KYC and AML regulation.</span>
            </div>
            </div>
            <div>
            <p>Cold Storage: <span>95% of assets are stored offline for ultimate security.</span></p>
            </div>
            <div>
            <p>24/7 Monitoring: <span>Our team constantly monitors for suspicious activity to protect your funds.</span></p>
            </div>
        </div>
    </div>
    )
}

export default ReadMore;