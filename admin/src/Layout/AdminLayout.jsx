import React from "react";

import { Outlet } from "react-router-dom";

import { Footer } from "../component/Footer";
import { AdminHeader } from "../component/AdminHeader";



export const AdminLayout = () => {
    return (
        <div>
           <AdminHeader/>
            <div className="min-h-96">
               <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};