import React from 'react'

export const AssignmentPage = () => {
  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Assignments</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map(assignment => (
            <div key={assignment._id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{assignment.title}</h2>
                    <p className="text-sm text-gray-600">{assignment.description}</p>
                    <p className="text-sm text-gray-600">Course: {assignment.course}</p>
                    <p className="text-sm text-gray-600">Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600">Max Marks: {assignment.maxMarks}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Submissions</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}


