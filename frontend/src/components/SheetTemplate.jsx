const SheetTemplate = () => {
    return (
        <div data-theme="night" className="flex h-screen">
            {/* Sidebar */}
            <div className="sidebar w-64 bg-base-200 text-base-content p-4">
                <h2 className="text-lg font-bold">DSA Sheet</h2>
                <ul className="menu mt-4 space-y-2">
                    <li>
                        <a href="#" className="flex items-center space-x-2 hover:bg-primary hover:text-white p-2 rounded-lg">
                            <span className="material-icons">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 hover:bg-primary hover:text-white p-2 rounded-lg">
                            <span className="material-icons">person</span>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 hover:bg-primary hover:text-white p-2 rounded-lg">
                            <span className="material-icons">settings</span>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 hover:bg-primary hover:text-white p-2 rounded-lg">
                            <span className="material-icons">notifications</span>
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 hover:bg-primary hover:text-white p-2 rounded-lg">
                            <span className="material-icons">help</span>
                            <span>Help</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                {/* Navbar */}
                <div className="navbar bg-base-100 mb-4 shadow-lg">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">DSA Sheet</a>
                    </div>
                    <div className="flex-none">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="h-full bg-base-100 rounded-lg shadow-inner p-8">
                    {/* Empty content section */}
                </div>
            </div>
        </div>
    );
};

export default SheetTemplate;
