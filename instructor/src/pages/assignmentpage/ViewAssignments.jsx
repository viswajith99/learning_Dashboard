import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ViewAssignments = ({ courseId }) => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/assignments/course/${courseId}`);
        setAssignments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssignments();
  }, [courseId]);

  return (
    <div className="p-10">
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <div key={assignment._id} className="card w-full bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title">{assignment.title}</h2>
              <p>{assignment.description}</p>
              <p>Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</p>
              <p>Max Marks: {assignment.maxMarks}</p>
              <a href={assignment.fileLink} className="link link-primary">
                Download Assignment
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No assignments found for this course.</p>
      )}
    </div>
  );
};


