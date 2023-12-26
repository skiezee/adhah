import Link from "next/link"

const LandingPage = () => {

    return (
        <main className="h-screen bg-[url('/landing-1.5.webp')] bg-[#FAFAFA] flex">
            {/* bagian awal landing */}
            <div className="animate-fade-up animate-duration-[1500ms] my-auto lg:text-center lg:mx-auto">
                <div className="mt-16 p-6 lg:p-16 ">
                    <h5 className="text-[#3A170D] text-[44px] lg:text-[56px] font-bold ">Merayakan Kebudayaan dalam Kehidupan</h5>
                    <p className="text-[18px] lg:text-[20px] text-[#FAFAFA] lg:text-center lg:mx-auto font-normal mt-8 lg:mt-16 leading-tight lg:w-[60%]">Buka pintu menuju keajaiban budaya Nusantara. Merayakan kekayaan warisan bangsa dalam perjalanan yang memukau melalui berbagai lapisan tradisi, seni, dan cerita yang membuat Indonesia begitu istimewa.</p>
                    <Link href='/tentang-kami'>
                        <button className="bg-[#3A170D] mt-10 p-4 w-[190px] lg:w-[243px] lg:h-16 rounded-[10px] lg:rounded-2xl text-white font-normal text-[16px] lg:text-[20px]">Tentang Kami</button>
                    </Link>
                </div>
            </div>
            {/* bagian awal landing */}

        </main>
    )
}

export default LandingPage