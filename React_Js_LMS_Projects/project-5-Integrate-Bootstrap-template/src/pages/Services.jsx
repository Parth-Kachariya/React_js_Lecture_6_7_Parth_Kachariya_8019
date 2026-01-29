import React from 'react';
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      img: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80",
      desc:"Web Design involves creating attractive and responsive website layouts that are easy to use.It focuses on visual design, user experience, and modern design principles."
    },
    {
      title: "React Development",
      img: "https://www.weblineindia.com/wp-content/uploads/2022/02/React-Native-Development-Company.jpg",
      desc:"React Development involves building fast and interactive user interfaces using the React.js library. It emphasizes component-based architecture, state management, rendering."
    },
    { 
      title: "Cyber Security",
      img: "https://humanfocus.co.uk/wp-content/uploads/what-is-cyber-security-800x800.jpg",
      desc:"Cyber Security focuses on protecting computer systems, networks, and data from cyber threats. It includes practices like,  management, and  security protocols."
    }
  ];
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className=" gap-4 justify-content-evenly flex-wrap d-flex">
        <ServiceCard data={services} />
      </div>
    </div>
  );
};

export default Services;
