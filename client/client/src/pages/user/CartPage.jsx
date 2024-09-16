import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { axiosInstance } from '../../config/axiosInstance';
import { CartCard } from '../../components/ui/cards/CartCard';
import toast from 'react-hot-toast';


export const CartPage = () => {

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
        {course && <CartCard course={course} />}
      </div>
    );
  };
  