import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"


export default function DetailWawancaraBudayawan() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-budayawan.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-[26px]">Informasi Budaya:</p>
                        <p className="font-bold text-[48px]">Wawancara Budayawan</p>
                        <div className="m-24 text-[#555555]">
                            <p className="text-left font-normal text-[20px] w-[100%]">
                                Cerita dan pandangan langsung dari tokoh budaya menjadi jendela yang terbuka lebar untuk memahami dengan lebih dalam perjalanan melestarikan warisan budaya Indonesia. Salah satu pilar utama yang mengemban tugas mulia ini adalah Didik Nini Thowok, seorang budayawan ulung yang telah mengabdikan diri dalam mempertahankan kekayaan budaya Indonesia. Melalui wawancara eksklusif, kita akan menapak tilas perjalanan dan visi beliau yang telah memberikan kontribusi besar dalam menjaga keberlanjutan kearifan lokal.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8">
                                Didik Nini Thowok bukan hanya seorang seniman tari dan dalang, melainkan juga seorang pejuang budaya yang tulus. Sejak awal karirnya, beliau telah berkomitmen untuk melestarikan seni tradisional Indonesia yang kaya akan nuansa spiritual dan filosofis. Dalam wawancara ini, beliau akan berbagi pengalaman pribadi, inspirasi, dan visinya tentang bagaimana kita semua dapat turut serta menjaga keberagaman budaya Indonesia.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8">
                                Ketika ditanya tentang peranannya dalam melestarikan warisan budaya, Didik Nini Thowok mengungkapkan,
                                Saya melihat diri saya sebagai penjaga api suci tradisi. Bagi saya, seni tradisional adalah nyawa bangsa kita. Tanpa seni, kita kehilangan identitas dan akar yang menghubungkan kita dengan nenek moyang. Oleh karena itu, saya berkomitmen untuk terus mengajarkan dan memperkenalkan kekayaan seni tradisional kepada generasi muda.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8">
                                Dalam perbincangan lebih lanjut, Didik Nini Thowok juga membagikan visinya tentang bagaimana memasukkan unsur-unsur tradisional ke dalam dinamika modern. Kita tidak boleh melihat seni tradisional sebagai sesuatu yang kuno atau usang. Sebaliknya, kita harus menghargainya sebagai sumber kebijaksanaan dan keindahan. Dengan menyelaraskan seni tradisional dengan perkembangan zaman, kita dapat menciptakan kesinambungan yang harmonis antara masa lalu dan masa kini, ujarnya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8">
                                Wawancara dengan Didik Nini Thowok juga mengupas tentang tantangan yang dihadapi dalam usahanya melestarikan warisan budaya. Salah satu tantangan utama adalah ketidakpedulian terhadap seni tradisional. Banyak generasi muda lebih tertarik pada hal-hal modern dan lupa akan kekayaan budaya yang ada di sekitar mereka. Oleh karena itu, kita perlu membangkitkan rasa cinta dan kebanggaan terhadap seni tradisional, tutur Didik Nini Thowok dengan penuh semangat.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8">
                                Wawancara ini bukan sekadar jendela bagi kita untuk melihat perjalanan Didik Nini Thowok sebagai budayawan, tetapi juga sebagai panggilan untuk bersama-sama menjaga dan merawat keberlanjutan warisan budaya Indonesia. Dalam setiap kata-kata dan cerita, Didik Nini Thowok memberikan inspirasi untuk terus bersatu dalam menjaga kearifan nenek moyang, menjadikannya pelita yang terang dalam kegelapan waktu.
                            </p>
                        </div>



                    </div>
                </div>
            </div>
            <FooterTentangKami />
        </>
    )
}