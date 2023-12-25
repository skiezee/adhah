import Navbar from './components/navbar/navbar';
import Image from 'next/image';
import React, { useRef } from 'react';
import LandingPage from './components/landing-page/landingPage';
import LandingSec from './components/landing-page/landingSecPage';
import LandingThird from './components/landing-page/landingThird';
import LandingFour from './components/landing-page/landingFourth';
import LandingFivePage from './components/landing-page/landingFivePage';
import LandingSix from './components/landing-page/landingSixPage';
import LandingSevenPage from './components/landing-page/landingSevenPage';
import Footer from './components/landing-page/footer';

const Dashboard: React.FC = () => {

    
    

    return (
        <>
            <Navbar />
            <div className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
                <div id="Dashboard"  className="">
                    <LandingPage/>
                </div>
                <div id="LandingSec"  className="">
                    <LandingSec />
                </div>
                <div id="LandingThird"  className="">
                    <LandingThird />
                </div>
                <div id="LandingFour"  className="">
                    <LandingFour />
                </div>
                <div id="LandingFivePage"  className="">
                    <LandingFivePage />
                </div>
                <div id="LandingSix" className="">
                    <LandingSix />
                </div>
                <div id="LandingSevenPage"  className="">
                    <LandingSevenPage />
                </div>
                <div id="Footer" className="">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
