import React from 'react';
import bgImage from './assets/BG-Home.png';
import Options from './components/Option';

const Home: React.FC = () => {
    return (
        <div>
            <main className="flex flex-col items-center justify-center p-4 min-h-screen text-white bg-cover bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${bgImage})`}}>
        <h1 style={{ fontSize: '50px', color: 'black' , fontWeight: 'bold'}} className="text-2xl font-bold-black">Welcome to STAYNET</h1>
        <p style={{ fontSize: '30px', color: 'black' }} className="mt-2 font-bold-black">Find Your Perfect Stay, Anytime, Anywhere..</p>
    </main>
    {/** Input the Recent Boarding House */}
    <Options />
    <main className="text-3xl font-bold main h-screen">
        <h1 className="text-center">Home</h1>
        <p className="text-center">We are a team of passionate developers.</p>
        </main>
    </div>
    );
};



export default Home;