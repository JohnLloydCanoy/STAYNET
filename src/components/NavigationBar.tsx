import { useState } from "react";


interface NavigationBarProps {
    onHomeClick: () => void;
    onAboutClick: () => void;
    onBookNowClick?: () => void;
}

function NavigationBar({ onHomeClick, onAboutClick, onBookNowClick }: NavigationBarProps) {
    const [searchPlaceholder, setSearchPlaceholder] = useState("Search");
    const handleSearchFocus = () => setSearchPlaceholder("");
    const handleSearchBlur = () => setSearchPlaceholder("Search");
    return (
    <div className="navigation-bar sticky top-0 z-50 bg-white shadow-md">
        <nav>
        <div className="flex items-center w-full p-4">
            <div className="font-bold text-xl mr-8">STAYNET</div>
            <ul className="flex space-x-4 flex-1 ">
            <li className="px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">
                <button onClick={onHomeClick}>HOME</button>
            </li>
            <li>
                <button onClick={onAboutClick} className="px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">ABOUT</button>
            </li>
            <li>
                <button onClick={onBookNowClick} className="px-3 py-2 rounded transition duration-300 hover:bg-gray-800 hover:text-white">BOOK NOW</button>
            </li>
            </ul>
        <div className="flex items-center space-x-4">
            <button id="signin-button" className="px-3 py-2 rounded transition duration-300 ">
            <a href="/signin" className="hover:underline">Sign In</a>
            </button>
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
    </div>
    );
}

export default NavigationBar;