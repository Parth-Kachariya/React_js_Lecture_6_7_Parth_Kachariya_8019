import { useReducer } from "react";

useReducer
// [{count : 0}]
const ArrayObj = () => {
     const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return [{ count: state[0].count + 1 }];

      case "DECREMENT":
        return [{ count: state[0].count > 0 ? state[0].count - 1 : 0 }];

      case "RESET":
        return [{ count: 0 }];

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, [{ count: 0 }]);
  return (
   <div className="max-w-7xl border mx-auto text-center mt-5 rounded-xl ">
      <h1 className="text-xl py-2 font-semibold">useReducer in React JS ARRY OBJ</h1>
      <span className="text-2xl border-2 rounded-xl py-3 px-6 my-4 flex w-fit mx-auto ">
        {state[0].count}
      </span>{" "}
      <br />
      <button
        className="px-6 py-3 bg-red-600  font-semibold text-xl  m-3 rounded-xl text-white"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="px-6 py-3 bg-red-600  font-semibold text-xl  m-3 rounded-xl text-white"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button
        className="px-6 py-3 bg-red-600  font-semibold text-xl  m-3 rounded-xl text-white"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  )
}

export default ArrayObj
