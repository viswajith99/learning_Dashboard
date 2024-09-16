import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";
import {Footer }from "../component/Footer";



export const RootLayout = () => {
    return (
        <div>
            <Header />
            <div className="min-h-96">
               <Outlet/>
            </div>
            <Footer />
        </div>
    );
};