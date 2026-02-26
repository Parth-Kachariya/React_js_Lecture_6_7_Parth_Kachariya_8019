import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , reset , incrementByAmount } from "./counterSlice";

const Counter = () => {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.value)

  console.log('count' , count);
  
  return(
    <>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>ByAmount</button>
    </>
  )
}

export default Counter