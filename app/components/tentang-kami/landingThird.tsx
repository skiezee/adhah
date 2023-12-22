import Image from "next/image"



export default function LandingThirdTentangKami() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#3A170D] to-[#DBA75B] pb-10">
                <div className="flex flex-col lg:flex-row lg:justify-between text-white m-12 lg:m-24 py-8 lg:py-12">
                    <div className="">
                        <p className="font-semibold text-2xl lg:text-5xl">
                            Tim Pengembang
                        </p>
                        <p className="font-bold text-3xl lg:text-6xl mt-2 lg:mt-6">Adhah Indonesia</p>
                    </div>
                    <p className="w-[100%] lg:w-[50%] font-normal mt-4 lg:mt-0 lg:text-xl">
                        Tim pengembang Adhah Indonesia yang menyatukan bakat kreatif dengan dedikasi untuk memperkaya dan memperluas pengalaman budaya. Bersama, kami merangkul tantangan teknologi dengan tujuan menghidupkan dan melestarikan kekayaan budaya Nusantara.                            </p>
                </div>

                <div className="grid grid-cols-1 gap-4  md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:flex lg:justify-betweeen m-12 lg:m-24">
                    <div className="relative md:w-[300px] lg:w-[100%]  bg-white rounded-2xl overflow-hidden shadow-lg ">
                        <Image src="/musyafa.png" alt="Sunset in the mountains" className="w-[100%]" width={400} height={359} />
                        <div className="px-6 py-8 text-center">
                            <div className="font-bold text-2xl mb-2 ">Musyafa Fadila</div>
                            <p className="text-[#555555] text-base mt-4">Front End Developer</p>
                        </div>
                    </div>
                    <div className="relative md:w-[300px] lg:w-[100%]  bg-white rounded-2xl overflow-hidden shadow-lg ">
                        <Image src="/rayya.png" alt="Sunset in the mountains" className="w-[100%]" width={400} height={359} />
                        <div className="px-6 py-8 text-center">
                            <div className="font-bold text-2xl mb-2 ">Ratu Rayya</div>
                            <p className="text-[#555555] text-base mt-4">UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="relative md:w-[300px] lg:w-[100%] xl-[400px] bg-white rounded-2xl overflow-hidden shadow-lg ">
                        <Image src="/dio.png" alt="Sunset in the mountains" className="w-[100%]" width={400} height={359} />
                        <div className="px-6 py-8 text-center">
                            <div className="font-bold text-2xl mb-2 ">Dio Gilbran</div>
                            <p className="text-[#555555] text-base mt-4">Illustrator</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}