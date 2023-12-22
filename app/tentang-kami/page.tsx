'use client'
import Image from "next/image"
import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Landing from "../components/tentang-kami/landing";
import LandingSecTentangKami from "../components/tentang-kami/landingSec";
import LandingThirdTentangKami from "../components/tentang-kami/landingThird";
import FooterTentangKami from "../components/footer/footer";

export default class TentangKami extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="">
                <Landing/>
                <LandingSecTentangKami/>
                <LandingThirdTentangKami/>
                <FooterTentangKami/>
            </div>
            </>
        )
    }

}
