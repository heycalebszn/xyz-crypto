import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogs } from "../../constants";
import { Earth } from "../../assets";
const Main = () => {
  return (
    <section className="flex flex-col items-center">
      <Navbar />
      <div className="pt-[60px]">
        <div className="sm:flex-row flex flex-col bg-purple-600 py-[50px] px-[50px] text-white items-left w-screen justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-[13px] pb-[7px]">What's in the news?</span>
            <h1 className="font-bold text-[25px] pb-[5px] sm:text-[35px]">News and Updates</h1>
            <p className="text-[12px] pb-[20px] sm:w-full w-[280px]">Use XYZ to process crypto, invest charts anywhere, and access a pool of talent globally.</p>
            <button className="bg-white py-[7px] rounded-md sm:w-[150px] w-full font-bold text-purple-600 text-[11px]">Get Started now</button>
          </div>
          <div className="mt-[40px] sm:mt-0 pr-[100px]">
          <img src={Earth} className="w-[250px]" alt="News image" />
          </div>
        </div>
      <h1 className="pb-[20px] font-bold sm:px-[50px] px-[30px] pt-[25px]">Other Blogs</h1>
      <div className="sm:grid grid-cols-3 sm:gap-4 grid-flow-row sm:px-[50px] px-[30px]">
        {blogs.map((item, index) => (
          <div 
          key={index}
          className="bg-gray-100 rounded-md sm:w-full w-full">
            <div className="bg-gray-500 py-[40px] pr-[15px] sm:w-full rounded-tr-md rounded-tl-md w-[400px]">
              <img 
              src={Earth}
              alt="Blogs image"
              className="w-[200px]"
              />
            </div>
            <div className="p-[10px] flex flex-col gap-2">
            <span className="text-[12px] font-bold text-gray-700">{item.description}</span>
            <h1 className="truncate w-[300px] font-bold text-[16px]">{item.title}</h1>
            <p className="text-[11px]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </section>
  )
}

export default Main