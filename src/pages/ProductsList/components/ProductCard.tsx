import Button from "../../../Component/Button"
import { DigitConvertor } from 'persian-digit-tools';

interface props {
    productImage : string ,
    productName : string ,
    discountPercent ?: number , 
    previousPrice ?: number ,
    productPrice : number
}

const ProductCard = ({ productImage, productName, discountPercent, previousPrice, productPrice } : props) => {
    return (
        <div className="w-[130px] h-[273px] rounded-[.5rem] flex flex-col gap-2 p-2 border-2 hover:border-[#FC1B50] mt-2">

            <div className="w-full h-[30%] flex justify-center items-center">
                <img alt="" src={productImage} />
            </div>

            <hr />

            <p className="w-full flex flex-wrap justify-center items-center font-[Peyda-Medium] text-[14px] text-center">
                {productName}
            </p>

            <div className="w-full flex flex-row justify-center items-center gap-1 font-[Peyda-Medium]">
                <span className="text-[#B6C5DC] line-through text-[12px]">{DigitConvertor.toPersian(String(previousPrice?.toLocaleString()))}</span>
                <div className="w-[35px] h-[18px] rounded-[.5rem] bg-[#15A394] text-white text-[12px] flex justify-center items-center">
                    %<span>{DigitConvertor.toPersian(String(discountPercent))}</span>
                </div>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-1 font-[Peyda-Bold]">
                <span className="text-[#15A394]">{DigitConvertor.toPersian(String(productPrice.toLocaleString()))}</span>
                <img alt="" src="pics/Price.png" />
            </div>

            <Button className="w-[106px] h-[30px] rounded-[.25rem] bg-white border-[1px] border-[#FC1B50] text-[#FC1B50] text-[13px] font-[Peyda-Bold] ">افزودن به لیست</Button>

        </div>
    )
}

export default ProductCard