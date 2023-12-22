import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="relative w-full bg-gradient-to-b from-[#E2D9D0] to-[#033A170D] -mt-24">
                <div className="lg:flex lg:justify-between p-8 lg:p-24">
                    <div className="">
                        <Image
                            src="/logo-adhah.png"
                            alt="Vercel Logo"
                            width={168}
                            height={40}
                            priority
                        />
                        <p className="text-[#808080] mt-10 w-[296px]">Merayakan Kebudayaan, dalam Kehidupan</p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <p className="font-bold text-base text-[#2E2E2E]">Get in Touch</p>
                        <div className="flex flex-row mt-4">
                            <Image
                                src="/loc.svg"
                                alt="Vercel Logo"
                                width={14}
                                height={19}
                                priority
                            />
                            <p className="ml-4 text-[#808080]">Purwokerto, 53127 Banyumas, Jawa Tengah</p>
                        </div>
                        <div className="flex flex-row mt-4">
                            <Image
                                src="/mail.svg"
                                alt="Vercel Logo"
                                width={16}
                                height={19}
                                priority
                            />
                            <p className="ml-4 text-[#808080] ">info@adhah.com</p>
                        </div>
                        <div className="flex flex-row mt-4">
                            <Image
                                src="/telepon.svg"
                                alt="Vercel Logo"
                                width={16}
                                height={19}
                                priority
                            />
                            <p className="ml-4 text-[#808080] ">+62 812 2334 4556</p>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <p className="font-bold text-base text-[#2E2E2E]">Recent Post</p>
                        <div className="flex flex-row mt-4">
                            <div className="bg-[url('/tari-footer.png')] w-[57px] h-[48px]"></div>
                            <p className="ml-4 text-[#808080] w-[218px]">Merayakan Harmoni: Seni Tari Tradisional Nusantara</p>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="bg-[url('/kuliner-footer.png')] w-[57px] h-[48px] my-auto"></div>
                            <p className="ml-4 text-[#808080] w-[218px]">Kuliner Khas Indonesia: Jejak Rasa dari Sabang sampai Merauke</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer