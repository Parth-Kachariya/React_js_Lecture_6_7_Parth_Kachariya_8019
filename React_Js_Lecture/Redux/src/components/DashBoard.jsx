import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './action';
import Counter from './Counter';


const DashBoard = () => {
  const data = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className='bg-gray-700  font-bold p-6 text-2xl text-white  text-center'>DashBoard</div>
      <div>
        <h1 className='text-2xl font-bold text-center mt-4'>Counter: {data}</h1>
        <div className='text-center my-5'>
          <button className='bg-blue-500 p-3 rounded-xl ms-3 text-center' onClick={() => dispatch(increment())}>Increment</button>
          <button className='bg-blue-500 p-3 rounded-xl ms-3 text-center' onClick={() => dispatch(decrement())}>Decrement</button>
          <button className='bg-blue-500 p-3 rounded-xl ms-3 text-center' onClick={() => dispatch(reset())}>Reset</button>

        </div>
      </div>
      <Counter />
      <div className='bg-gray-700  font-bold my-5 p-6 text-2xl text-white  text-center'>DashBoard</div>


    </>

  )
}

export default DashBoard