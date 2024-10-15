import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {

    const [isBCADropdownOpen, setBCADropdownOpen] = useState(false);

    const toggleBCADropdown = () => {
        setBCADropdownOpen(!isBCADropdownOpen);
    };

    return (
        <div className="sidebar min-h-screen w-64 bg-base-200 text-base-content p-4 fixed">
            <h2 className="text-lg font-bold text-center mb-4 py-4">DSA</h2>
            <ul className="menu mt-4 space-y-3 ">
                {/* Profile */}
                <li>
                    <Link to="/profile" className="flex items-center space-x-2 hover:bg-slate-500 hover:text-white p-3 rounded-lg text-xl">
                        <FaRegUserCircle />
                        <span>Profile</span>
                    </Link>
                </li>
                
                <li >
                    <Link className="p-3 cursor-pointer hover:bg-slate-500 hover:text-white rounded-lg text-xl" to="/dsa" >Dsa Sheet</Link>
                </li>
                {/* <li >
                    <Link className="p-3 cursor-pointer hover:bg-slate-500 hover:text-white rounded-lg text-xl" to="/bca/mock_test" >Mock Text</Link>
                </li> */}
            </ul>
        </div>
    );
};