import React from "react";
import CardContent from "./CardContent";

const RightCards = (props) => {
  return (
    <div className="bg-black h-full w-80 shrink-0 border-2  rounded-3xl overflow-hidden relative ">
      <img
        className="h-full object-cover w-full text-white text-xl text-center"
        src={props.img}
        // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={props.tags}
      />
      <CardContent id={props.id} intro={props.intros} tag={props.tags}  /> 
     
    </div>
  );
};

export default RightCards;
