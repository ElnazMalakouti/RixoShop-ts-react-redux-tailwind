import { FiBell } from "react-icons/fi"
import { FaPhone } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { BsArrowRight } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import ProductCard from "./components/ProductCard"
import SelectedProduct from "./components/SelectedProduct"
import { DigitConvertor } from 'persian-digit-tools';
import {HiPlus} from "react-icons/hi"
import Button from "../../Component/Button"

interface Icategories {
    id: string,
    title: string,
    icon: string
}

interface IgraphicCards {
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

interface IselectedProduct {
    id: string
}

const ProductsList = () => {

    const [selectedProduct, setSelectedProduct] = useState<IselectedProduct | null>(null)

    const [categoriesState, setCategoriesState] = useState<Icategories[]>()

    const [graphicCardsState, setGraphicCardsState] = useState<IgraphicCards[] | null>(null)

    useEffect(() => {
        axios.get("https://63c29170b0c286fbe5ef995b.mockapi.io/Categories")
            .then((data) => setCategoriesState(data.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("https://63c29170b0c286fbe5ef995b.mockapi.io/GraphicCards")
            .then((data) => setGraphicCardsState(data.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {

    }, [setSelectedProduct])

    return (
        <>
            <div className="w-full h-full flex flex-col bg-[#EDEDED]">

                <div className="w-full bg-white h-[13rem] flex flex-col">

                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-[11%] h-auto m-[1rem]">
                            <img className="w-full h-full" alt="" src="pics/pc-logo.png" />
                        </div>
                        <div className="w-[13%] flex flex-row justify-between items-center m-[1rem] ml-[2rem]">
                            <button className="w-[42px] h-[42px] bg-[#D9DBE1] text-[14px] text-[#55709A] rounded-[50%] flex justify-center items-center"><><FaPhone /></></button>
                            <button className="w-[42px] h-[42px] bg-[#D9DBE1] text-[18px] text-[#55709A] rounded-[50%] flex justify-center items-center"><><FiBell /></></button>
                            <button className="w-[42px] h-[42px] bg-[#D9DBE1] text-[20px] text-[#55709A] rounded-[50%] flex justify-center items-center"><><CgProfile /></></button>
                        </div>
                    </div>

                    <div className="w-[55%] m-auto flex flex-row justify-between items-center relative">
                        <button className="w-[40px] h-[40px] border-[1px] border-[#A1A1A1] rounded-[50%] flex justify-center items-center absolute top-[20%] left-[103%] text-[22px] text-[#A1A1A1]"><><BsArrowRight /></></button>
                        {categoriesState && categoriesState.map(item => {
                            return <div className="flex flex-col gap-2">
                                <button className="w-[82px] h-[82px] border-[1px] border-[#A1A1A1] rounded-[50%] flex justify-center items-center">
                                    <img className="w-[75%] h-[80%] overflow-hidden" alt="" src={item.icon} />
                                </button>
                                <p className="text-center font-[Peyda-Bold]">{item.title}</p>
                            </div>
                        })}
                        <button className="w-[40px] h-[40px] border-[1px] border-[#A1A1A1] rounded-[50%] flex justify-center items-center absolute top-[20%] right-[103%] text-[22px] text-[#A1A1A1]"><><BsArrowLeft /></></button>
                    </div>

                </div>


                <div className={`w-full h-full flex flex-row justify-center items-start gap-2 mt-[2rem] ${!selectedProduct ? 'mb-[2rem]' : 'mb-0'} relative`}>

                    <>
                        <div className="w-[820px] h-full flex flex-row flex-wrap gap-2">
                            {
                                graphicCardsState && graphicCardsState.map(item => {
                                    return <ProductCard
                                        productId={item.id}
                                        productImage={item.image}
                                        productName={item.fullTitle}
                                        productPrice={+item.productPrice}
                                        discountPercent={+item.discountPercent}
                                        selectedProduct={selectedProduct}
                                        setSelectedProduct={setSelectedProduct}
                                    />
                                })
                            }
                        </div>

                        <div className={`w-[250px] h-full mt-2 right-[1200px] ${selectedProduct ? '' : 'absolute'}`}>
                            {
                                selectedProduct && graphicCardsState?.map(item => {
                                    if (+item.id === +selectedProduct) {
                                        return <SelectedProduct
                                            id={item.id}
                                            shortTitle={item.shortTitle}
                                            fullTitle={item.fullTitle}
                                            image={item.image}
                                            power={item.power}
                                            fan={item.fan}
                                            capacity={item.capacity}
                                            memoryType={item.memoryType}
                                            GPUModel={item.GPUModel}
                                            GPU={item.GPU}
                                            productPrice={item.productPrice}
                                            discountPercent={item.discountPercent}
                                        />
                                    }
                                })
                            }
                        </div>
                    </>

                </div>

                
                <div className="w-full  flex flex-row justify-start items-end relative">
                    <div className="w-[45%] h-[117px] flex flex-row bg-white rounded-tl-[2rem]">
                        <div className="w-[200px] h-full flex flex-col justify-center items-start gap-1 mr-[5rem]">
                            <p className="text-[#78807C] text-[17px] font-[Peyda-Regular]">???????? ???????? ????????????</p>
                            <div className="flex flex-row justify-end items-center gap-2 text-[26px]">
                                <p className="text-[#009688] font-[Peyda-Bold]">{DigitConvertor.toPersian(String((18652000)?.toLocaleString()))}</p>
                                <img className="w-[25px] h-[20px]" alt="" src="pics/Price.png" />
                            </div>
                        </div>
                        <div className="w-[200px] h-full flex flex-row justify-center items-center gap-2 font-[Peyda-Bold]">
                            <button className="w-[25px] h-[25px] rounded-[50%] border border-[3px] border-black flex justify-center items-center"><><HiPlus/></></button>
                            <p className="font-[Peyda-Bold] text-[18px]">???????????? ???????? ????????</p>
                        </div>
                        <Button className="z-50 w-[162px] h-[44px] m-auto rounded-[.5rem] bg-[#009688] border-[1px] border-[#009688] text-white text-[15px] font-[Peyda-Bold] ">???????????? ???? ?????? ????????</Button>
                    </div>
                    <div className="w-[6%] h-[114px] bg-white rounded-tl-[2rem] absolute right-[41%] bottom-0 rotate-45">div</div>
                    <div className="w-[54%] h-[49px] bg-white text-white absolute left-0">div</div>                    
                </div>

            </div>

        </>
    )
}

export default ProductsList