import { AiOutlineCloseCircle } from "react-icons/ai"

const SystemUsage = () => {
    return (
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

            <div className="w-[40%] m-auto flex flex-col justify-center items-center gap-[2rem] z-50">
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
    )
}

export default SystemUsage