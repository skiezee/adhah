'use client'
import Image from "next/image"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class LandingSix extends Component {
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
                <div className="relative bg-[#3A170D]">

                    <div className="lg:flex lg:flex-col md:flex md:flex-col justify-between text-white m-24">
                        <div className="text-center">
                            <p className="text-[#BC8B4C] mx-auto lg:mt-24 font-semibold text-2xl">INFORMASI BUDAYA</p>
                            <p className="text-white mx-auto mt-4 font-bold text-xl lg:text-4xl">Menyelami Nusantara Melalui Informasi Budaya</p>
                            <p className="text-white lg:max-w-8xl text-center mt-16 font-normal lg:text-xl">Membuka pintu wawasan menuju keanekaragaman budaya Indonesia. Dari tradisi yang mendalam hingga kisah inspiratif, temukan setiap nuansa yang memperkaya makna dan keindahan kebudayaan Nusantara.</p>
                        </div>
                    </div>

                    <div className="flex justify-center mx-auto m-12 p-12 gap-2">
                        <Slider {...budaya} className="grid place-items-center  w-[90%] ml-2 sm:ml-2 sm:w-[80%] md:w-[70%] md:ml-24 lg:w-[100%] 3xl:w-[80%] lg:ml-[-16px]  lg:mt-10 mb-16">
                            <div className="relative max-w-[400px]  sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] m-auto bg-white rounded-2xl overflow-hidden shadow-lg ">
                                <Image src="/keindahan-tradisi.png" alt="Sunset in the mountains" width={400} height={242} />
                                <div className="px-6 py-8">
                                    <div className="font-bold text-2xl mb-2 ">Keindahan Tradisi</div>
                                    <p className="text-[#555555] text-base mt-4">
                                        Perjalanan merunut sejarah dan makna di balik setiap tradisi adat, menggali kearifan nenek moyang yang masih hidup
                                    </p>
                                </div>
                                <Link href='/detail-keindahan-tradisi'><div className="absolute bottom-12 right-8">
                                    <p className="text-[#3A170D] font-normal text-sm">Lihat selengkapnya</p>
                                </div></Link>
                            </div>
                            <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px] h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 md:mt-0 ">
                                <Image src="/seni.png" alt="Sunset in the mountains" width={400} height={242} />
                                <div className="px-6 py-8">
                                    <div className="font-bold text-2xl mb-2">Kisah Seni</div>
                                    <p className="text-[#555555] text-base mt-4">
                                        Karya seniman-seniman visioner yang menggambarkan keindahan dan kompleksitas budaya Indonesia
                                    </p>
                                </div>
                                <Link href='/detail-kisah-seni'><div className="absolute bottom-12 right-8">
                                    <p className="text-[#3A170D] font-normal text-sm">Lihat selengkapnya</p>
                                </div></Link>
                            </div>
                            <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px]  h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 ">
                                <Image src="/wawancara.png" alt="Sunset in the mountains" width={400} height={242} />
                                <div className="px-6 py-8">
                                    <div className="font-bold text-2xl mb-2">Wawancara Budayawan</div>
                                    <p className="text-[#555555] text-base mt-4">
                                        Cerita dan pandangan langsung dari tokoh budaya yang menjadi pilar utama dalam melestarikan warisan budaya Indonesia
                                    </p>
                                </div>
                                <Link href='/detail-wawancara-budayawan'><div className="absolute bottom-12 right-8">
                                    <p className="text-[#3A170D] font-normal text-sm">Lihat selengkapnya</p>
                                </div></Link>
                            </div>
                            <div className="relative max-w-[400px] sm:ml-10 md:max-w-[400px] lg:max-w-[400px]  h-[488px] bg-white rounded-2xl overflow-hidden shadow-lg lg:mt-0 ">
                                <Image src="/kain.png" alt="Sunset in the mountains" width={400} height={242} />
                                <div className="px-6 py-8">
                                    <div className="font-bold text-2xl mb-2">Kain Tradisional</div>
                                    <p className="text-[#555555] text-base mt-4">
                                        Kain batik, dengan pola-pola yang khas, tidak hanya sekadar pakaian, tetapi juga simbol kekayaan budaya Indonesia
                                    </p>
                                </div>
                                <Link href='/detail-kain-tradisional'><div className="absolute bottom-12 right-8">
                                    <p className="text-[#3A170D] font-normal text-sm">Lihat selengkapnya</p>
                                </div></Link>
                            </div>

                        </Slider>
                    </div>

                </div>
            </>
        )
    }

}
