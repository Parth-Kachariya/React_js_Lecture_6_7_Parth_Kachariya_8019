import { useReducer } from "react";

useReducer
const Obj = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count > 0 ? state.count - 1 : 0 };

      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
      <div className="max-w-7xl rounded-xl border mx-auto text-center">
        <h1 className="text-xl py-2 font-semibold">useReducer in React JS with OBJ</h1>
        <span className="text-2xl border-2 rounded-xl py-3 px-6 my-4 flex w-fit mx-auto ">
          {state.count}
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
  );
};

export default Obj;
