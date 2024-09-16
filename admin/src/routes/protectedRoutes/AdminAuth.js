import react, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiouInstance";

export const AdminAuth = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [admin, setAdmin] = useState(null); // Start with null to differentiate between loading and error states

    const checkAdmin = async () => {
        try {
            const response = await axiosInstance({
                url: "/admin/check-admin",
                method: "GET",
                withCredentials: true,
            });

            if (response.data.success) { 
                setAdmin(true);
            } else {
                setInstructor(false);
                navigate("/login");
            }
        } catch (error) {
            setAdmin(false);
            navigate("/login");
            console.log(error);
        }
    };

    useEffect(() => {
        checkAdmin();
    }, [location.pathname]); // Check instructor status when location changes

    return admin ? children : null;
};
