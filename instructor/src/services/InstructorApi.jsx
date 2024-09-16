
import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiouInstance";



export const instructorSignup = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/instructor/signup", // Assuming the signup endpoint is '/instructor/signup'
            method: "POST",
            data,
        });
        return response?.data;
    } catch (error) {
        toast.error("Signup Failed");
        console.log(error);
    }
};


export const instructorLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/instructor/login",
            method: "POST",
            data,
           
        });
        return response?.data;
        
        
       
        
    } catch (error) {
        toast.error("Log-in Failed");
        console.log(error);
    }
};

export const instructorLogout = async () => {
    try {
        const response = await axiosInstance({
            url: "/instructor/logout",
            method: "POST",
        });
        return response?.data;
    } catch (error) {
        toast.error("Log-out Failed ");
        console.log(error);
    }
};

// export const fetchUserProfile = async () => {
//     try {
//         const response = await axiosInstance({
//             url: "/user/profile",
//             method: "GET",
//         });

//         console.log(response, "====response");

//         return response?.data;
//     } catch (error) {
//         console.log("error fetching user data");
//         toast.error("error fetching user data");
//     }
// };

export const instructorCheck = async () => {
    try {
        const response = await axiosInstance({
            url: "/instructor/check-instructor",
            method: "GET",
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};