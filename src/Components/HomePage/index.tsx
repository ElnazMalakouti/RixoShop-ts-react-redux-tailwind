import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { BiCheckCircle } from "react-icons/bi"
import { BsShieldFillCheck } from "react-icons/bs"
import { AiFillTag } from "react-icons/ai"
import { RiTruckFill } from "react-icons/ri"

const HomePage = () => {
    return (
        <div className="w-full h-[6rem] flex flex-col gap-[4rem]">

            <div className="w-full h-full bg-white flex flex-row justify-between items-center font-[Peyda-Reqular]">

                <div className="w-auto h-[80%]">
                    <img className="w-full h-full" alt="" src="/pics/pc-logo.png" />
                </div>

                <div className="w-[60%] h-full flex flex-row gap-[3rem] justify-center items-center">

                    <button>صفحه اول</button>
                    <button>تماس با ما</button>
                    <button>درباره ما</button>
                    <button>دست دوم</button>
                    <button className="font-[Peyda-Bold]">محصولات ویژه</button>

                </div>

            </div>

            <div className="w-full h-auto mt-[-4rem] z-30">
                <img className="w-full h-full" alt="" src="/pics/header-pic.jpg" />
            </div>

            <div className="w-full bg-[#F4F9FF] flex flex-col gap-[3rem] mt-[-4rem] pt-[3rem] pb-[12rem] relative">
                <div className="w-[50%] h-[5rem] p-[1rem] text-[#405C87] border-[#A3C0D5] border-[1px] bg-[#D7F5FE] mr-auto ml-auto rounded-[1rem] flex flex-row justify-between items-center gap-2 z-30">

                    <div className="w-[10%] flex justify-center items-center">
                        <button>
                            <img alt="" src="/pics/Orders-Success.png" />
                        </button>
                    </div>

                    <div className="w-[80%]">
                        <p className="font-[Peyda-Bold] mb-1">
                            کاربر گرامی تشکر میکنیم که ریکسوشاپ را برای خرید انتخاب کرده اید
                        </p>
                        <p className="font-[Peyda-Reqular] text-[13px]">
                            لطفا برای ارائه بهترین پیشنهاد برای اسمبل سیستم، با تکمیل فرم زیر، ما را یاری نمایید
                        </p>
                    </div>

                    <div className="w-[5%] flex justify-center items-center text-[24px]">
                        <button><><AiOutlineCloseCircle /></></button>
                    </div>

                </div>

                <div className="w-[40%] m-auto flex flex-col justify-center items-center gap-[2rem]">
                    <p className="font-[Peyda-Bold]">
                        نوع کاربری سیستم خود را انتخاب نمایید
                    </p>

                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-[90px] h-[126px] flex flex-col justify-center items-center gap-3">
                            <button className="w-[90px] h-[90px] bg-white border-[#DBE3EF] border-[1px] rounded-[1.5rem] flex justify-center items-center hover:border-[#8C8D8C]">
                                <img alt="" src="pics/formal.png" />
                            </button>
                            <span className="text-[13px] font-[Peyda-Reqular]">اداری</span>
                        </div>
                        <div className="w-[90px] h-[126px] flex flex-col justify-center items-center gap-3">
                            <button className="w-[90px] h-[90px] bg-white border-[#DBE3EF] border-[1px] rounded-[1.5rem] flex justify-center items-center hover:border-[#8C8D8C]">
                                <img alt="" src="pics/enginering.png" />
                            </button>
                            <span className="text-[13px] font-[Peyda-Reqular]">مهندسی</span>
                        </div>
                        <div className="w-[90px] h-[126px] flex flex-col justify-center items-center gap-3">
                            <button className="w-[90px] h-[90px] bg-white border-[#DBE3EF] border-[1px] rounded-[1.5rem] flex justify-center items-center hover:border-[#8C8D8C]">
                                <img alt="" src="pics/art.png" />
                            </button>
                            <span className="text-[13px] font-[Peyda-Reqular]">طراحی و هنر</span>
                        </div>
                        <div className="w-[90px] h-[126px] flex flex-col justify-center items-center gap-3">
                            <button className="w-[90px] h-[90px] bg-white border-[#DBE3EF] border-[1px] rounded-[1.5rem] flex justify-center items-center hover:border-[#8C8D8C]">
                                <img alt="" src="pics/game.png" />
                            </button>
                            <span className="text-[13px] font-[Peyda-Reqular]">بازی</span>
                        </div>
                        <div className="w-[90px] h-[126px] flex flex-col justify-center items-center gap-3">
                            <button className="w-[90px] h-[90px] bg-white border-[#DBE3EF] border-[1px] rounded-[1.5rem] flex justify-center items-center hover:border-[#8C8D8C]">
                                <img alt="" src="pics/programming.png" />
                            </button>
                            <span className="text-[13px] font-[Peyda-Reqular]">برنامه نویسی</span>
                        </div>
                    </div>

                    <button className="w-[180px] h-[44px] bg-[#009688] text-white font-[Peyda-Reqular] rounded-[.5rem]">مرحله بعد</button>
                </div>

                <div className="absolute left-[0]">
                    <img alt="" src="pics/effect.png" />
                </div>

                <div className="absolute right-[0] top-[-50%]">
                    <img alt="" src="pics/effect2.png" />
                </div>

            </div>

            <div className="w-full flex justify-center items-center bg-white z-50 relative mt-[-4rem]">
                <div className="w-[70%] m-auto felx flex-col mt-[-5rem] pb-[2rem]">
                    <div className="w-full flex flex-row justify-between items-end">
                        <p className="font-[Peyda-Bold] text-[18px]">خدمات اسمبل سیستم ریکسوشاپ</p>
                        <div className="w-[495px] h-[280px] relative">
                            <video id="assemble-video" className="w-full h-full rounded-[.5rem] z-11">
                                <source src="pics/video.mp4" type="video/mp4" />
                            </video>
                            <button className="absolute top-[40%] right-[42%] z-10 text-white text-[65px]"><><AiOutlinePlayCircle /></></button>
                        </div>
                    </div>

                    <div className="w-full mt-[2rem]">
                        <p className="flex flex-wrap font-[Peyda-Refular] text-[#1E385F] text-[14px]">
                            ریکسوشاپ بر اصل اعتماد بین ما و مشتریانمان استوار است. سیستم اسمبل آنلاین این مجموعه با کیفیت و قیمتی منصفانه ارائه شده است. خرید کامپیوتر کار خسته کننده ای است زیرا به تحقیقاتی زیادی نیاز دارد. همچنین، این احتمال وجود دارد که ممکن است همه اجزا و قطعات را پیدا نکنید و یا قطعات با یکدیگر سازگار نباشند.
                            <br /> ریکسوشاپ به عنوان یک مقصد آنلاین برای تمام نیازهای سیستم شخصی و اسمبل سیستم در خدمت شماست. درک و برآوردن نیازهای هر کاربر شعار ماست. ما به ارائه محصولات با کیفیت و استاندارد اعتقاد داریم. ما در تلاش هستیم تا با توجه به نیاز و بودجه شما بهترین محصولات را برای اسمبل آنلاین ارائه دهیم. تمرکز اصلی ما ارائه محصول با بهترین کیفیت، همراه با پشتیبانی فنی درجه یک است. قبل از اینکه محصول نهایی اسمبل آنلاین به دست شما برسد، تست های مختلف را پشت سر می گذارد و تنها محصولاتی که از همه موانع عبور می کنند به دست مشتری نهایی می رسند.ما طیف گسترده ای از محصولات را در ریکسوشاپ داریم. تمامی محصولات پیشنهاد شده به منظور اسمبل آنلاین 100% اصل و با کیفیت هستند. ما معتقدیم که نباید در کیفیت سازشی وجود داشته باشد.
                        </p>
                    </div>
                </div>
            </div>

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

            <div className="w-full flex justify-center items-center font-[Peyda-Regular] text-[#879DBF] text-[12px] mt-[-3rem] pb-[1rem]">
                <p>استفاده از مطالب فروشگاه اینترنتی ریکسوشاپ فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.</p>
            </div>

        </div>
    )
}

export default HomePage