
import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiouInstance";



export const adminSignup = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/admin/signup", 
            method: "POST",
            data,
        });
        return response?.data;
    } catch (error) {
        toast.error("Signup Failed");
        console.log(error);
    }
};


export const adminLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/admin/login",
            method: "POST",
            data,
           
        });
        return response?.data;
       
        
    } catch (error) {
        toast.error("Log-in Failed");
        console.log(error);
    }
};

export const adminLogout = async () => {
    try {
        const response = await axiosInstance({
            url: "/admin/logout",
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

export const adminCheck = async () => {
    try {
        const response = await axiosInstance({
            url: "/admin/check-admin",
            method: "GET",
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};