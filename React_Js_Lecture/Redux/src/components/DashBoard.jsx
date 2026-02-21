import React from 'react'
import {useSelector ,useDispatch} from "react-redux";
import {increase ,decrease ,reset} from "./action";


const DashBoard = () => {
    const count = useSelector((state)=>state.count);
    // const storedata = useSelector((state)=>state);
    const dispatch = useDispatch();
  return (
    <>
    <div>
        {count}
    </div>
    <button onClick={()=>dispatch(increase())}>increase</button>
    <button onClick={()=>dispatch(decrease())}>decrease</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
      
    </>
  )
}

export default DashBoard
