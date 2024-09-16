import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home.jsx'; // Example homepage component
import { RootLayout } from '../Layout/RootLayout';
import { ErrorPage } from '../pages/ErrorPage'; // Ensure you have this component
import {SignupPage} from '../pages/home/Signuppage.jsx';
import {LoginPage} from '../pages/home/LoginPage.jsx';
import { AdminAuth } from './protectedRoutes/adminAuth.js';
import { AdminLayout } from '../Layout/AdminLayout.jsx';
import {CreateInstructor} from '../pages/CreateInstructor.jsx';
import {DeleteInstructor} from '../pages/DeleteInstructor.jsx';
import {UpdateInstructor} from '../pages/UpdateInstructor.jsx';
// import {InstructorList} from '../pages/InstructorList.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Error handling page
    children: [
      {
        path: '',
        element: <Home />, // Component for the root URL
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ],
  },
  {
    path: 'admin',
    element: (<AdminAuth>
      <AdminLayout/>
    </AdminAuth>
    ), // Layout for instructor routes



    children: [
     
      {
        path: 'create-instructor',
        element: <CreateInstructor />,
      },
      {
        path: 'delete-instructor',
        element: <DeleteInstructor />,
      },
      {
        path: 'updata-instructort',
        element: <UpdateInstructor />,
      },
      // {
      //   path: 'Delete-user',
      //   element: <DeleteUser/>,
      // },
    

     
      // {
      //   path: 'view-instructorlist',
      //   element: <InstructorList/>,
      // },
      
    ],
  },
]);
