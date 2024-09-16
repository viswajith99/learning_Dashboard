import React from "react";

import { Outlet } from "react-router-dom";
import { InstructorHeader } from "../component/InstructorHeader";
import { Footer } from "../component/Footer";



export const InstructorLayout = () => {
    return (
        <div>
           <InstructorHeader/>
            <div className="min-h-96">
               <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};