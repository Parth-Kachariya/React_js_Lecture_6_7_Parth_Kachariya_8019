import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const arr = [
    {
      companyName: "Google",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
      postedDay: "2 days ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Experienced",
      salary: "$45/hour",
      location: "Bangalore, India",
    },
    {
      companyName: "Amazon",
      companyImage: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      postedDay: "1 day ago",
      role: "Full Stack Developer",
      tag1: "Part Time",
      tag2: "Fresher",
      salary: "$25/hour",
      location: "Hyderabad, India",
    },
    {
      companyName: "Microsoft",
      companyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
      postedDay: "3 days ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Experienced",
      salary: "$38/hour",
      location: "Pune, India",
    },
    {
      companyName: "Infosys",
      companyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQM8mpehO210HDZ-NaU80g6nXd55Z2MMLqg&s",
      postedDay: "5 days ago",
      role: "Backend Developer",
      tag1: "Full Time",
      tag2: "Fresher",
      salary: "$20/hour",
      location: "Chennai, India",
    },
    {
      companyName: "TCS",
      companyImage: "https://www.glassdoor.co.in/imgproxy/x1KG-j88IURwsDoN6fzCmR2pMIZVJ1m0e3eZ9yCwX7A/rs::800/aHR0cHM6Ly9kc2xudGx2OXZoanI0LmNsb3VkZnJvbnQubmV0L2Jvd2xzX2ltYWdlcy9ySjBLOW1mdUJIVE1lLmpwZw",
      postedDay: "Today",
      role: "Java Developer",
      tag1: "Full Time",
      tag2: "Experienced",
      salary: "$30/hour",
      location: "Mumbai, India",
    },
    {
      companyName: "Wipro",
      companyImage: "https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png",
      postedDay: "4 days ago",
      role: "React Developer",
      tag1: "Part Time",
      tag2: "Fresher",
      salary: "$22/hour",
      location: "Pune, India",
    },
    {
      companyName: "Flipkart",
      companyImage: "https://cavinkare.com/wp-content/uploads/2021/12/Flipkart-Logo-removebg-preview.png",
      postedDay: "6 days ago",
      role: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Experienced",
      salary: "$28/hour",
      location: "Bangalore, India",
    },
    {
      companyName: "Swiggy",
      companyImage: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png",
      postedDay: "2 days ago",
      role: "Node.js Developer",
      tag1: "Part Time",
      tag2: "Experienced",
      salary: "$35/hour",
      location: "Remote",
    },
    {
      companyName: "Zomato",
      companyImage: "https://www.citypng.com/public/uploads/preview/zomato-round-logo-icon-701751694968327lvye6zxamg.png",
      postedDay: "7 days ago",
      role: "Data Analyst",
      tag1: "Full Time",
      tag2: "Fresher",
      salary: "$26/hour",
      location: "Gurgaon, India",
    },
    {
      companyName: "Startup ABC",
      companyImage: "https://www.shutterstock.com/image-vector/abc-circle-concept-logo-design-260nw-1569569488.jpg",
      postedDay: "1 day ago",
      role: "MERN Stack Developer",
      tag1: "Part Time",
      tag2: "Experienced",
      salary: "$32/hour",
      location: "Remote",
    },
  ];
  return (
    <>
      <h1> 04. props-card-projects</h1>
      <div className="box" >

        {arr.map(function (job, id) {
          return (
            <div key={id}>
              <Card
                companyName={job.companyName}
                companyImage={job.companyImage}
                postedDay={job.postedDay}
                role={job.role}
                tag1={job.tag1}
                tag2={job.tag2}
                salary={job.salary}
                location={job.location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
