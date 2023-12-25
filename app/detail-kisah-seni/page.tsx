import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailKisahSeni() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-kisah-seni.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-[26px]">Informasi Budaya:</p>
                        <p className="font-bold text-[48px]">Kisah Seni</p>
                        <div className="m-24 text-[#555555] w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Karya seniman-seniman visioner yang menggambarkan keindahan dan kompleksitas budaya Indonesia hadir sebagai cahaya yang menerangi lorong seni, membawa penonton pada perjalanan spiritual melalui medium visual yang memukau. Di tengah gemerlapnya dunia seni, salah satu tempat yang menjadi panggung magis bagi kisah seni Indonesia adalah Saung Angklung Udjo.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Terletak di kota Bandung, Saung Angklung Udjo bukan sekadar tempat pertunjukan seni tradisional, melainkan sebuah oasis di mana seni mengalir dalam aliran yang menghubungkan masa lalu dan masa kini. Di sini, seniman-seniman visioner meretas batas-batas konvensional, menciptakan karya-karya yang tak hanya indah secara visual, tetapi juga mengandung cerita mendalam tentang budaya yang membangkitkan semangat dan memikat hati.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Sebagai tempat yang menonjolkan seni tradisional, Saung Angklung Udjo menjadi panggung bagi seniman-seniman yang dengan penuh semangat menggambarkan kekayaan budaya Indonesia. Melalui lukisan, patung, dan instalasi seni, karya-karya ini menjadi jendela yang membuka pandangan kita pada pesona dan keragaman warisan nenek moyang. Mereka membingkai keindahan Indonesia dalam setiap sapuan kuas dan pahatan tangan mereka.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Seni di Saung Angklung Udjo bukan sekadar pameran estetika, melainkan juga refleksi mendalam tentang identitas dan perjuangan bangsa. Karya-karya seniman visioner ini menyentuh ranah budaya, sejarah, dan spiritualitas dengan kepekaan yang luar biasa. Setiap goresan menjadi dialog antara masa lalu dan masa kini, mengajak kita merenung tentang perjalanan panjang bangsa ini.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Tak hanya sebagai wadah untuk karya seni, Saung Angklung Udjo juga menjadi laboratorium kreativitas di mana seniman-seniman berbakat dapat bereksperimen dan mengekspresikan diri tanpa batas. Tempat ini menjadi saksi bisu perjalanan inspiratif para seniman visioner yang mencoba menangkap keindahan dan kompleksitas budaya Indonesia dalam setiap karya yang mereka ciptakan.                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Dengan berbagai medium seni yang digunakan, Saung Angklung Udjo menjadi cermin seni Indonesia yang tak terbatas pada satu genre atau gaya. Di sini, seniman-seniman visioner mengeksplorasi batas-batas tradisi dan inovasi, menciptakan karya yang menarik perhatian dunia pada pesona budaya Indonesia. Saung Angklung Udjo, sebagai pelataran seni, membuktikan bahwa keindahan dan kompleksitas budaya Indonesia tetap hidup dan berkembang melalui mata dan tangan seniman-seniman yang visioner.                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />
        </>
    )
}