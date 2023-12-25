import Image from "next/image"




const LandingSec = () => {
    return (
        <>
            {/* bagian kedua landing */}
            <div className="flex flex-row justify-center -mt-12 lg:mt-16 p-16 max-width-[100%]">
                <div className="flex flex-col">
                    <div className=" animate-fade-right animate-once  animate-duration-[1500ms] bg-[#FFFFFF] w-[100%] mx-auto w-[300px] mt-8 sm:w-[500px] md:w-[700px] lg:w-[925px] h-[220px] lg:h-[575px] rounded-2xl shadow-2xl flex flex-col justify-center">
                        <div className="p-8 mt-12 lg:p-24 ">
                            <div className="flex flex-row-reverse items-start">
                                <div>
                                    <h1 className="text-[#333333] font-semibold text-base lg:text-5xl lg:leading-6 -mt-16">Membingkai Budaya di </h1>
                                    <h1 className="text-[#333333]  lg:mt-6 font-bold text-2xl lg:text-6xl">Adhah Indonesia </h1>
                                    <p className="text-[#555555] mt-4 lg:mt-12 text-xs lg:text-xl font-normal max-w-96 lg:w-9/12">Selamat datang di Adhah Indonesia, di mana semangat kami dalam merawat keberagaman budaya Nusantara bertemu dengan komitmen terhadap inovasi. Temukan kisah perjalanan, misi, dan tim berdedikasi kami yang mendorong transformasi dalam dunia kebudayaan.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="animate-fade-up animate-once  animate-duration-[1500ms] flex justify-center lg:justify-start mt-6 lg:mt-12 max-width: 100%">
                        <div className="text-center mx-12   md:mx-8 lg:mx-4">
                            <h1 className="font-extrabold text-base lg:text-5xl">06</h1>
                            <h1 className="font-bold text-xs lg:text-xl text-[#BBBBBB]">MISI KEBUDAYAAN</h1>
                        </div>
                        <div className="text-center mx-12 sm:mx-4 md:mx-8 lg:mx-4">
                            <h1 className="font-extrabold text-base lg:text-5xl">22</h1>
                            <h1 className="font-bold text-xs lg:text-xl text-[#BBBBBB]">PENGHARGAAN</h1>
                        </div>
                    </div>
                <Image src='/gunung responsive.png' alt="gunung" width={680} height={427} className="block lg:hidden mx-auto mt-8 w-[300px] sm:w-[600px] md:w-[680px]"/>
                </div>


                <div className="animate-fade-left animate-once  animate-duration-[1500ms] max-width: 100% lg:ml-[-15%] mt-24 z-10 relative flex items-center">
                    <div className="hidden lg:block flex flex-col items-center justify-center bg-[#3A170D] mx-auto mt-[-10%] rounded-xl  w-[295px] h-[199px] absolute top-1 left-1/2 lg:transform -translate-x-1/2 -translate-y-8">
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className="text-center text-white font-bold text-4xl lg:text-6xl">
                                4+
                            </p>
                            <p className="text-white text-center font-medium text-xs lg:text-base">Years of experiences</p>
                        </div>
                    </div>

                    <Image
                        src='/mountain.png'
                        alt="mountain"
                        width={400}
                        height={0}
                        className="hidden lg:block"
                    />
                </div>
            </div>
            {/* bagian kedua landing */}



        </>
    )
}

export default LandingSec