import { Outlet } from "react-router-dom";
import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <Outlet />
            <FooterComp />
        </>
    )
}   