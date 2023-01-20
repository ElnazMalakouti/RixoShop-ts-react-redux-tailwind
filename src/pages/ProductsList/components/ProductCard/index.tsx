import Button from "../../../../Component/Button"
import { DigitConvertor } from 'persian-digit-tools';

interface props {
    productId : string
    productImage : string 
    productName : string 
    discountPercent ?: number 
    productPrice : number 
    selectedProduct : any
    setSelectedProduct : any
}

const ProductCard = ({ productId , productImage, productName, discountPercent, productPrice , selectedProduct , setSelectedProduct } : props) => {
    return (
        <div className={`w-[130px] h-[262px] rounded-[.5rem] flex flex-col gap-2 p-2 border-[3px] ${selectedProduct === productId ? 'border-[#FC1B50]' : ''} hover:border-[#FC1B50] mt-2 cursor-pointer`} onClick={()=> setSelectedProduct(productId)}>

            <div className="w-full min-h-[60px] max-h- h-[30%] flex justify-center items-center">
                <img alt="" src={productImage} />
            </div>

            <hr />

            <p className="w-full min-h-[53px] flex flex-wrap justify-center items-start font-[Peyda-Medium] text-[14px] text-center">
                {productName}
            </p>

            <hr/>

            <div className={`w-full h-[18px] flex flex-row justify-center items-center gap-1 font-[Peyda-Medium] ${!discountPercent ? 'invisible' : 'visible'}`}>
                <span className="text-[#B6C5DC] line-through text-[12px]">{
                    productPrice ? DigitConvertor.toPersian(String(productPrice?.toLocaleString())) : 0
                }</span>
                <div className="w-[35px] h-[18px] rounded-[.5rem] bg-[#15A394] text-white text-[12px] flex justify-center items-center">
                    %<span>{
                        discountPercent ? DigitConvertor.toPersian(String(discountPercent)) : 0
                        }</span>
                </div>
            </div>

            <div className="w-full mt-1 flex flex-row justify-center items-center gap-1 font-[Peyda-Bold]">
                <span className="text-[#15A394]">{
                    discountPercent 
                    ?                     
                    DigitConvertor.toPersian(String((productPrice-(productPrice * discountPercent) / 100)?.toLocaleString()))
                    :
                    DigitConvertor.toPersian(String(productPrice?.toLocaleString()))
                }</span>
                <img alt="" src="pics/Price.png" />
            </div>

            <Button className="w-[106px] h-[35px] rounded-[.25rem] bg-white border-[1px] border-[#FC1B50] text-[#FC1B50] text-[13px] font-[Peyda-Bold] ">افزودن به لیست</Button>

        </div>
    )
}

export default ProductCard