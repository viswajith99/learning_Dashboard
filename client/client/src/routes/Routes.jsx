


import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { LoginPage } from "../pages/user/LoginPage";
import {SignupPage} from "./../pages/user/SignupPage.jsx"
import { UserLayout } from "../layouts/UserLayout";
import { CoursePage } from "../pages/user/CoursePage";
import { CourseDetailsPage } from "../pages/user/CourseDetailsPage";
import { ErrorPage } from "../pages/user/ErrorPage";
import {UserAuth} from'././protectedRoutes/UserAuth.jsx'
import { ProfilePage } from "../pages/user/ProfilePage";

// import { CartPage } from "../pages/user/CartPage";
// import { Success } from "../pages/user/Success";
// import { Cancel } from "../pages/user/Cancel";
import { HomePages } from "../pages/home/Homepages";
import { CartPage } from "../pages/user/CartPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePages />,
            },
            {
                path: "about",
                element: <h1>About page</h1>,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
        ],
    },
    {
        path: "user",
        element: (
            <UserAuth><UserLayout /></UserAuth>
        ),
        children: [
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "my-learnings",
                element: <h1>Learning dashboard</h1>,
            },
            {
                path: "course-details/:id",
                element: <CourseDetailsPage />,
            },
            {
                path: "cart-page/:id",
                element: <CartPage />,
            },
            // {
            //     path: "payment/success",
            //     element: <Success />,
            // },
            // {
            //     path: "payment/cancel",
            //     element: <Cancel />,
            // },
        ],
    },
   
    
]);