import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailSeniTeri() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-tari.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-[26px]">Merayakan Harmoni:</p>
                        <p className="font-bold text-[48px]">Seni Tari Tradisional Nusantara</p>
                        <div className="m-24 text-[#555555] w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Seni tari tradisional di Nusantara memegang peran utama dalam mewariskan kekayaan budaya dari satu generasi ke generasi berikutnya. Setiap suku dan daerah di Indonesia memiliki tarian khasnya sendiri yang merefleksikan sejarah, tradisi, dan keunikan budaya mereka. Tarian ini tidak sekadar gerakan tubuh, melainkan juga sarana untuk menyampaikan cerita, nilai-nilai, dan makna mendalam yang melekat dalam kehidupan masyarakatnya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Keanekaragaman Indonesia tercermin dalam beragam tarian tradisionalnya. Contoh yang mencolok termasuk Tari Pendet yang anggun dari Bali, Tari Saman yang penuh semangat dari Aceh, dan Tari Tor-Tor yang meriah dari Sumatera Utara. Masing-masing tarian ini memiliki gerakan yang unik, kostum yang khas, dan musik pengiring yang memikat, menciptakan suatu keindahan yang memukau dan khas bagi daerahnya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">

                                Tarian tradisional Nusantara tidak hanya sekadar hiburan visual, tetapi juga menyimpan makna filosofis yang mendalam. Beberapa tarian menggambarkan mitologi atau cerita rakyat, sementara yang lain mencerminkan kehidupan sehari-hari dan hubungan manusia dengan alam. Melalui gerakan yang penuh simbolisme, seni tari tradisional menjadi medium penting untuk mentransmisikan nilai-nilai dan pesan budaya dari satu generasi ke generasi berikutnya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">

                                Meskipun seni tari tradisional Nusantara memiliki warisan budaya yang kaya, pelestariannya dihadapkan pada berbagai tantangan. Modernisasi dan globalisasi dapat mengancam kelangsungan tarian tradisional ini. Oleh karena itu, perlu adanya upaya kolaboratif dari berbagai pihak, termasuk seniman, pendidik, dan pemerintah, untuk melestarikan kekayaan ini. Dengan mendukung pendidikan seni tari tradisional dan menggali potensi kerja sama lintas sektor, kita dapat memastikan bahwa keindahan dan makna dari seni tari tradisional Nusantara terus bersinar dalam sejarah budaya Indonesia.                            </p>

                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />

        </>
    )
}