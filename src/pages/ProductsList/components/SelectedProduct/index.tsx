import { DigitConvertor } from 'persian-digit-tools';
import Button from '../../../../Component/Button';

interface ISelectedProductComponent {
    id: string
    shortTitle: string
    fullTitle: string
    image: string
    power: string
    fan: string
    capacity: string
    memoryType: string
    GPUModel: string
    GPU: string
    productPrice: string
    discountPercent: string
}

const SelectedProduct = ({
    id,
    shortTitle,
    fullTitle,
    image,
    power,
    fan,
    capacity,
    memoryType,
    GPUModel,
    GPU,
    productPrice,
    discountPercent }: ISelectedProductComponent) => {
    return (
        <>
            <div className="w-[300px] h-full p-2 rounded-[.5rem] flex flex-col justify-center items-center gap-2 bg-[#F2F6FB]">
                <div className="w-full p-2 flex flex-col justify-center items-center gap-1 font-[Peyda-Bold]">
                    <p>{shortTitle}</p>
                    <p className="text-[12px] text-[#78807C] font-[Peyda-Regular]">{fullTitle}</p>
                </div>
                <div className="w-full h-auto">
                    <img className="w-full h-full" alt="" src={image} />
                </div>
                <hr />
                <div className="w-full flex flex-col justify-start items-start gap-1 font-[Peyda-Regular] text-[17px]">
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">توان مصرفی: </p>
                        <span className="text-[16px]">{power}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">خنک کننده:</p>
                        <span className="text-[16px]">{fan}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">حجم حافظه گرافیکی: </p>
                        <span className="text-[16px]">{capacity}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">نوع حافظه گرافیکی: </p>
                        <span className="text-[16px]">{memoryType}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">نوع پردازنده: </p>
                        <span className="text-[16px]">{GPUModel}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <p className="text-[#78807C]">پردازنده گرافیکی: </p>
                        <span className="text-[16px]">{GPU}</span>
                    </div>
                </div>
                <div className={`w-full h-[18px] mt-[2rem] flex flex-row justify-end items-start gap-2 font-[Peyda-Medium] text-[13px] ${!discountPercent ? 'invisible' : 'visible'}`}>
                    <span className="text-[#B6C5DC] line-through text-[15px]">{
                        productPrice ? DigitConvertor.toPersian(String(productPrice?.toLocaleString())) : 0 
                    }</span>
                    <div className="w-[35px] h-[18px] rounded-[.5rem] bg-[#15A394] text-white flex justify-center items-start">
                        %<span>{
                            discountPercent ? DigitConvertor.toPersian(String(discountPercent)) : 0
                        }</span>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-end items-center gap-1 font-[Peyda-Bold] text-[22px]">
                    <span className="text-[#15A394]">{
                        discountPercent
                            ?
                            DigitConvertor.toPersian(String((+productPrice - (+productPrice * +discountPercent) / 100)?.toLocaleString()))
                            :
                            DigitConvertor.toPersian(String(productPrice?.toLocaleString())) 
                    }</span>
                    <img alt="" src="pics/Price.png" />
                </div>
                <Button className="w-full h-[40px] mb-[1rem] rounded-[.25rem] bg-[#FC1B50] border-[1px] border-[#FC1B50] text-white text-[15px] font-[Peyda-Bold] ">افزودن به لیست</Button>
            </div>
        </>
    )
}

export default SelectedProduct