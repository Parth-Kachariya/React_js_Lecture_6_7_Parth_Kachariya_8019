import React from "react";
import ComponentMain from "./components/ComponentMain";
import { createContext } from "react";

const data = createContext();
const data2 = createContext();

const App = () => {
  const emp = {
    name: "Sujal Suneja",
    role: "Front End Developer",
  };
  const hr = {
    name: "Krish Korat",
    role: "HR ",
  };
  return (
    <>
      <data.Provider value={emp}>
        <data2.Provider value={hr}>
          <ComponentMain/>
        </data2.Provider>
      </data.Provider>
    </>
  );
};

export default App;
export { data , data2};
