"use client"
import Image from "next/image"
import Navbar from "./components/navbar/navbar";

import React, { useRef } from 'react';
import LandingPage from "./components/landing-page/landingPage";
import LandingSec from "./components/landing-page/landingSecPage";
import LandingThird from "./components/landing-page/landingThird";
import LandingFour from "./components/landing-page/landingFourth";
import LandingFivePage from "./components/landing-page/landingFivePage";
import LandingSix from "./components/landing-page/landingSixPage";
import LandingSevenPage from "./components/landing-page/landingSevenPage";
import Footer from "./components/landing-page/footer";

const Dashboard: React.FC = () => {

    const landingPageRef = useRef(null);

    return (
        <>
            <Navbar />
            <div className="scroll-smooth">
                <div className="bg-[#FAFAFA]">
                    <div id="LandingPage" ref={landingPageRef} className=""><LandingPage /></div>
                    <div id="LandingSec" ref={landingPageRef} className=""><LandingSec /></div>
                    <div id="LandingThird" ref={landingPageRef} className=""><LandingThird /></div>
                </div>
                <div id="LandingFour" ref={landingPageRef} className="">
                    <LandingFour />
                </div>
                <div id="LandingFivePage" ref={landingPageRef} className="">
                    <LandingFivePage />
                </div>
                <div id="LandingSix" ref={landingPageRef} className="">
                    <LandingSix />
                </div>
                <div id="LandingSevenPage" ref={landingPageRef} className="">
                    <LandingSevenPage />
                </div>
                <div id="Footer" ref={landingPageRef} className="">
                    <Footer />
                </div>
            </div>






        </>
    )
}
export const landingPageRef = React.createRef<HTMLDivElement>();
export default Dashboard;