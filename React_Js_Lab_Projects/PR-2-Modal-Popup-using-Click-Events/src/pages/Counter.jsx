import { useState } from "react";

const Counter = () => {
  const [text, setText] = useState("");

  return (
    <div className="h-screen flex bg-gray-400 justify-center items-center">
      <div className="bg-gray-300 p-10 border flex flex-col gap-4 rounded-lg">
        <h1 className="text-center p-3 font-extrabold text-2xl">Character Counter </h1>
        <textarea
          className="border w-full p-4 rounded-lg"
          onChange={(ele) => setText(ele.target.value)}
        >
          your Text
        </textarea>
        <p className="px-4 py-3 bg-gray-200 font-semibold rounded-full gap-2 text-center ">Character Lengh: <span className="font-extrabold text-xl">{text.length}</span></p>
      </div>
    </div>
  );
};

export default Counter;
