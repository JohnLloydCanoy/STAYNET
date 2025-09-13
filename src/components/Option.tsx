import React from 'react';
import "./CSS/Options.css";
import { useRef } from 'react';
import Buttons from './Buttons';
import HouseOption from './HouseOption.tsx';
import Dorm from '../assets/DormPic.jpg';

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
                                <h1 className="inline-block px-4 py-2 rounded bg-gray-800 text-white"> HOT OFFERS</h1>
                                <div className="relative">
                                    <Buttons scrollLeft={scrollLeft} scrollRight={scrollRight} />
                                    <ul 
                                        ref={scrollContainerRef}
                                        className="mt-2 flex gap-5 overflow-x-auto scrollbar-hide"
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                    >

                                        <li id='House'>
                                            <img src={Dorm} alt="Dorm" className="w-full h-full object-cover" />
                                            <p id="type">Dorm</p>
                                            <h2 className="text-lg font-semibold"> JL Boarding House Co.</h2>
                                            <p>Later nani</p>
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>
                                        <li id='House'>
                                            <img src={Dorm}  />
                                        </li>

                                    </ul>
                                </div>
                            </section>
                        </div>
                    );
                }
export default Options;
