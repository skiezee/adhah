"use client"
import Image from "next/image"
import Navbar from "../components/navbar/navbar"
import LandingPage from "../components/landing-page/landingPage"
import LandingSec from "../components/landing-page/landingSecPage"
import LandingThird from "../components/landing-page/landingThird"
import LandingFour from "../components/landing-page/landingFourth"
import LandingFivePage from "../components/landing-page/landingFivePage"
import LandingSix from "../components/landing-page/landingSixPage"
import LandingSevenPage from "../components/landing-page/landingSevenPage"
import Footer from "../components/landing-page/footer"
import React, { useRef } from 'react';

const Dashboard: React.FC = () => {

    const dashboardPage = useRef(null);

    return (
        <>
            <Navbar />
            <div className="scroll-smooth">
                <div className="bg-[#FAFAFA]">
                    <div id="LandingPage" ref={dashboardPage} className=""><LandingPage /></div>
                    <div id="LandingSec" ref={dashboardPage} className=""><LandingSec /></div>
                    <div id="LandingThird" ref={dashboardPage} className=""><LandingThird /></div>
                </div>
                <div id="LandingFour" ref={dashboardPage} className="">
                    <LandingFour />
                </div>
                <div id="LandingFivePage" ref={dashboardPage} className="">
                    <LandingFivePage />
                </div>
                <div id="LandingSix" ref={dashboardPage} className="">
                    <LandingSix />
                </div>
                <div id="LandingSevenPage" ref={dashboardPage} className="">
                    <LandingSevenPage />
                </div>
                <div id="Footer" ref={dashboardPage} className="">
                    <Footer />
                </div>
            </div>






        </>
    )
}
export const dashboardPage = React.createRef<HTMLDivElement>();
export default Dashboard;