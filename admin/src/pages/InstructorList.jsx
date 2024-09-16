import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiouInstance";


export const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axiosInstance.get('/instructors');
        setInstructors(response.data);
      } catch (error) {
        console.error('Failed to fetch instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Instructor List</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor._id}>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>{instructor.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


