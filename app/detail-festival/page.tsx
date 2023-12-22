import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailFestival() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/dashboard"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-festival.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-[26px]">Mengenal Festival Adat:</p>
                        <p className="font-bold text-[48px]">Memahami Rituil Kebudayaan Lokal</p>
                        <div className="m-24  text-[#555555] w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Festival adat adalah perayaan kebudayaan yang diwariskan dari generasi ke generasi, mencerminkan identitas dan nilai-nilai masyarakat setempat. Festival ini tidak hanya menyajikan hiburan, tetapi juga menggambarkan kearifan lokal, kepercayaan, dan tradisi yang telah terpelihara selama bertahun-tahun. Artikel ini akan membahas esensi dan makna di balik festival adat, serta bagaimana ritual kebudayaan lokal menjadi wahana untuk memahami sejarah dan keberagaman budaya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Festival adat menjadi jendela ke dunia identitas dan kearifan lokal. Setiap ritual yang dijalankan, baik itu tarian, musik, maupun upacara adat, mencerminkan cerita sejarah suatu masyarakat. Misalnya, festival panen di banyak daerah Indonesia bukan hanya merayakan hasil bumi, tetapi juga menjadi ungkapan syukur dan rasa hormat kepada alam.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Festival adat berfungsi sebagai warisan budaya yang hidup. Melalui ritual-ritual yang diadakan, tradisi dan kepercayaan turun-temurun tetap terjaga. Misalnya, di daerah Bali, festival Ogoh-Ogoh tidak hanya menjadi pesta rakyat yang meriah, tetapi juga mencerminkan perlawanan terhadap kejahatan dan keseimbangan alam yang dijaga oleh masyarakat setempat.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Festival adat menjadi momen penting untuk mempererat hubungan sosial dan kekerabatan. Masyarakat lokal berkumpul, saling berinteraksi, dan merayakan bersama-sama, memperkuat ikatan sosial di antara mereka. Ritual-ritual khusus sering kali melibatkan partisipasi seluruh komunitas, menciptakan rasa persatuan dan kebersamaan yang kuat.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Festival adat juga menjadi daya tarik pariwisata budaya. Wisatawan dapat merasakan langsung kekayaan budaya suatu daerah melalui partisipasi dalam festival adat. Ini menciptakan kesempatan untuk pertukaran budaya dan pendekatan yang lebih mendalam terhadap kehidupan sehari-hari masyarakat setempat.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8  w-[90%]">
                                Mengenal festival adat adalah langkah penting dalam memahami dan menjaga keberagaman budaya Indonesia. Ritual-ritual yang dijalankan bukan hanya menyajikan pertunjukan visual yang menakjubkan, tetapi juga mengandung makna mendalam yang mencerminkan kearifan lokal. Dengan memahami dan menghargai festival adat, kita dapat turut menjaga dan melestarikan kekayaan budaya yang menjadi identitas bangsa, serta memastikan bahwa warisan ini terus hidup dan diwariskan ke generasi mendatang.                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />

        </>
    )
}