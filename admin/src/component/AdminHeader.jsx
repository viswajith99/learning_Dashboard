import React from "react";
import { Link } from "react-router-dom";
import {  CircleUserRound } from "lucide-react";
import { DarkMode } from "./ui/Darkmode";


export const AdminHeader = () => {
    return (
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <Link to={"/"}>
                    <h1 className="text-4xl font-bold">AdminPage</h1>
                </Link>
            </div>

            <nav className="flex gap-20 font-semibold">
               
                <Link to={"/admin/create-instructor"}>CreateInstructor</Link>
                 <Link to={"/admin/delete-instructor"}>DeleteInstructor</Link>
                <Link to={"/admin/updata-instructor"}>UpdateInstructor</Link>
                <Link tp={"admin/view-list"}>Instructor/UserList</Link>
            </nav>

            <div className="flex items-center gap-8">
                <DarkMode  />
                <Link to={"/admin/profile"}>
                    <CircleUserRound  width={30} height={30}/>
                </Link>
            </div>
        </div>
    );
};

