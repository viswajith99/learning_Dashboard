import { createBrowserRouter } from 'react-router-dom';
import { CreateAssignment } from '../pages/assignmentpage/CreateAssignment';
import { UpdateAssignment } from '../pages/assignmentpage/UpdateAssignment';
import { ViewAssignments } from '../pages/assignmentpage/ViewAssignments';
import { Home } from '../pages/home/Home.jsx'; // Example homepage component
import { RootLayout } from '../Layout/RootLayout';
import { ErrorPage } from '../pages/ErrorPage'; // Ensure you have this component
import { InstructorLayout } from '../Layout/InstructorLayout';
import { DeleteAssignment } from '../pages/assignmentpage/DeleteAssignment';
import { CreateCourse } from '../pages/coursepage/CreateCourse';
import { DeleteCourse } from '../pages/coursepage/DeleteCourse';
import { UpdateCourse } from '../pages/coursepage/UpdateCourse';
import {SignupPage} from '../pages/home/Signuppage.jsx';
import {LoginPage} from '../pages/home/LoginPage.jsx';
import { InstructorAuth } from './protectedRoutes/InstructorAuth.js';

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
    path: '/instructor',
    element: (<InstructorAuth>
      <InstructorLayout />
    </InstructorAuth>
    ), // Layout for instructor routes
    children: [
      {
        path: '',
        element: <Home />, // Component for the root URL
      },

      {

        path: 'create-course',
        element: <CreateCourse />,
      },
      {
        path: 'update-course',
        element: <UpdateCourse />,
      },
      {
        path: 'delete-course',
        element: <DeleteCourse />,
      },
      {
        path: 'create-assignment',
        element: <CreateAssignment />,
      },
      {
        path: 'view-assignments',
        element: <ViewAssignments />,
      },
      {
        path: 'update-assignment',
        element: <UpdateAssignment />,
      },
      {
        path: 'delete-assignment',
        element: <DeleteAssignment />,
      },
    ],
  },
]);
