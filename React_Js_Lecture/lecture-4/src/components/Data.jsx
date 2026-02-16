import { useState, useEffect } from "react"
const Data = () => {
  const [student, setstudent] = useState({});
  useEffect(() => {
    fetch("/Student.xml")
      .then(res => res.text())
      .then(str => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");

        const name = xml.getElementsByTagName("name")[0].textContent;
        const age = xml.getElementsByTagName("age")[0].textContent;
        const course = xml.getElementsByTagName("course")[0].textContent;
        const address=xml.getElementsByTagName("address")[0].textContent;

        setstudent({ name, age, course,address });
      })
  }, [])
  return (

    <div className="mt-6">
      <div className="p-8 bg-gray-600">
        <h1 className="text-2xl font-semibold text-center">Student Info</h1>
        <div className="flex justify-center text-center text-lg font-semibold text-white flex-col">
          <p className="pb-4">Name: <span className="text-sm text-amber-600 "> {student.name}</span>  </p>
          <p className="pb-4">Age: <span className="text-sm text-amber-600 ">{student.age} </span> </p>
          <p className="pb-4">Course: <span className="text-sm text-amber-600 ">{student.course} </span> </p>
          <p className="pb-4">Address: <span className="text-sm text-amber-600 "> {student.address}</span> </p>
        </div>
      </div>
    </div>

  )
}

export default Data

// import { useEffect, useState } from "react";

// function App() {
//   const [student, setStudent] = useState({});

//   useEffect(() => {
//     fetch("/student.xml")
//       .then(res => res.text())
//       .then(str => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(str, "text/xml");

//         const name = xml.getElementsByTagName("name")[0].textContent;
//         const age = xml.getElementsByTagName("age")[0].textContent;
//         const course = xml.getElementsByTagName("course")[0].textContent;

//         setStudent({ name, age, course });
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Student Info</h1>
//       <p>Name: {student.name}</p>
//       <p>Age: {student.age}</p>
//       <p>Course: {student.course}</p>
//     </div>
//   );
// }

// export default App;


