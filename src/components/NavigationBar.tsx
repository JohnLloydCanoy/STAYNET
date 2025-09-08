
import React from "react";
import "./NavigationBar.css";


function NavigationBar() {
return (
        <div>
<nav className="sticky top-0 z-50 w-full shadow-md bg-white text-black">
        <div className="flex items-center w-full p-4">
        <div className="font-bold text-xl mr-8">STAYNET</div>
        <ul className="flex space-x-4 flex-1">
            <li className="bg-gray-800 text-white px-3 py-2 rounded font-bold">HOME</li>
            <li>
            <a href="/about" className=" px-3 py-2 rounded transition duration-300 ">ABOUT</a>
            </li>
            <li>
            <a href="/latest" className=" px-3 py-2 rounded transition duration-300">LATEST</a>
            </li>
            <li>
            <a href="/popular" className=" px-3 py-2 rounded transition duration-300">POPULAR</a>
            </li>
            <li>
            <a href="/book" className=" px-3 py-2 rounded transition duration-300">BOOK NOW</a>
            </li>
        </ul>
        <div className="flex items-center space-x-4">
            <button className="px-3 py-2 rounded transition duration-300 ">Sign In</button>
            <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 text-black"
            />
        </div>
        <div>
            <a href="/profile" className="px-3 py-2 rounded transition duration-300 flex flex-col justify-center items-center gap-1 hover:bg-gray-200">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            </a>
        </div>
        </div>
    </nav>
    {/* Content below the navigation bar */}
    </div>

);
}

export default NavigationBar;
