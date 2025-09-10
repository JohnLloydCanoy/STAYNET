import React from 'react';
import NavigationBar from './NavigationBar';
import bgImage from '../assets/BG-Home.png';
import "./CSS/Home.css";

const Home: React.FC = () => {
    return (
        <div>
            <main className="flex flex-col items-center justify-center p-4 min-h-screen text-white bg-cover bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${bgImage})`}}>
        <h1 style={{ fontSize: '50px', color: 'black' , fontWeight: 'bold'}} className="text-2xl font-bold-black">Welcome to STAYNET</h1>
        <p style={{ fontSize: '30px', color: 'black' }} className="mt-2 font-bold-black">Your one-stop solution for all your needs.</p>
    </main>
    {/** Input the Recent Boarding House */}
    <section id="recent" className="p-4 min-h-screen ">
        <h1 className="text-xl font-bold">Recent Boarding Houses</h1>
        <ul className="mt-2 ">
            <li className="  py-2">Boarding House 1</li>
            <li className=" py-2">Boarding House 2</li>
            <li className="  py-2">Boarding House 3</li>
        </ul>
    </section>
    <section className="p-4 min-h-screen">
        <h1 className="text-xl font-bold">Featured Boarding Houses</h1>
        <ul className="mt-2">
            <li className="  py-2">Boarding House 3</li>
            <li className="  py-2">Boarding House 4</li>
            <li className="  py-2">Boarding House 5</li>
        </ul>
    </section>
        </div>
    );
};

export default Home;