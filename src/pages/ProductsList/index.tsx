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
            <div className="w-full h-full flex flex-col">

                <div className="w-full h-[13rem] flex flex-col bg-[#EDEDED]">

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


                <div className="w-full h-full flex flex-row justify-center items-start gap-2 mt-[2rem] mb-[2rem]">

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

                        <div className="w-[250px] h-full mt-2">
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

            </div>

        </>
    )
}

export default ProductsList