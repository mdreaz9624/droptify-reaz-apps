import { Outlet } from "react-router-dom";
import Navber from "../SharedPage/Navber/Navber";
import Footer from "../SharedPage/Footer/Footer";

const RootLayout = () => {
    return (
        <div className="font-shantell max-w-7xl mx-auto">
            <Navber />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout;