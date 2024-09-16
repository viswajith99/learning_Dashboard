import react, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiouInstance";

export const InstructorAuth = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [instructor, setInstructor] = useState(null); // Start with null to differentiate between loading and error states

    const checkInstructor = async () => {
        try {
            const response = await axiosInstance({
                url: "/instructor/check-instructor",
                method: "GET",
                withCredentials: true,
            });

            if (response.data.success) { 
                setInstructor(true);
            } else {
                setInstructor(false);
                navigate("/login");
            }
        } catch (error) {
            setInstructor(false);
            navigate("/login");
            console.log(error);
        }
    };

    useEffect(() => {
        checkInstructor();
    }, [location.pathname]); // Check instructor status when location changes

    return instructor ? children : null;
};
