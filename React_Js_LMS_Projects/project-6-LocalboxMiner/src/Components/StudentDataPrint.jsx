    import React from "react";

    const StudentDataPrint = ({ student, handledelete, handleEdit }) => {
    if (student.length === 0) {
        return <span className="text-gray-400 text-center flex justify-center">Student Not Found</span>;
    }
    return (
        <div className="">
        {student.map((student, index) => {
            return (
            <div
                key={index}
                className="border-2 border-gray-400 bg-gray-700 p-4 rounded mb-3 flex justify-between items-center"
            >
                <div className="text-white">
                <p>Name: {student.name}</p>
                <p>course: {student.course}</p>
                <p>Email: {student.email}</p>
                </div>

                <div className="space-x-2">
                <button
                    onClick={() => handleEdit(index)}
                    className= " cursor-pointer bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <button
                    onClick={() => handledelete(index)}
                    className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
                </div>
            </div>
            );
        })}
        </div>
    );
    };

    export default StudentDataPrint;
