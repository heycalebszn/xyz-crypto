import { Link, useNavigate } from "react-router-dom";
import {usePrivy} from '@privy-io/react-auth';
import Navbar from "../../components/Navbar";

const UserAuth = () => {
    const { login, ready, authenticated, user } = usePrivy();
    const navigate = useNavigate();

        if(user) {
            navigate("/dashboard");
        } else {
            login;
        }
    
      const disableLogin = !ready || (ready && authenticated);
  return (
    <div className="flex flex-col justify-center items-center pt-[150px]">
        <div className="flex flex-col text-center mb-[20px]">
            <h1 className="text-[20px] font-semibold">Sign Up for XYZ</h1>
            <p className="text-gray-600">No minimum investment required.</p>
        </div>

        <form className="mt-[20px]">
            <div className="flex border border-gray-400 w-full py-[7px] mb-[20px] rounded-sm items-center justify-center cursor-pointer">
                {/*<Google />*/}
                <p className="font-semibold text-[15px]">Sign up with Google</p>
            </div>
            <div className="flex items-center justify-center">
                <span className="w-[50%] py-[1px] h-[1px] bg-gray-200"></span>
                <p className="w-full text-[11px] font-medium px-[5px]">or sign up with email</p>
                <span className="w-[50%] py-[1px] h-[1px] bg-gray-200"></span>
            </div>

            <div className="flex flex-col mt-[20px]">
            <label for="email">Email</label>
            <input type="email" placeholder="Victor@gmail.com" className="border border-gray-400 px-[10px] h-[30px] w-[250px] text-[13px] rounded-sm outline-gray-500" />
            </div>

            <button type="submit" className="text-[13px] font-semibold text-center flex m-auto p-[7px] bg-black text-white rounded-sm w-full mt-[15px] items-center justify-center" disabled={disableLogin} onClick={login}>Create Free Account</button>

            <span className="mt-[20px] text-[12px] flex text-center items-center justify-center font-medium">
                Already have an account? 
                <Link to={"/login"}>
                <a className="pl-[5px] text-blue-500 underline" href=""  >Sign In</a>
                </Link>
            </span>
        </form>
    </div>
  )
}

export default UserAuth;