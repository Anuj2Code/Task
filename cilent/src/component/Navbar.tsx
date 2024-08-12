
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className="flex bg-[#ecedee]  h-[90px]  items-center justify-between">
                <div className="rounded-2xl  ml-[20px] border-2 gap-[10px] flex items-center h-[45px] w-[350px] shadow-2xl shadow-gray-500/50 bg-white">
                    <div className="ml-[10px]">
                        <CiSearch className="h-[24px] w-[24px] fill-black"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Project" className="outline-none bg-white" />
                    </div>
                </div>
                <div>
                <FaFilter className="mr-[15px] h-[20px]"/>
                </div>
            </div>
        </>
    )
}

export default Navbar
