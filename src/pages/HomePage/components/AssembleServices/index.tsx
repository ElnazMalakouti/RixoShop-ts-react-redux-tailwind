import { AiOutlinePlayCircle } from "react-icons/ai"

const AssembleServices = () => {
    return (
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
    )
}

export default AssembleServices