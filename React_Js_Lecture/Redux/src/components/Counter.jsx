import React from 'react'
import {useSelector} from 'react-redux';

const Counter = () => {
    const data=useSelector((state)=>state.value);
  return (
    <>
      <h1 className='text-2xl font-bold text-center mt-4'>Counter: {data}</h1>
      
    </>
  )
}

export default Counter
