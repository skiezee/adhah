'use client'
import Image from "next/image"
import Link from "next/link"
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LandingFivePage extends Component {
    render() {

        return (
            <>
                <div className="m-8 lg:m-24">
                    <h1 className="font-bold text-center md:text-start text-6xl text-[#2E2E2E]">Artikel Kami</h1>
                    <div className="flex flex-row justify-center">
                        <div className="animate-fade-right animate-once animate-duration-[1500ms] hidden lg:block bg-cover bg-center lg:flex flex-col mt-10 lg:justify-center lg:w-[820px] lg:h-[752px] 2xl:w-[1280px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/tari.webp')] relative">
                            <div className="bg-[#3A170D] rounded-tl-2xl rounded-tr-2xl absolute inset-x-0 bottom-0 flex flex-row items-end justify-between">
                                <div className="flex flex-col text-white p-8">
                                    <p className="font-normal text-base text-[#E6E6E6]">Merayakan Harmoni</p>
                                    <p className="font-bold text-2xl mt-4">Seni Tari Tradisional Nusantara</p>
                                </div>
                                <Link href='/detail-seni-tari' className="my-auto mr-8">
                                    <Image src='/arrow-right.svg' alt="arrow" width={17} height={29} loading="lazy" />
                                </Link>

                            </div>
                        </div>

                        <div className="animate-fade-up animate-once animate-duration-[1500ms] lg:mx-12 grid grid-cols-1 gap-1 md:grid md:grid-cols-2 md:gap-1 lg:grid lg:grid-cols-1 gap-1">
                            <div className="block lg:hidden bg-cover bg-center  lg:flex flex-col mt-10 lg:justify-center  lg:w-[400px] h-[240px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/tari.svg')] relative">
                                <div className="bg-[#3A170D] h-20 lg:h-0 rounded-tl-2xl rounded-tr-2xl absolute inset-x-0 bottom-0 flex flex-row items-end justify-between">
                                    <div className="flex flex-col text-white ml-4 lg:ml-0 p-[12px] lg:p-8">
                                        <p className="font-normal text-xs lg:text-base text-[#E6E6E6]">Merayakan Harmoni</p>
                                        <p className="font-bold text-base lg:text-xl lg:mt-4">Seni Tari Tradisional Nusantara</p>
                                    </div>
                                    <Link href='/detail-seni-tari' className="my-auto mr-8">
                                        <Image src='/arrow-right.svg' alt="arrow" width={17} height={29} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="animate-fade-left animate-once animate-duration-[1500ms] sm:mx-0 md:mx-8 lg:mx-0 bg-cover bg-center  lg:flex flex-col mt-10 lg:justify-center lg:w-[400px] h-[240px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/kuliner.svg')] relative">
                                <div className="bg-[#3A170D]  h-30  md:h-[100px] lg:h-[60%] rounded-tl-2xl rounded-tr-2xl absolute inset-x-0 bottom-0 flex flex-row items-end justify-between">
                                    <div className="flex flex-col text-white ml-4 lg:ml-0 p-[12px] lg:p-8">
                                        <p className="font-normal text-xs lg:text-base text-[#E6E6E6]">Kuliner Khas Indonesia</p>
                                        <p className="font-bold text-base lg:text-xl lg:mt-4">Jejak Rasa dari Sabang sampai Merauke</p>
                                    </div>
                                    <Link href='/detail-kuliner' className="my-auto mr-8">
                                        <Image src='/arrow-right.svg' alt="arrow" width={17} height={29} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="animate-fade-up animate-once animate-duration-[1500ms] bg-cover bg-center lg:flex flex-col mt-4 lg:justify-center lg:w-[400px] h-[240px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/wanita.svg')] relative">
                                <div className="bg-[#3A170D]  h-30 md:h-[120px] lg:h-[60%] rounded-tl-2xl rounded-tr-2xl absolute inset-x-0 bottom-0 flex flex-row items-end justify-between">
                                    <div className="flex flex-col text-white ml-4 lg:ml-0 p-[12px] lg:p-8">
                                        <p className="font-normal text-xs lg:text-base text-[#E6E6E6]">Wanita Indonesia</p>
                                        <p className="font-bold text-base lg:text-xl lg:mt-4 ">Pencapaian dan Kekuatan di Balik Kebudayaan</p>
                                    </div>
                                    <Link href='/detail-wanita' className="my-auto mr-8">
                                        <Image src='/arrow-right.svg' alt="arrow" width={17} height={29} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="animate-fade-left animate-once animate-duration-[1500ms] sm:mx-0 md:mx-8 lg:mx-0 bg-cover bg-center lg:flex flex-col mt-4 lg:justify-center w-[250px] lg:w-[400px] h-[240px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/festival.svg')] relative">
                                <div className="bg-[#3A170D] h-20 md:h-[100px] lg:h-[60%] rounded-tl-2xl rounded-tr-2xl absolute inset-x-0 bottom-0 flex flex-row items-end justify-between">
                                    <div className="flex flex-col text-white ml-4 lg:ml-0 p-[12px] lg:p-8">
                                        <p className="font-normal text-xs lg:text-base text-[#E6E6E6]">Mengenal Festival Adat</p>
                                        <p className="font-bold text-base lg:text-xl lg:mt-4">Memahami Rituil Kebudayaan Lokal</p>
                                    </div>
                                    <Link href='/detail-festival' className="my-auto mr-8">
                                        <Image src='/arrow-right.svg' alt="arrow" width={17} height={29} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </>
        )
    }
}

