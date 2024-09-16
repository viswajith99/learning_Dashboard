import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';
import {CourseDetailCard} from '../../components/ui/cards/CourseDetailCard.jsx';

export const CourseDetailsPage = () => {
  const [course, setCourse] = useState();
  const { id } = useParams(); // Extract ID from URL

  const fetchCourse = async () => {
    try {
      const response = await axiosInstance({
        url: `/course/courselist/${id}`, // Use the extracted ID here
        method: "GET",
      });
      setCourse(response?.data?.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch course data");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  return (
    <div className='flex flex-wrap justify-center'>
      <h1 className="w-full text-center mb-8 text-3xl font-bold">Course Details</h1>
      {course && <CourseDetailCard course={course} />}
    </div>
  );
};


