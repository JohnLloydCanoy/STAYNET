import React from 'react';
import "./CSS/Options.css";
import { useRef } from 'react';
import Buttons from './Buttons';

                const Options: React.FC = () => {
                    const scrollContainerRef = useRef<HTMLUListElement>(null);

                    const scrollLeft = () => {
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                        }
                    };

                    const scrollRight = () => {
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                        }
                    };

                    return (
                        <div>
                            <section id="recent" className="p-4 min-h-screen ">
                                <h1 className="text-xl font-bold">Recent Boarding Houses</h1>
                                <div className="relative">
                                    <Buttons scrollLeft={scrollLeft} scrollRight={scrollRight} />
                                    <ul 
                                        ref={scrollContainerRef}
                                        className="mt-2 flex gap-3 overflow-x-auto scrollbar-hide"
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                    >
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 1</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 2</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 3</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 4</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 5</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 6</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 7</li>
                                        <li className="border w-80 h-80 flex items-center justify-center py-2 flex-shrink-0">Boarding House 8</li>
                                    </ul>
                                </div>
                                <h1 className="text-xl font-bold">Featured Boarding Houses</h1>
                                <ul className="mt-2 grid grid-cols-1 gap-3 overflow-x-auto">
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 3</li>
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 4</li>
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 5</li>
                                </ul>
                            </section>
                            <section className="p-4 min-h-screen">
                                <h1 className="text-xl font-bold">Featured Boarding Houses</h1>
                                <ul className="mt-2 grid grid-cols-1 gap-3 overflow-x-auto">
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 3</li>
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 4</li>
                                    <li className="border w-80 h-80 flex items-center justify-center  py-2">Boarding House 5</li>
                                </ul>
                            </section>
                        </div>
                    );
                }
export default Options;
