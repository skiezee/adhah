import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailKeindahanTradisi() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/dashboard"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-keindahan-tradisi.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-[26px]">Informasi Budaya:</p>
                        <p className="font-bold text-[48px]">Keindahan Tradisi</p>
                        <div className="m-24 text-[#555555] w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Perjalanan merunut sejarah dan makna di balik setiap tradisi adat membawa kita pada suatu pengalaman yang memikat, menggali kearifan nenek moyang yang masih hidup dalam setiap seremoni dan ritual. Keindahan tradisi tidak hanya terletak pada tampilan visual yang menawan, tetapi juga pada substansi yang mengandung nilai-nilai luhur dan filosofi mendalam.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Setiap tradisi adat diwariskan dari generasi ke generasi, membentuk jalinan kesejarahan yang kaya dan kompleks. Dalam tiap langkah ritual, tersembunyi jejak-jejak perjalanan panjang nenek moyang yang mencerminkan identitas budaya sebuah komunitas. Dari tarian hingga upacara keagamaan, setiap gerakan dan ungkapan memiliki cerita tersendiri yang menandai perjalanan waktu.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Ketika kita menyelami tradisi, kita akan menemukan kearifan nenek moyang yang telah teruji seiring berjalannya waktu. Setiap elemen tradisi mengandung hikmah dan nilai-nilai moral yang telah menjadi panduan bagi masyarakat sejak zaman dahulu. Sebuah persembahan tari tidak hanya sekadar gerakan indah, tetapi juga menyiratkan keseimbangan hidup dan harmoni dengan alam.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Keindahan tradisi tidak hanya tercermin pada saat perayaan, tetapi juga dalam keseharian masyarakat yang menjunjung tinggi nilai-nilai adat. Setiap sikap hormat dan kesopanan merupakan manifestasi dari kearifan nenek moyang yang telah diwariskan dengan penuh kasih sayang. Dalam tradisi, kita belajar untuk menghargai sejarah dan menghormati orang-orang yang datang sebelum kita.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Seiring dengan zaman yang terus berubah, keindahan tradisi adat menjadi semakin berharga. Tradisi bukan hanya sekadar nostalgia, tetapi juga sebagai perekat identitas dan fondasi keberlanjutan budaya. Mempelajari dan merayakan tradisi adat mengajarkan kita untuk menghargai keanekaragaman dan merangkul warisan budaya sebagai bagian tak terpisahkan dari perjalanan hidup manusia.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami/>

        </>
    )
}