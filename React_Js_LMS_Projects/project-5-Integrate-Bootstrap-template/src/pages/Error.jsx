import React from "react";

const Error = () => {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-danger">
      <div className="d-flex flex-column gap-4">

        <h1 className="text-center fw-bold p-4 display-1">
          ERROR: 404 PAGE NOT FOUND
        </h1>

        <button
          onClick={refresh}
          className="btn btn-secondary w-25 mx-auto py-2 fw-semibold fs-4"
        >
          Retry
        </button>

      </div>
    </div>
  );
};

export default Error;
