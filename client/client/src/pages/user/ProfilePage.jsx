import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../services/userApi";
import { axiosInstance } from "../../config/axiosInstance";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

export const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const handleLogOut = async () => {
        const response = await userLogout();
        if (response?.success) {
            navigate("/logout");
        }
    };

    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance({
                url: "/user/profile",
                method: "GET",
            });
            setUser(response?.data?.data);
            console.log(response, "====response");

            // return response?.data;
        } catch (error) {
            console.log(error);
            toast.error("error fetching user data");
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <div className="flex flex-col gap-5 items-start px-20 py-10">
            <h1>Welcome {user?.name} </h1>
            <p>Email : {user?.email} </p>
            <p>Phone : {user?.mobile}</p>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src={user?.profilePic} />
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit? Est modi deserunt et ducimus exercitationem sapiente
            </p>
            <button className="btn btn-secondary">Edit Profile</button>

            <button onClick={handleLogOut} className="btn btn-sm btn-error  ">
                <span>Log-out</span>
                <LogOut />
            </button>
        </div>
    );
};
