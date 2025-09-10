
import React, { useState } from "react";
import "./CSS/NavigationBar.css";




function NavigationBar() {
    const [searchPlaceholder, setSearchPlaceholder] = useState("Search");
    const handleSearchFocus = () => setSearchPlaceholder("");
    const handleSearchBlur = () => setSearchPlaceholder("Search");
    return (
        <div>
<nav className="sticky top-0 z-50 w-full shadow-md bg-white text-black">
        <div className="flex items-center w-full p-4">
        <div className="font-bold text-xl mr-8">STAYNET</div>
        <ul className="flex space-x-4 flex-1">
            <li className="bg-gray-800 text-white px-3 py-2 rounded font-bold">HOME</li>
            <li>
            <a href="/about" className=" px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">ABOUT</a>
            </li>
            <li>
            <a href="/latest" className=" px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">LATEST</a>
            </li>
            <li>
            <a href="/popular" className=" px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">POPULAR</a>
            </li>
            <li>
            <a href="/book" className=" px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">BOOK NOW</a>
            </li>
        </ul>
        <div className="flex items-center space-x-4">
            <button className="px-3 py-2 rounded transition duration-300 "><a href="/signin" className="hover:underline">Sign In</a></button>
            <input
                id="search"
                type="text"
                placeholder={searchPlaceholder}
                onFocus={handleSearchFocus}
                            onBlur={handleSearchBlur}
                            className="px-2 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 text-black"
                        />
        </div>

        </div>
    </nav>
    {/* Content below the navigation bar */}
    </div>

);
}

export default NavigationBar;
