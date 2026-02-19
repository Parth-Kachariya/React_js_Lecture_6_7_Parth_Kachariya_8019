import React from "react";
import RightCards from "./RightCards";

const Rightcontent = (props) => {
  // console.log(props.person)
  return (
    <div
      id="scroll"
      className=" w-full p-3 flex overflow-x-auto flex-nowrap gap-5 "
    >
      {/* <RightCards emp={props.person}/> */}
      {/* <RightCards /> */}
      {props.person.map((item, id) => {
        return  <RightCards key={id} id={id} img={item.image} intros={item.intro} tags={item.tag} />
      })}
    </div>
  );
};

export default Rightcontent;
