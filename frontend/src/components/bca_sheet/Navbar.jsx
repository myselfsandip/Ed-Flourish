import { useState } from "react"
import { FaRegUserCircle } from "react-icons/fa";


export const Navbar = () => {
    const [dropdownState,setDropdownState] = useState(false);
    const dropdownHandler = () => {
        setDropdownState((prev) => {
            return !prev;
        })
    }
    return (
        <div className="navbar bg-base-100 fixed top-0 left-64 right-0 z-10 shadow-lg" style={{ width: "calc(100% - 16rem)" }}> {/* Adjust width for fixed sidebar */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BCA Sheet</a>
            </div>
            <div className="flex-none">
                <div className="form-control me-6">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                
                <div className="dropdown dropdown-end" onClick={dropdownHandler}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className=" flex justify-center align-middle" >
                        <FaRegUserCircle className="text-4xl" />
                        </div>
                    </label>
                    {dropdownState && <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>}
                </div>
            </div>
        </div>
    )
}