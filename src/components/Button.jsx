import { ArrowRight } from "lucide-react";

const Button = ({ title, target, onClick, styles, linkStyles }) => {
  return (
    <div className={`bg-red-500 flex rounded-md px-[15px] py-[10px] text-[12px] hover:bg-[--body-color] hover:border hover:border-white transition duration-300 cursor-pointer text-center justify-center w-[150px] items-center ${styles}`}>
        <a href="#" className={`text-white font-semibold sm:text-[15px] ${linkStyles}`}  onClick={onClick} target={target}>{title}</a>
        <ArrowRight className="text-white pl-[5px] w-[22px]" />
        </div>
  )
}

export default Button