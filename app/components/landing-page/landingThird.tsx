'use client'
import Image from "next/image"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LandingThird extends Component {
    render() {

        const budaya = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 1010,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 886,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <>
                {/* bagian ketiga landing */}
                <div className="relative bg-gradient-to-r from-[#3A170D] to-[#DBA75B]  lg:mt-0 lg:mb-24 pb-10 ">
                    <div className="lg:m-12 lg:m-24 ">
                        <div className="m-8 lg:flex lg:flex-row md:flex md:flex-col justify-between text-white m-12 lg:m-24 py-8 lg:py-12">
                            <div className="animate-fade-right animate-once animate-duration-[1500ms] mt-8 lg:mt-12">
                                <p className="font-semibold text-2xl lg:text-5xl">Melek Budaya,</p>
                                <p className="font-bold text-3xl lg:text-6xl mt-2 lg:mt-6">Bersama Kami.</p>
                            </div>
                            <p className="animate-fade-left animate-once animate-duration-[1500ms] w-[100%] lg:w-[50%] font-normal lg:text-xl mt-6 lg:mt-12">
                                Memahami dan meresapi keanekaragaman warisan budaya yang membangun identitas kita. Mulai petualangan kebudayaan, di mana setiap langkah membawa Anda lebih dekat dengan keindahan tradisi, seni, dan kisah yang melibatkan hati.
                            </p>
                        </div>

                        <div className="flex justify-center mx-auto m-12 p-6 gap-2">
                            <Slider {...budaya} className="animate-fade-up animate-once animate-duration-[1500ms] grid place-items-center  w-[90%] ml-2 sm:ml-2 sm:w-[80%] md:w-[70%] md:ml-24 lg:w-[100%] 3xl:w-[80%] lg:ml-[-16px]   mb-16">
                                <div className="relative max-w-[400px]  sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] m-auto bg-white rounded-2xl overflow-hidden shadow-lg ">
                                    <Image src="/keberagaman.svg" alt="Sunset in the mountains" width={400} height={242} loading="lazy" />
                                    <div className="px-6 py-8">
                                        <div className="font-bold text-2xl mb-2 ">Menyelami Keberagaman</div>
                                        <p className="text-[#555555] text-base mt-4">
                                            Menjelajahi keindahan dan keberagaman kebudayaan Indonesia dan terhubung dengan warisan budaya yang kaya dan mendalam serta memahami tradisi nusantara.
                                        </p>
                                    </div>

                                </div>
                                <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 md:mt-0 ">
                                    <Image src="/wayang.svg" alt="Sunset in the mountains" width={400} height={242} loading="lazy" />
                                    <div className="px-6 py-8">
                                        <div className="font-bold text-2xl mb-2">Membangun Pemahaman</div>
                                        <p className="text-[#555555] text-base mt-4">
                                            Membangun pemahaman yang lebih dalam tentang kebudayaan Indonesia. Temukan kearifan lokal, nilai-nilai tradisional, dan kreativitas seni yang menghiasi kehidupan sehari-hari.
                                        </p>
                                    </div>

                                </div>
                                <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 ">
                                    <Image src="/smile.svg" alt="Sunset in the mountains" width={400} height={242} loading="lazy" />
                                    <div className="px-6 py-8">
                                        <div className="font-bold text-2xl mb-2">Aksi Positif</div>
                                        <p className="text-[#555555] text-base mt-4">
                                            Usaha melestarikan dan mempromosikan keberagaman budaya guna menciptakan dampak positif dan pengalaman berharga untuk menjaga warisan budaya Indonesia.
                                        </p>
                                    </div>

                                </div>
                                <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 ">
                                    <Image src="/melirik.svg" alt="Sunset in the mountains" width={400} height={242} loading="lazy" />
                                    <div className="px-6 py-8">
                                        <div className="font-bold text-2xl mb-2">Merayakan Keragaman</div>
                                        <p className="text-[#555555] text-base mt-4">
                                            perjalanan yang menakjubkan untuk merayakan keragaman budaya di seluruh Indonesia. Menemukan keindahan tradisi, kuliner, dan seni yang membuat Indonesia begitu istimewa                                        </p>
                                    </div>

                                </div>

                            </Slider>
                        </div>

                    </div>
                </div>
                {/* bagian ketiga landing */}

            </>
        );
    }
}