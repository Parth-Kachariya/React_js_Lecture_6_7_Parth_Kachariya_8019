import React from "react";

const ApiCard = ({ api }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold text-lg">{api.name}</h2>

      <p className="text-gray-600 mt-2">{api.description}</p>

      <span className="text-sm bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
        {api.category}
      </span>

      <div className="mt-3">
        <a
          href={`https://${api.link}`}
          target="_blank"
          className="text-blue-600"
        >
          Visit API
        </a>
      </div>
    </div>
  );
};

export default ApiCard;
