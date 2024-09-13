import {} from "lucide-react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Features1, Features2, Features3 } from "../../assets";
import { ColouredFeatures } from "../../components/ColouredFeatures";

const ReadMore = () => {
    return(
        <section className="flex flex-col">
        <Navbar />
        <ColouredFeatures styles="pt-[150px]" />
        <Footer />
        </section>
    )
}

export default ReadMore;