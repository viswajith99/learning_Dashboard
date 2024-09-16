import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";



export const userSignup = async (data) => {
    try {
        const response = await axiosInstance({
            url: '/user/signup',
            method: 'POST',
            data,
          
            
        });
        console.log(response.data);
        
        return response?.data;
    } catch (error) {
        toast.error('Signup failed'); 
        console.error('Error during sign-up:', error.response?.data);
        throw error; 
    }
};


export const userLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/user/login",
            method: "POST",
            data,
        });
        return response?.data;
    } catch (error) {
        toast.error("Log-in Success");
        console.log(error);
    }
};
export const userLogout = async () => {
    try {
        const response = await axiosInstance({
            url: "/user/logout",
            method: "POST",
        });
        return response?.data;
    } catch (error) {
        toast.error("Log-out Failed ");
        console.log(error);
    }
};



export const userCheck = async () => {
    try {
        const response = await axiosInstance({
            url: "/user/user-check",
            method: "GET",
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};