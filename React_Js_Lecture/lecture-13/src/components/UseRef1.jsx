import { useRef } from "react";

// Why Use Ref?

/*

Focus on input field
Access Dom Value without re-render
Control media(audio / video)
Interated third-party libraries

// const ref = useRef(initialValue)
*/

const UseRef1 = () => {

  const refInput1 = useRef(null);
  const refInput2 = useRef(null);
  const maindiv = useRef(null)

  const focusInput = () => {
    let ref = refInput1.current.focus();
    let refValue1 = refInput1.current.value;
    let refValue2 = refInput2.current.value;
    maindiv.current.style.backgroundColor = "orange"
    maindiv.current.style.height = "100px"
    maindiv.current.style.width = "100px"
    console.log(ref);
    console.log(refValue1);
    console.log(refValue2);
  };

  return (
    <div>
      <h1 className="text-center p-6 bg-gray-800 text-2xl font-bold  text-white">useRef in React</h1>
      <h2 className="text-left mt-3 bg-blue-400 p-4 font-semibold">Input Focus using useRef</h2>
      <input type="text" name="" id="" ref={refInput1} />
      <input type="text" name="" id="" ref={refInput2} />
      <div ref={maindiv}></div>
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl" onClick={focusInput}>
        focus
      </button>
    </div>
  );
};

export default UseRef1;
