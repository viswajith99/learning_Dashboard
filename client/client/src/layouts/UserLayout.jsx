import React from "react";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/user/userHeader";





export const UserLayout = () => {
    return (
        <div>
           <UserHeader/>
            <div className="min-h-96">
               <Outlet/>
            </div>
            <Footer />
        </div>
    );
};