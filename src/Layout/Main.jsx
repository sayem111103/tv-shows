import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
    return (
        <>
        <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;