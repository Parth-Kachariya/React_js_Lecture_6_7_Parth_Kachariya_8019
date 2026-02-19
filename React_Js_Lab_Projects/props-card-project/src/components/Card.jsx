import React from "react";
import { Bookmark } from "lucide-react/";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="upper">
            <div className="top">
              <img
                src={props.companyImage}
                alt=""
              />
              <button>
                Save <Bookmark size={15} />
              </button>
            </div>
            <div className="center">
              <h3>
                {props.companyName} <span>{props.postedDay}</span>
              </h3>
              <h2>{props.role}</h2>
              <div>
                <button>{props.tag1}</button>
                <button>{props.tag2}</button>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="locat">
              <p>{props.salary}</p>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
