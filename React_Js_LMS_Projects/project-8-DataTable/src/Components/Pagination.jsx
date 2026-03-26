import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-center mt-4 items-center space-x-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded cursor-pointer ${
          currentPage === 1 ? "bg-gray-800" : "bg-blue-500 text-white border"
        }`}
      >
        Prev
      </button>

      {[...Array(totalPages).keys()].map((num) => {
        const page = num + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded cursor-pointer ${
              currentPage === page ? "bg-blue-500 text-white border" : "bg-gray-800"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`px-3 py-1 rounded cursor-pointer ${
          currentPage === totalPages || totalPages === 0
            ? "bg-gray-800"
            : "bg-blue-500 text-white border"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
