import { Outlet } from "react-router-dom";
import BackgroundCanvas from "../components/background/BackgroundCanvas";


function MainLayout() {
    return (
        <>
            <BackgroundCanvas />        
            <Outlet />
        </>
    );
}

export default MainLayout;