import Advantages from "./components/Advantages"
import Advertise from "./components/Advertise"
import AssembleServices from "./components/AssembleServices"
import Copyright from "./components/Copyright"
import Header from "./components/Header"
import SystemUsage from "./components/SystemUsage"

const HomePage = () => {
    return(
        <div className="w-full h-[6rem] flex flex-col gap-[4rem]">

            <Header/>

            <Advertise/>

            <SystemUsage/>

            <AssembleServices/>

            <Advantages/>

            <Copyright/>

        </div>
    )
}

export default HomePage