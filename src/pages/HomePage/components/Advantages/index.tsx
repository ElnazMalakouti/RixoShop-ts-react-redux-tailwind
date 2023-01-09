import { BiCheckCircle } from "react-icons/bi"
import { BsShieldFillCheck } from "react-icons/bs"
import { AiFillTag } from "react-icons/ai"
import { RiTruckFill } from "react-icons/ri"

const Advantages = () => {
    return (
        <div className="w-full bg-[#F4F9FF] flex flex-col justify-center items-center gap-[2rem] relative pb-[8rem]">
            <div className="w-[146px] h-[146px] bg-[#F4F9FF] rounded-[50%] flex justify-center items-center text-[#008B7E] text-[80px] absolute top-[-70px]"><><BiCheckCircle /></></div>
            <p className="font-[Peyda-Bold] mt-[5rem]">چرا ریکسوشاپ را برای اسمبل آنلاین انتخاب کنید؟</p>
            <div className="w-[60%] m-auto flex flex-row justify-between items-center gap-[3rem]">

                <div className="w-[33%] flex flex-col justify-center items-center gap-[1rem]">
                    <div className="w-[46px] h-[46px] bg-[#34DDED] rounded-[.5rem] flex justify-center items-center text-white text-[22px]"><><BsShieldFillCheck /></></div>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[14px]">تست های فنی مختلف</p>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[11px] flex flex-wrap">قبل از اینکه محصول نهایی اسمبل آنلاین به دست شما برسد، تست های مختلف را پشت سر می گذارد و تنها محصولاتی که از همه موانع عبور می کنند.</p>
                </div>

                <div className="w-[33%] flex flex-col justify-center items-center gap-[1rem]">
                    <div className="w-[46px] h-[46px] bg-[#E01DAA] rounded-[.5rem] flex justify-center items-center text-white text-[22px]"><><AiFillTag /></></div>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[14px]">انتخاب گسترده و محصول اصلی</p>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[11px] flex flex-wrap">ما طیف گسترده ای از محصولات را در ریکسوشاپ داریم. تمامی محصولات پیشنهاد شده به منظور اسمبل آنلاین 100% اصل و با کیفیت هستند.</p>
                </div>

                <div className="w-[33%] flex flex-col justify-center items-center gap-[1rem]">
                    <div className="w-[46px] h-[46px] bg-[#115ED4] rounded-[.5rem] flex justify-center items-center text-white text-[22px]"><><RiTruckFill /></></div>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[14px]">ارسال به سراسر کشور</p>
                    <p className="font-[Peyda-Bold] text-[#1E385F] text-[11px] flex flex-wrap">ما به سراسر کشور ارسال داریم. بنابراین هر کجا که باشید، کامپیوتر شما به موقع به درب منزل شما خواهد رسید.</p>
                </div>

            </div>
        </div>
    )
}

export default Advantages