import Image from "next/image"
import Link from "next/link"

const LandingPage = () => {

    return (
        <main className="h-screen bg-[url('/landing-1.5.png')] bg-[url('/landing.png')] bg-[#FAFAFA] flex">
            {/* bagian awal landing */}
            <div className="my-auto text-center mx-auto">
                <div className="mt-16 p-16 ">
                    <h5 className="text-[#3A170D] text-4xl lg:text-6xl font-bold leading-tight">Merayakan Kebudayaan dalam Kehidupan</h5>
                    <p className="lg:text-xl text-[#FAFAFA] text-center mx-auto font-normal mt-16 leading-tight lg:w-[60%]">Buka pintu menuju keajaiban budaya Nusantara. Merayakan kekayaan warisan bangsa dalam perjalanan yang memukau melalui berbagai lapisan tradisi, seni, dan cerita yang membuat Indonesia begitu istimewa.</p>
                    <Link href='/tentang-kami'>
                        <button className="bg-[#3A170D] mt-14 p-4 lg:w-60 lg:h-16 rounded-2xl text-white font-normal lg:text-lg">Tentang Kami</button>
                    </Link>
                </div>
            </div>
            {/* bagian awal landing */}

        </main>
    )
}

export default LandingPage