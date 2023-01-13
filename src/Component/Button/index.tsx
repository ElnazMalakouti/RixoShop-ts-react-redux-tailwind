import { ButtonHTMLAttributes } from "react"

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : any,
}

const Button = ({children , ...props} : props) => {
    return(
        <button className="w-[293px] h-[44px] bg-[#FC1B50] text-white flex justify-center items-center font-[Peyda-Bold] font-extrabold text-[18px]" {...props}>
            {children}
        </button>
    )
}

export default Button