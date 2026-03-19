import ApiCard from './ApiCard';
import React from 'react'

const ApiList = ({ apis }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {apis.map((api, index) => (
        <ApiCard key={index} api={api} />
      ))}

    </div>
  );
}

export default ApiList