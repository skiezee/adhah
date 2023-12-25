import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailKainTradisional() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-kain.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-xl lg:text-[26px]">Informasi Budaya:</p>
                        <p className="font-bold text-2xl lg:text-[48px] mt-4">Kain Tradisional</p>
                        <div className="m-12 lg:m-24 text-[#555555] w-[90%] lg:w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Kain batik, dengan pola-pola yang khas dan warna-warna yang memukau, tidak hanya sekadar pakaian, tetapi juga simbol kekayaan budaya Indonesia. Karnaval Batik menjadi perayaan yang menggambarkan keindahan dan makna di balik kain tradisional ini, mengajak masyarakat untuk lebih menghargai serta memahami warisan nenek moyang.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Setiap tahun, Karnaval Batik diadakan sebagai wujud apresiasi terhadap seni batik yang telah diakui oleh UNESCO sebagai Warisan Budaya Tak Benda Manusia. Acara ini tidak hanya menampilkan parade busana batik terbaru, tetapi juga menghadirkan pertunjukan seni tradisional, lokakarya membuat batik, dan pameran karya seni berbasis batik.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Para peserta Karnaval Batik, dari berbagai lapisan masyarakat, berlomba-lomba menciptakan desain batik yang inovatif dan kreatif. Ini bukan hanya ajang untuk memamerkan keindahan batik, tetapi juga untuk mendorong perkembangan desain batik yang modern namun tetap mempertahankan esensi dan nilai-nilai budaya.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Melalui Karnaval Batik, masyarakat diajak untuk lebih memahami makna di balik setiap motif dan warna pada kain batik. Setiap pola memiliki cerita dan filosofi tersendiri, mencerminkan keberagaman budaya di Indonesia. Karnaval ini menjadi momen penting untuk melestarikan dan mengajarkan nilai-nilai budaya kepada generasi muda.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Selain sebagai perayaan, Karnaval Batik juga menjadi ajang untuk mendukung industri kreatif lokal. Para perajin batik, dengan keahlian mereka, ikut serta dalam acara ini untuk memamerkan produk-produk unggulan mereka. Ini tidak hanya membantu meningkatkan ekonomi lokal, tetapi juga menjadi langkah nyata dalam menjaga kelestarian warisan budaya Indonesia.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Karnaval Batik bukan hanya sekadar acara, tetapi juga sebuah perayaan kebersamaan dan kebanggaan akan identitas budaya. Dalam setiap helai kain batik yang dikibarkan, terukir cerita panjang perjalanan sejarah dan kearifan nenek moyang. Karnaval Batik memberikan warna yang lebih cerah pada kehidupan sehari-hari, mengajak kita semua untuk bersatu dalam merayakan keindahan dan makna di balik kain tradisional yang begitu istimewa.                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />

        </>
    )
}