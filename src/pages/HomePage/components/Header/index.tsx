const Header = () => {
    return (
        <div className="w-full h-full bg-white flex flex-row justify-between items-center font-[Peyda-Reqular]">

            <div className="w-auto h-[80%]">
                <img className="w-full h-full" alt="" src="/pics/pc-logo.png" />
            </div>

            <div className="w-[60%] h-full flex flex-row gap-[3rem] justify-center items-center">

                <button>صفحه اول</button>
                <button>تماس با ما</button>
                <button>درباره ما</button>
                <button>دست دوم</button>
                <button className="font-[Peyda-Bold] text-red-500">محصولات ویژه</button>

            </div>

        </div>
    )
}

export default Header