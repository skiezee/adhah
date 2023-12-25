

const LandingSevenPage = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between mb-20 -mt-12">
                <div className="animate-fade-right animate-once animate-duration-[1500ms] flex flex-col justify-center h-screen mx-auto lg:mt-24 lg:mt-0 lg:mb-12 lg:mb-0 lg:m-12 lg:mt-20">
                    <div className="">
                        <p className="font-bold text-2xl text-[#333333] mb-2">Lokasi Kami</p>
                        <p className="text-[#555555] font-normal text-lg">Purwokerto, 53127</p>
                        <p className="text-[#555555] font-normal text-lg">Banyumas, Jawa Tengah</p>
                        <p className="text-[#555555] font-normal text-lg">Indonesia</p>
                    </div>
                    <div className="my-16">
                        <p className="font-bold text-2xl text-[#333333] mb-2">Telepon</p>
                        <p className="text-[#555555] font-normal text-lg">+62 812 2334 4556</p>
                        <p className="text-[#555555] font-normal text-lg">+62 823 3445 5667</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-2xl text-[#333333] mb-2">Surel</p>
                        <p className="text-[#555555] font-normal text-lg">info@adhah.com</p>
                        <p className="text-[#555555] font-normal text-lg">developer@adhah.com</p>
                    </div>
                </div>
                <iframe src="https://maps.google.com/maps?q=purwokerto+utara&t=&z=13&ie=UTF8&iwloc=&output=embed" className="animate-fade-left animate-once animate-duration-[1500ms] w-[100%] h-[400px] lg:w-[50%] lg:h-screen xl:h-[818px] 2xl:h-[913px]"></iframe>
            </div>
        </>
    )
}

export default LandingSevenPage 