import Image from "next/image"
import Link from "next/link"
import FooterTentangKami from "../components/footer/footer"

export default function DetailKuliner() {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <Link href="/"> <Image src='/arrow-left.png' alt="arrow" width={27} height={20} /> </Link>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Image src='/detail-kuliner.svg' alt="arrow" width={1240} height={592} />
                </div>
                <div className="flex justify-center">
                    <div className="mt-16 text-center">
                        <p className="font-semibold text-xl lg:text-[26px]">Kuliner Khas Indonesia:</p>
                        <p className="font-bold text-2xl lg:text-[48px] mt-4">Jejak Rasa dari Sabang sampai Merauke</p>
                        <div className="m-12 lg:m-24 text-[#555555] w-[90%] lg:w-[100%]">
                            <p className="text-left font-normal text-[20px] w-[90%]">
                                Indonesia, sebagai negara kepulauan terbesar di dunia, tidak hanya kaya akan keindahan alam dan keberagaman budaya, tetapi juga memiliki kekayaan kuliner yang memukau. Dari ujung barat hingga ujung timur, dari Sabang sampai Merauke, setiap daerah memiliki jejak rasa khasnya sendiri yang menjadi cermin dari keberagaman rempah-rempah, bahan makanan, dan teknik memasak. Artikel ini akan mengulas perjalanan kuliner dari Sabang sampai Merauke, merinci jejak rasa yang menggambarkan kekayaan budaya Indonesia.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Sabang, sebagai pintu masuk Indonesia dari sebelah barat, menghadirkan berbagai hidangan laut yang lezat. Mie Aceh, dengan kuah khasnya yang kental dan beraroma rempah-rempah, adalah salah satu kegemaran yang tak terelakkan. Sate matang, sate khas Aceh yang disajikan dengan bumbu kacang dan kuah gulai, juga menggoda lidah wisatawan.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Ibukota Jakarta, sebagai pusat kehidupan urban, menawarkan jejak rasa yang mencerminkan perpaduan antara tradisi dan modernitas. Nasi goreng kambing Kebon Sirih yang terkenal, dengan rempah-rempah yang meresap pada daging kambing empuk, menjadi simbol kuliner kota ini. Sementara itu, berbagai makanan jalanan seperti kerak telur dan ketoprak tetap menjadi favorit di jalan-jalan ramai ibu kota.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Jejak rasa di Yogyakarta tak lepas dari gudeg, hidangan khas yang terbuat dari nangka muda yang dimasak dengan santan dan rempah-rempah. Sate klathak, sate khas Yogyakarta yang disajikan dengan taburan kelapa parut, juga menjadi bagian tak terpisahkan dari kuliner daerah ini. Jejak rasa Jawa yang kental terasa dalam setiap suapan gudeg yang manis gurih.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Jejak rasa di Yogyakarta tak lepas dari gudeg, hidangan khas yang terbuat dari nangka muda yang dimasak dengan santan dan rempah-rempah. Sate klathak, sate khas Yogyakarta yang disajikan dengan taburan kelapa parut, juga menjadi bagian tak terpisahkan dari kuliner daerah ini. Jejak rasa Jawa yang kental terasa dalam setiap suapan gudeg yang manis gurih.
                            </p>
                            <p className="text-left font-normal text-[20px] mt-8 w-[90%]">
                                Jejak rasa dari Sabang sampai Merauke menunjukkan kekayaan kuliner Indonesia yang tak tertandingi. Melalui kuliner, kita dapat menyelami keberagaman budaya dan kekayaan alam Indonesia. Kita diajak untuk meresapi jejak rasa setiap daerah, seolah mengikuti petualangan kuliner yang membentang dari ujung barat hingga ujung timur, dan menyadari bahwa dalam keragaman inilah Indonesia begitu unik dan istimewa.                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <FooterTentangKami />

        </>
    )
}