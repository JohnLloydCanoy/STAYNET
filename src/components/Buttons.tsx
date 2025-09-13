import React from "react";

interface ButtonsProps {
    scrollLeft: () => void;
    scrollRight: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ scrollLeft, scrollRight }) => {
    return (
        <>
            <button 
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-5 shadow-lg hover:shadow-xl z-10 hover:shadow-xl z-10 hover:shadow-round-gradient-to-r hover:shadow-gray-500"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={scrollRight}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-5 shadow-lg hover:shadow-xl z-10 hover:shadow-round-gradient-to-r hover:shadow-gray-500"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </>
    );
};

export default Buttons;