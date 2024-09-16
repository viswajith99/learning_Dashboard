// import React, { useEffect, useState } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { axiosInstance } from "../../config/axiosInstance";

// export const QuizFormPage = () => {
//     const { id } = useParams(); // Quiz ID from route params, if available
//     const navigate = useNavigate();

//     const {
//         register,
//         handleSubmit,
//         setValue,
//         control,
//         formState: { errors },
//     } = useForm();
//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "questions",
//     });

//     useEffect(() => {
//         if (id) {
//             // Fetch quiz details if an ID is present
//             const fetchQuizDetails = async () => {
//                 try {
//                     const response = await axiosInstance.get(`/quiz/${id}`);
//                     const quiz = response.data;

//                     // Prepopulate the form fields
//                     setValue("title", quiz.title);
//                     setValue("description", quiz.description);
//                     setValue("course", quiz.course);
//                     setValue("questions", quiz.questions || []); // Load the questions array
//                     setValue("maxMarks", quiz.maxMarks);
//                     setValue("quizDate", quiz.quizDate.split("T")[0]); // Formatting date for input
//                 } catch (error) {
//                     console.error("Error fetching quiz details:", error);
//                 }
//             };

//             fetchQuizDetails();
//         }
//     }, [id, setValue]);

//     const onSubmit = async (data) => {
//         try {
//             if (id) {
//                 // Update existing quiz
//                 await axiosInstance.put(`/quiz/update/${id}`, data);
//                 console.log("Quiz updated successfully");
//             } else {
//                 // Create new quiz
//                 await axiosInstance.post("/quiz/create", data);
//                 console.log("Quiz created successfully");
//             }
//             navigate("/quizzes");
//         } catch (error) {
//             console.error("Error saving quiz:", error);
//         }
//     };

//     return (
//         <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Title Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Quiz Title</label>
//                     <input
//                         placeholder="Enter Title"
//                         className={`w-full p-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded`}
//                         {...register("title", { required: "Title is required" })}
//                     />
//                     {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//                 </div>

//                 {/* Description Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Description</label>
//                     <input
//                         placeholder="Enter Description"
//                         className={`w-full p-2 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded`}
//                         {...register("description", { required: "Description is required" })}
//                     />
//                     {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//                 </div>

//                 {/* Course Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Course</label>
//                     <input
//                         placeholder="Enter Course ID"
//                         className={`w-full p-2 border ${errors.course ? "border-red-500" : "border-gray-300"} rounded`}
//                         {...register("course", { required: "Course ID is required" })}
//                     />
//                     {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
//                 </div>

//                 {/* Questions Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Questions</label>
//                     {fields.map((question, index) => (
//                         <div key={question.id} className="mb-4 border p-4 rounded">
//                             {/* Question */}
//                             <div className="mb-2">
//                                 <label className="block text-gray-700 font-bold mb-2">
//                                     Question {index + 1}
//                                 </label>
//                                 <input
//                                     placeholder="Enter Question"
//                                     className={`w-full p-2 border ${
//                                         errors.questions?.[index]?.question
//                                             ? "border-red-500"
//                                             : "border-gray-300"
//                                     } rounded`}
//                                     {...register(`questions.${index}.question`, {
//                                         required: "Question is required",
//                                     })}
//                                 />
//                                 {errors.questions?.[index]?.question && (
//                                     <p className="text-red-500 text-sm">
//                                         {errors.questions[index].question.message}
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Options */}
//                             <label className="block text-gray-700 font-bold mb-2">
//                                 Options
//                             </label>
//                             {[0, 1, 2, 3].map((optionIndex) => (
//                                 <input
//                                     key={optionIndex}
//                                     placeholder={`Option ${optionIndex + 1}`}
//                                     className={`w-full p-2 mb-2 border ${
//                                         errors.questions?.[index]?.options?.[optionIndex]
//                                             ? "border-red-500"
//                                             : "border-gray-300"
//                                     } rounded`}
//                                     {...register(
//                                         `questions.${index}.options.${optionIndex}`,
//                                         {
//                                             required: "Option is required",
//                                         }
//                                     )}
//                                 />
//                             ))}

//                             {/* Correct Answer */}
//                             <label className="block text-gray-700 font-bold mb-2">
//                                 Correct Answer
//                             </label>
//                             <input
//                                 placeholder="Enter Correct Answer"
//                                 className={`w-full p-2 border ${
//                                     errors.questions?.[index]?.correctAnswer
//                                         ? "border-red-500"
//                                         : "border-gray-300"
//                                 } rounded`}
//                                 {...register(`questions.${index}.correctAnswer`, {
//                                     required: "Correct Answer is required",
//                                 })}
//                             />
//                         </div>
//                     ))}
//                     <button
//                         type="button"
//                         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//                         onClick={() =>
//                             append({ question: "", options: ["", "", "", ""], correctAnswer: "" })
//                         }
//                     >
//                         Add Question
//                     </button>
//                 </div>

//                 {/* Max Marks Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Max Marks</label>
//                     <input
//                         type="number"
//                         placeholder="Enter Max Marks"
//                         className={`w-full p-2 border ${
//                             errors.maxMarks ? "border-red-500" : "border-gray-300"
//                         } rounded`}
//                         {...register("maxMarks", { required: "Max Marks are required" })}
//                     />
//                     {errors.maxMarks && <p className="text-red-500 text-sm">{errors.maxMarks.message}</p>}
//                 </div>

//                 {/* Quiz Date Input */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Quiz Date</label>
//                     <input
//                         type="date"
//                         className={`w-full p-2 border ${
//                             errors.quizDate ? "border-red-500" : "border-gray-300"
//                         } rounded`}
//                         {...register("quizDate", { required: "Quiz Date is required" })}
//                     />
//                     {errors.quizDate && <p className="text-red-500 text-sm">{errors.quizDate.message}</p>}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className={`w-full ${id ? "bg-green-500 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded transition-colors duration-200`}
//                 >
//                     {id ? "Update Quiz" : "Create Quiz"}
//                 </button>
//             </form>
//         </div>
//     );
// };
