"use client"
import { Navbar } from '@nextui-org/react';
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
    const landingPageRef = useRef(null);
    const landingSecRef = useRef(null);
    const landingThirdRef = useRef(null);
    const landingFourRef = useRef(null);
    const landingFiveRef = useRef(null);
    const landingSixRef = useRef(null);
    const landingSevenRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <>
            <Navbar />
            <div className="scroll-smooth">
                <div id="LandingPage" ref={landingPageRef} className="">
                    <LandingPage />
                </div>
                <div id="LandingSec" ref={landingSecRef} className="">
                    <LandingSec />
                </div>
                <div id="LandingThird" ref={landingThirdRef} className="">
                    <LandingThird />
                </div>
                <div id="LandingFour" ref={landingFourRef} className="">
                    <LandingFour />
                </div>
                <div id="LandingFivePage" ref={landingFiveRef} className="">
                    <LandingFivePage />
                </div>
                <div id="LandingSix" ref={landingSixRef} className="">
                    <LandingSix />
                </div>
                <div id="LandingSevenPage" ref={landingSevenRef} className="">
                    <LandingSevenPage />
                </div>
                <div id="Footer" ref={footerRef} className="">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export const dashboardPage = React.createRef<HTMLDivElement>();
export default Dashboard;