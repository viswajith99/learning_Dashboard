import React from "react";
import { Link } from "react-router-dom";
import {  CircleUserRound } from "lucide-react";
import { DarkMode } from "./ui/Darkmode";


export const InstructorHeader = () => {
    return (
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <Link to={"/instructor"}>
                    <h1 className="text-4xl font-bold">InstructorPage</h1>
                </Link>
            </div>

            <nav className="flex gap-20 font-semibold">
               
                <Link to={"/instructor/create-course"}>Course</Link>
                 <Link to={"/instructor/create-assignment"}>Assignment</Link>
                <Link to={"/instructor/quizform"}>Quiz</Link>
            </nav>

            <div className="flex items-center gap-8">
                <DarkMode  />
                <Link to={"/instructor/profile"}>
                    <CircleUserRound  width={30} height={30}/>
                </Link>
            </div>
        </div>
    );
};

