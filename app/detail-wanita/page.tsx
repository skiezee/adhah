import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailWanita() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-wanita.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-xl lg:text-[26px]">Wanita Indonesia:</p>
                        <p className="font-bold text-2xl lg:text-[48px] mt-4">Pencapaian dan Kekuatan di Balik Kebudayaan</p>
                        <div className="m-12 lg:m-24 text-[#555555] w-[90%] lg:w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Perempuan Indonesia telah memainkan peran sentral dalam pembentukan dan pemeliharaan kebudayaan bangsa. Meskipun berada dalam konteks nilai-nilai tradisional, perempuan Indonesia telah menunjukkan keberanian, kecerdasan, dan kekuatan yang mengagumkan dalam berbagai bidang. Artikel ini akan menggali pencapaian dan kekuatan yang dimiliki perempuan Indonesia di tengah keberagaman budaya yang kaya.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%] ">
                                Pendidikan menjadi landasan utama bagi pencapaian perempuan Indonesia. Banyak perempuan telah meraih gelar tinggi dan menjadi pemimpin di berbagai bidang. Contohnya, Sri Mulyani, Menteri Keuangan Indonesia, yang memimpin dengan integritas dan kebijaksanaan. Kesuksesan perempuan di dunia profesional tidak hanya menginspirasi generasi muda, tetapi juga menggambarkan kontribusi nyata perempuan terhadap perkembangan ekonomi dan sosial.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Dalam ranah seni dan budaya, perempuan Indonesia memiliki peran yang tak terbantahkan. Para penari, seniman, dan penggiat kebudayaan perempuan telah menciptakan karya-karya yang memperkaya identitas budaya bangsa. Misalnya, Kartini, tokoh perempuan pejuang kemerdekaan, menjadi inspirasi bagi banyak perempuan Indonesia untuk mengejar kemandirian dan kesetaraan.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Perempuan juga berperan penting dalam sektor kesehatan dan kesejahteraan masyarakat. Banyak perempuan Indonesia yang menjadi tenaga kesehatan, pekerja sosial, atau aktivis yang memperjuangkan hak-hak kesehatan dan kesejahteraan masyarakat. Kontribusi mereka, terutama dalam situasi pandemi global, menunjukkan kepekaan dan kepedulian perempuan terhadap kesejahteraan bersama.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Pentingnya peran perempuan dalam menjaga keberlanjutan dan lingkungan juga semakin ditekankan. Perempuan Indonesia menjadi garda terdepan dalam melindungi alam dan melestarikan warisan alam dan budaya. Mereka terlibat dalam berbagai gerakan lingkungan, menunjukkan kesadaran akan pentingnya menjaga keseimbangan antara manusia dan alam.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Perempuan Indonesia tidak hanya menghiasi lanskap kebudayaan dengan keindahan dan kelembutan, tetapi juga membawa kekuatan, ketangguhan, dan pemikiran kritis yang mendalam. Dalam keberagaman budaya Indonesia, perempuan telah menjadi pilar yang kokoh dan berkontribusi secara signifikan dalam mewujudkan kemajuan bangsa. Melalui pengakuan dan pemberdayaan lebih lanjut, peran perempuan Indonesia akan terus berkembang, menginspirasi generasi mendatang untuk mencapai potensi penuh mereka di berbagai bidang kehidupan.                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />

        </>
    )
}